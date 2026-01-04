package controllers

import (
	"context"
	"fmt"
	"net/http"
	"path/filepath"
	"time"

	db "alit-tourism-backend/internal/database"
	"alit-tourism-backend/internal/models"
	"alit-tourism-backend/internal/storage"
	"alit-tourism-backend/internal/telegram"
	"alit-tourism-backend/internal/utils"

	"github.com/gin-gonic/gin"
	"github.com/minio/minio-go/v7"
)

// CreateVisaInvitationForm — обработчик создания анкеты визового приглашения
func CreateVisaInvitationForm(c *gin.Context) {
	userID := c.GetUint("userID")
	var form models.VisaInvitationForm

	form.UserID = userID

	// Копируем поля из React формы
	form.LastName = c.PostForm("lastName")
	form.FirstName = c.PostForm("firstName")
	form.MiddleName = c.PostForm("middleName")
	form.Gender = c.PostForm("gender")
	form.PlaceOfBirth = c.PostForm("placeOfBirth")
	form.Citizenship = c.PostForm("citizenship")
	form.PassportNumber = c.PostForm("passportNumber")
	form.CountryOfIssue = c.PostForm("countryOfIssue")
	form.AddressKZStreet = c.PostForm("addressKZStreet")
	form.AddressKZBuilding = c.PostForm("addressKZBuilding")
	form.AddressKZBlock = c.PostForm("addressKZBlock")
	form.AddressKZApartment = c.PostForm("addressKZApartment")
	form.TravelItinerary = c.PostForm("travelItinerary")
	form.ResidenceCountry = c.PostForm("residenceCountry")
	form.ResidenceAddressAbroad = c.PostForm("residenceAddressAbroad")
	form.VisaType = c.PostForm("visaType")
	form.VisaIssuanceCountry = c.PostForm("visaIssuanceCountry")
	form.VisaIssuanceCity = c.PostForm("visaIssuanceCity")
	form.TravelHistory = c.PostForm("travelHistory")
	form.PhoneNumber = c.PostForm("phoneNumber")
	form.EmailAddress = c.PostForm("emailAddress")
	form.WorkPlace = c.PostForm("workPlace")
	form.VisaInvitationType = c.PostForm("visaInvitationType")

	// Обработка дат
	form.DateOfBirth = parseDate(c.PostForm("dateOfBirth"))
	form.DateOfIssue = parseDate(c.PostForm("dateOfIssue"))
	form.DateOfExpiry = parseDate(c.PostForm("dateOfExpiry"))
	form.VisaPeriodStart = parseDate(c.PostForm("visaStartDate"))
	form.VisaPeriodEnd = parseDate(c.PostForm("visaEndDate"))

	// 📤 Обработка файла (паспорт)
	file, err := c.FormFile("document")
	if err == nil && file != nil {
		fileName := fmt.Sprintf("%d_%s", time.Now().UnixNano(), filepath.Base(file.Filename))

		openedFile, err := file.Open()
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Ошибка открытия файла"})
			return
		}
		defer openedFile.Close()

		// Загружаем файл в MinIO
		ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
		defer cancel()

		_, err = storage.MinioClient.PutObject(
			ctx,
			"alit-tourism",
			fileName,
			openedFile,
			file.Size,
			minio.PutObjectOptions{ContentType: file.Header.Get("Content-Type")},
		)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Ошибка загрузки в MinIO", "details": err.Error()})
			return
		}

		// Сохраняем только имя файла в базе
		form.PassportURL = fileName

		// Возвращаем URL с учетом окружения (dev/prod)
		fileURL := storage.GetMinioURL("alit-tourism", fileName)
		c.JSON(http.StatusOK, gin.H{
			"message":  "Файл загружен",
			"fileName": fileName,
			"fileURL":  fileURL,
		})
	}

	// 💾 Сохраняем в базу
	if err := db.DB.Create(&form).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Ошибка при сохранении анкеты"})
		return
	}

	// 📱 Отправляем уведомление в Telegram
	visaType := form.VisaInvitationType
	if visaType == "" {
		visaType = "Виза"
	}
	go telegram.NotifyNewVisaForm(form.FirstName, form.LastName, visaType, form.PhoneNumber)

	c.JSON(http.StatusOK, gin.H{
		"message": "Анкета успешно сохранена",
		"data":    form,
	})
}

// 🧩 Вспомогательные функции

func parseDate(value string) time.Time {
	if value == "" {
		return time.Time{}
	}
	layouts := []string{"2006-01-02", time.RFC3339}
	for _, layout := range layouts {
		if t, err := time.Parse(layout, value); err == nil {
			return t
		}
	}
	return time.Time{}
}

func GetUserVisaForms(c *gin.Context) {
	userID := c.GetUint("userID")
	var forms []models.VisaInvitationForm

	if err := db.DB.Where("user_id = ?", userID).Order("created_at DESC").Find(&forms).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error fetching forms"})
		return
	}

	c.JSON(http.StatusOK, forms)
}

// GetFileURL генерирует presigned URL для доступа к файлу в MinIO
func GetFileURL(c *gin.Context) {
	filename := c.Query("filename")
	if filename == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "filename is required"})
		return
	}

	ctx := context.Background()

	// Проверяем существование файла
	_, err := storage.MinioClient.StatObject(ctx, "alit-tourism", filename, minio.StatObjectOptions{})
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{
			"error":    "File not found in storage",
			"details":  err.Error(),
			"filename": filename,
		})
		return
	}

	// Генерируем presigned URL на 1 час
	presignedURL, err := storage.MinioClient.PresignedGetObject(
		ctx,
		"alit-tourism",
		filename,
		time.Hour*1,
		nil,
	)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to generate file URL", "details": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"url": presignedURL.String(),
	})
}

func UpdateVisaStatus(c *gin.Context) {
	formID := c.Param("id")

	var request struct {
		Status *int `json:"status"`
	}

	if err := c.ShouldBindJSON(&request); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request body"})
		return
	}

	// Проверяем что статус передан
	if request.Status == nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Status is required"})
		return
	}

	// Проверяем валидность статуса (0-4)
	if *request.Status < 0 || *request.Status > 4 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid status value. Must be between 0 and 4"})
		return
	}

	var form models.VisaInvitationForm
	if err := db.DB.First(&form, formID).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Visa form not found"})
		return
	}

	// Сохраняем старый статус для лога
	oldStatus := form.Status

	// Обновляем статус
	if err := db.DB.Model(&form).Update("status", *request.Status).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to update status"})
		return
	}

	// Логируем изменение статуса
	statusNames := map[int]string{0: "Новый", 1: "На проверке", 2: "Оплачено", 3: "Одобрено", 4: "Отказано"}
	description := fmt.Sprintf("Status changed from '%s' to '%s'", statusNames[oldStatus], statusNames[*request.Status])
	utils.LogAudit(c, "visa_invitation_form", form.ID, "status_change", oldStatus, *request.Status, description)

	// 📱 Отправляем уведомление при изменении статуса на "Оплачено"
	if *request.Status == 2 {
		clientName := fmt.Sprintf("%s %s", form.FirstName, form.LastName)
		visaType := form.VisaInvitationType
		if visaType == "" {
			visaType = "Виза"
		}
		details := fmt.Sprintf("%s (ID: %d)", visaType, form.ID)
		go telegram.NotifyStatusPaid("Виза", clientName, details)
	}

	c.JSON(http.StatusOK, gin.H{
		"message": "Status updated successfully",
		"data":    form,
	})
}

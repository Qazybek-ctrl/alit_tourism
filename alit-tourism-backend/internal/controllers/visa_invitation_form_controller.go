package controllers

import (
	"context"
	"fmt"
	"net/http"
	"path/filepath"
	"time"

	db "alit-tourism-backend/internal/database"
	"alit-tourism-backend/internal/models"
	"alit-tourism-backend/internal/storage" // ✅ добавь этот импорт (где клиент MinIO)

	"github.com/gin-gonic/gin"
	"github.com/minio/minio-go/v7"
)

// CreateVisaInvitationForm — обработчик создания анкеты визового приглашения
func CreateVisaInvitationForm(c *gin.Context) {
	var form models.VisaInvitationForm

	userIDValue, exists := c.Get("userID")
	if !exists {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Пользователь не найден в токене"})
		return
	}

	userID, ok := userIDValue.(uint)
	if !ok {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Некорректный идентификатор пользователя"})
		return
	}

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

	fmt.Println(c.PostForm("dateOfBirth"))

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

		// ✅ Загружаем файл в MinIO
		ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
		defer cancel()

		uploadInfo, err := storage.MinioClient.PutObject(
			ctx,
			"alit-tourism", // ✅ имя твоего bucket
			fileName,
			openedFile,
			file.Size,
			minio.PutObjectOptions{ContentType: file.Header.Get("Content-Type")},
		)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Ошибка загрузки в MinIO", "details": err.Error()})
			return
		}

		// Формируем URL
		fileURL := fmt.Sprintf("http://%s/%s/%s", storage.MinioEndpoint, uploadInfo.Bucket, uploadInfo.Key)
		form.PassportURL = fileURL
	}

	// 💾 Сохраняем в базу
	if err := db.DB.Create(&form).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Ошибка при сохранении анкеты"})
		return
	}

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


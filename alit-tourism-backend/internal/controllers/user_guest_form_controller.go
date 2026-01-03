package controllers

import (
	"fmt"
	"net/http"

	db "alit-tourism-backend/internal/database"
	"alit-tourism-backend/internal/models"
	"alit-tourism-backend/internal/telegram"
	"alit-tourism-backend/internal/utils"

	"strconv"

	"github.com/gin-gonic/gin"
)

func CreateUserGuestForm(c *gin.Context) {
	userID := c.GetUint("userID")
	var form models.UserGuestForm

	form.UserID = userID

	tourIDStr := c.PostForm("tourId")
	tourID, err := strconv.ParseUint(tourIDStr, 10, 64)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "invalid tour id"})
		return
	}

	form.TourID = uint(tourID)

	lang := c.PostForm("language")
	if lang == "" || lang == "Other" {
		lang = c.PostForm("otherLanguage")
	}
	form.Language = lang

	trip := c.PostForm("tripInterests")
	if trip == "" || trip == "Other" {
		trip = c.PostForm("otherInterest")
	}
	form.TripInterests = trip

	form.FullName = c.PostForm("fullName")
	form.TourType = c.PostForm("tourType")
	form.CountryOfResidence = c.PostForm("countryOfResidence")

	form.VisitPlan = c.PostForm("visitPlan")
	form.PeopleCount = c.PostForm("peopleCount")

	form.Request = c.PostForm("request")
	form.DietaryPreferences = c.PostForm("dietaryPreferences")

	if err := db.DB.Create(&form).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Ошибка при сохранении анкеты"})
		return
	}

	// 📱 Отправляем уведомление в Telegram
	var user models.User
	if err := db.DB.First(&user, userID).Error; err == nil {
		userName := fmt.Sprintf("%s %s", user.FirstName, user.Surname)
		tourName := form.TourType
		if tourName == "" {
			tourName = "Тур #" + fmt.Sprint(form.TourID)
		}
		go telegram.NotifyNewTourForm(userName, tourName, user.PhoneNumber)
	}

	c.JSON(http.StatusOK, gin.H{
		"message": "Анкета успешно сохранена",
		"data":    form,
	})
}

func GetUserGuestForms(c *gin.Context) {
	userID := c.GetUint("userID")
	var forms []models.UserGuestForm

	if err := db.DB.Where("user_id = ?", userID).Order("created_at DESC").Find(&forms).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error fetching forms"})
		return
	}

	c.JSON(http.StatusOK, forms)
}

// UpdateGuestFormStatus — обновление статуса гостевой формы
func UpdateGuestFormStatus(c *gin.Context) {
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

	// Проверяем валидность статуса (0-2)
	if *request.Status < 0 || *request.Status > 2 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid status value. Must be between 0 and 2"})
		return
	}

	var form models.UserGuestForm
	if err := db.DB.First(&form, formID).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Guest form not found"})
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
	statusNames := map[int]string{0: "Новый", 1: "Оплачен", 2: "Отмена"}
	description := fmt.Sprintf("Status changed from '%s' to '%s'", statusNames[oldStatus], statusNames[*request.Status])
	utils.LogAudit(c, "user_guest_form", form.ID, "status_change", oldStatus, *request.Status, description)

	// 📱 Отправляем уведомление при изменении статуса на "Оплачено"
	if *request.Status == 1 {
		var user models.User
		if err := db.DB.First(&user, form.UserID).Error; err == nil {
			clientName := fmt.Sprintf("%s %s", user.FirstName, user.Surname)
			tourName := form.TourType
			if tourName == "" {
				tourName = "Тур #" + fmt.Sprint(form.TourID)
			}
			details := fmt.Sprintf("%s (ID: %d)", tourName, form.ID)
			go telegram.NotifyStatusPaid("Тур", clientName, details)
		}
	}

	c.JSON(http.StatusOK, gin.H{
		"message": "Status updated successfully",
		"data":    form,
	})
}

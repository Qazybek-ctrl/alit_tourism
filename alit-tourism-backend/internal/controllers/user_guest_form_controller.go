package controllers

import (
	"net/http"

	db "alit-tourism-backend/internal/database"
	"alit-tourism-backend/internal/models"

	"github.com/gin-gonic/gin"
)

func CreateUserGuestForm(c *gin.Context) {
	var form models.UserGuestForm

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
	form.CountryOfResidence = c.PostForm("countryOfResidence")

	form.VisitPlan = c.PostForm("visitPlan")
	form.PeopleCount = c.PostForm("peopleCount")

	form.Request = c.PostForm("request")
	form.DietaryPreferences = c.PostForm("dietaryPreferences")

	if err := db.DB.Create(&form).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Ошибка при сохранении анкеты"})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"message": "Анкета успешно сохранена",
		"data":    form,
	})
}

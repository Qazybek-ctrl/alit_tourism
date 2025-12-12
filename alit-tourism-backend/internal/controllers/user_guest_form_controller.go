package controllers

import (
	"net/http"

	db "alit-tourism-backend/internal/database"
	"alit-tourism-backend/internal/models"

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

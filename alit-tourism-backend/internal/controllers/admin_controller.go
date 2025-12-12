package controllers

import (
	"net/http"

	db "alit-tourism-backend/internal/database"
	"alit-tourism-backend/internal/models"

	"github.com/gin-gonic/gin"
)

// GetAllUsers - получить всех пользователей (только для админа)
func GetAllUsers(c *gin.Context) {
	var users []models.User

	if err := db.DB.Select("id, created_at, updated_at, first_name, surname, phone_number, role").Find(&users).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error fetching users"})
		return
	}

	c.JSON(http.StatusOK, users)
}

// UpdateUserRole - обновить роль пользователя (только для админа)
func UpdateUserRole(c *gin.Context) {
	userID := c.Param("id")

	var req struct {
		Role string `json:"role" binding:"required"`
	}

	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request"})
		return
	}

	// Validate role
	if req.Role != "user" && req.Role != "admin" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Role must be 'user' or 'admin'"})
		return
	}

	var user models.User
	if err := db.DB.First(&user, userID).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "User not found"})
		return
	}

	user.Role = req.Role
	if err := db.DB.Save(&user).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error updating user role"})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"message": "User role updated successfully",
		"user":    user,
	})
}

// GetAllGuestForms - получить все guest формы (только для админа)
func GetAllGuestForms(c *gin.Context) {
	var forms []models.UserGuestForm

	if err := db.DB.Preload("User").Order("created_at DESC").Find(&forms).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error fetching forms"})
		return
	}

	c.JSON(http.StatusOK, forms)
}

// GetAllVisaForms - получить все visa формы (только для админа)
func GetAllVisaForms(c *gin.Context) {
	var forms []models.VisaInvitationForm

	if err := db.DB.Preload("User").Order("created_at DESC").Find(&forms).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error fetching forms"})
		return
	}

	c.JSON(http.StatusOK, forms)
}

// GetDashboardStats - получить статистику для дашборда
func GetDashboardStats(c *gin.Context) {
	var userCount int64
	var guestFormCount int64
	var visaFormCount int64

	db.DB.Model(&models.User{}).Count(&userCount)
	db.DB.Model(&models.UserGuestForm{}).Count(&guestFormCount)
	db.DB.Model(&models.VisaInvitationForm{}).Count(&visaFormCount)

	c.JSON(http.StatusOK, gin.H{
		"total_users":      userCount,
		"total_tour_forms": guestFormCount,
		"total_visa_forms": visaFormCount,
	})
}

package controllers

import (
	"net/http"
	"strconv"

	db "alit-tourism-backend/internal/database"
	"alit-tourism-backend/internal/models"

	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
)

// GetAllUsers - получить всех пользователей (только для админа)
func GetAllUsers(c *gin.Context) {
	var users []models.User
	var total int64

	// Параметры пагинации
	page := c.DefaultQuery("page", "1")
	limit := c.DefaultQuery("limit", "10")
	search := c.Query("search")

	// Конвертируем в int
	pageInt := 1
	limitInt := 10
	if p, err := strconv.Atoi(page); err == nil && p > 0 {
		pageInt = p
	}
	if l, err := strconv.Atoi(limit); err == nil && l > 0 {
		limitInt = l
	}

	offset := (pageInt - 1) * limitInt

	// Базовый запрос
	query := db.DB.Model(&models.User{})

	// Поиск по имени, фамилии или номеру телефона
	if search != "" {
		query = query.Where("first_name LIKE ? OR surname LIKE ? OR phone_number LIKE ?",
			"%"+search+"%", "%"+search+"%", "%"+search+"%")
	}

	// Получаем общее количество
	query.Count(&total)

	// Получаем пользователей с пагинацией
	if err := query.Select("id, created_at, updated_at, first_name as firstname, surname, phone_number, role").
		Offset(offset).
		Limit(limitInt).
		Order("created_at DESC").
		Find(&users).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error fetching users"})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"data":        users,
		"total":       total,
		"page":        pageInt,
		"limit":       limitInt,
		"total_pages": (total + int64(limitInt) - 1) / int64(limitInt),
	})
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
	var total int64

	// Параметры пагинации
	page := c.DefaultQuery("page", "1")
	limit := c.DefaultQuery("limit", "10")
	search := c.Query("search")
	status := c.Query("status")

	// Конвертируем в int
	pageInt := 1
	limitInt := 10
	if p, err := strconv.Atoi(page); err == nil && p > 0 {
		pageInt = p
	}
	if l, err := strconv.Atoi(limit); err == nil && l > 0 {
		limitInt = l
	}

	offset := (pageInt - 1) * limitInt

	// Базовый запрос
	query := db.DB.Model(&models.UserGuestForm{}).Preload("User")

	// Поиск по имени, фамилии или номеру телефона пользователя
	if search != "" {
		query = query.Joins("JOIN users ON users.id = user_guest_forms.user_id").
			Where("users.first_name LIKE ? OR users.surname LIKE ? OR users.phone_number LIKE ? OR user_guest_forms.full_name LIKE ?",
				"%"+search+"%", "%"+search+"%", "%"+search+"%", "%"+search+"%")
	}

	// Фильтр по статусу
	if status != "" && status != "all" {
		if statusInt, err := strconv.Atoi(status); err == nil {
			query = query.Where("user_guest_forms.status = ?", statusInt)
		}
	}

	// Получаем общее количество
	query.Count(&total)

	// Получаем формы с пагинацией
	if err := query.Offset(offset).
		Limit(limitInt).
		Order("user_guest_forms.created_at DESC").
		Find(&forms).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error fetching forms"})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"data":        forms,
		"total":       total,
		"page":        pageInt,
		"limit":       limitInt,
		"total_pages": (total + int64(limitInt) - 1) / int64(limitInt),
	})
}

// GetAllVisaForms - получить все visa формы (только для админа)
func GetAllVisaForms(c *gin.Context) {
	var forms []models.VisaInvitationForm
	var total int64

	// Параметры пагинации
	page := c.DefaultQuery("page", "1")
	limit := c.DefaultQuery("limit", "10")
	search := c.Query("search")
	status := c.Query("status")

	// Конвертируем в int
	pageInt := 1
	limitInt := 10
	if p, err := strconv.Atoi(page); err == nil && p > 0 {
		pageInt = p
	}
	if l, err := strconv.Atoi(limit); err == nil && l > 0 {
		limitInt = l
	}

	offset := (pageInt - 1) * limitInt

	// Базовый запрос
	query := db.DB.Model(&models.VisaInvitationForm{}).Preload("User")

	// Поиск по имени, фамилии или номеру телефона
	if search != "" {
		query = query.Joins("JOIN users ON users.id = visa_invitation_forms.user_id").
			Where("users.first_name LIKE ? OR users.surname LIKE ? OR users.phone_number LIKE ? OR visa_invitation_forms.first_name LIKE ? OR visa_invitation_forms.last_name LIKE ? OR visa_invitation_forms.phone_number LIKE ?",
				"%"+search+"%", "%"+search+"%", "%"+search+"%", "%"+search+"%", "%"+search+"%", "%"+search+"%")
	}

	// Фильтр по статусу
	if status != "" && status != "all" {
		if statusInt, err := strconv.Atoi(status); err == nil {
			query = query.Where("visa_invitation_forms.status = ?", statusInt)
		}
	}

	// Получаем общее количество
	query.Count(&total)

	// Получаем формы с пагинацией
	if err := query.Offset(offset).
		Limit(limitInt).
		Order("visa_invitation_forms.created_at DESC").
		Find(&forms).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error fetching forms"})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"data":        forms,
		"total":       total,
		"page":        pageInt,
		"limit":       limitInt,
		"total_pages": (total + int64(limitInt) - 1) / int64(limitInt),
	})
}

// GetDashboardStats - получить статистику для дашборда
func GetDashboardStats(c *gin.Context) {
	var userCount int64
	var guestFormCount int64
	var visaFormCount int64
	var newGuestFormsCount int64
	var newVisaFormsCount int64

	db.DB.Model(&models.User{}).Count(&userCount)
	db.DB.Model(&models.UserGuestForm{}).Count(&guestFormCount)
	db.DB.Model(&models.VisaInvitationForm{}).Count(&visaFormCount)

	// Count new applications (status = 0)
	db.DB.Model(&models.UserGuestForm{}).Where("status = ?", 0).Count(&newGuestFormsCount)
	db.DB.Model(&models.VisaInvitationForm{}).Where("status = ?", 0).Count(&newVisaFormsCount)

	c.JSON(http.StatusOK, gin.H{
		"total_users":      userCount,
		"total_tour_forms": guestFormCount,
		"total_visa_forms": visaFormCount,
		"new_guest_forms":  newGuestFormsCount,
		"new_visa_forms":   newVisaFormsCount,
	})
}

// UpdateUserPassword - обновить пароль пользователя (только для админа)
func UpdateUserPassword(c *gin.Context) {
	userID := c.Param("id")

	var req struct {
		NewPassword     string `json:"new_password" binding:"required,min=6"`
		ConfirmPassword string `json:"confirm_password" binding:"required"`
	}

	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request"})
		return
	}

	// Check if passwords match
	if req.NewPassword != req.ConfirmPassword {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Passwords do not match"})
		return
	}

	var user models.User
	if err := db.DB.First(&user, userID).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "User not found"})
		return
	}

	// Hash new password
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(req.NewPassword), bcrypt.DefaultCost)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error hashing password"})
		return
	}

	user.Password = string(hashedPassword)
	if err := db.DB.Save(&user).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error updating password"})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"message": "Password updated successfully",
	})
}

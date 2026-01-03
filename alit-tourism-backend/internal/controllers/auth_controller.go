package controllers

import (
	"alit-tourism-backend/internal/auth"
	db "alit-tourism-backend/internal/database"
	"alit-tourism-backend/internal/models"
	"alit-tourism-backend/internal/telegram"
	"alit-tourism-backend/internal/utils"
	"net/http"

	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
)

type LoginInput struct {
	PhoneNumber string `json:"phone_number" binding:"required"`
	Password    string `json:"password" binding:"required"`
}

func LoginHandler(c *gin.Context) {
	var input LoginInput
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	cleanPhone := utils.FormatPhoneNumber(input.PhoneNumber)

	var user models.User
	if err := db.DB.Where("phone_number = ?", cleanPhone).First(&user).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "User with this phone number not found"})
		return
	}

	if err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(input.Password)); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "incorrect password"})
		return
	}

	token, err := auth.GenerateToken(user.ID, 720)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "could not generate token"})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"token": token,
		"user": gin.H{
			"id":           user.ID,
			"firstname":    user.FirstName,
			"surname":      user.Surname,
			"phone_number": user.PhoneNumber,
			"role":         user.Role,
		},
	})
}

type RegisterInput struct {
	FirstName   string `json:"firstname" binding:"required"`
	Surname     string `json:"surname"`
	PhoneNumber string `json:"phone_number" binding:"required"`
	Password    string `json:"password" binding:"required,min=6"`
}

func RegisterHandler(c *gin.Context) {
	var input RegisterInput
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	cleanPhone := utils.FormatPhoneNumber(input.PhoneNumber)

	// Проверка на существующий номер
	var existing models.User
	if err := db.DB.Where("phone_number = ?", cleanPhone).First(&existing).Error; err == nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "номер телефона уже зарегистрирован"})
		return
	}

	// Хеширование пароля
	hashed, err := bcrypt.GenerateFromPassword([]byte(input.Password), bcrypt.DefaultCost)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "could not hash password"})
		return
	}

	// Создаем пользователя
	user := models.User{
		FirstName:   input.FirstName,
		Surname:     input.Surname,
		PhoneNumber: cleanPhone,
		Password:    string(hashed),
		Role:        "user", // Default role
	}

	if err := db.DB.Create(&user).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// 📱 Отправляем уведомление в Telegram
	go telegram.NotifyUserRegistration(user.FirstName, user.Surname, user.PhoneNumber)

	// -------------------------
	// 🔥 Генерируем токен как в логине
	// -------------------------
	token, err := auth.GenerateToken(user.ID, 720)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "could not generate token"})
		return
	}

	// Отправляем как в LoginHandler
	c.JSON(http.StatusCreated, gin.H{
		"token": token,
		"user": gin.H{
			"id":           user.ID,
			"firstname":    user.FirstName,
			"surname":      user.Surname,
			"phone_number": user.PhoneNumber,
			"role":         user.Role,
		},
	})
}

package controllers

import (
	db "alit-tourism-backend/internal/database"
	"alit-tourism-backend/internal/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

func ProfileHandler(c *gin.Context) {
	userID := c.GetUint("userID")

	var user models.User
	if err := db.DB.First(&user, userID).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "user not found"})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"id":           user.ID,
		"firstname":    user.FirstName,
		"surname":      user.Surname,
		"phone_number": user.PhoneNumber,
		"role":         user.Role,
	})
}

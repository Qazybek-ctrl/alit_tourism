package controllers

import (
	"alit-tourism-backend/internal/auth"
	db "alit-tourism-backend/internal/database"
	"alit-tourism-backend/internal/models"
	"net/http"
	"strings"
	"time"

	"github.com/gin-gonic/gin"
)

func ProfileHandler(c *gin.Context) {
	authHeader := c.GetHeader("Authorization")
	if authHeader == "" {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "no token provided"})
		return
	}

	tokenString := strings.TrimPrefix(authHeader, "Bearer ")
	if tokenString == authHeader {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "invalid token format"})
		return
	}

	claims, err := auth.ParseToken(tokenString)
	if err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "invalid token"})
		return
	}

	if exp, ok := claims["exp"].(float64); ok {
		if int64(exp) < time.Now().Unix() {
			c.JSON(http.StatusUnauthorized, gin.H{"error": "token expired"})
			return
		}
	}

	userID, ok := claims["user_id"].(float64)
	if !ok {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "invalid claims"})
		return
	}

	var user models.User
	if err := db.DB.First(&user, uint(userID)).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "user not found"})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"id":           user.ID,
		"firstname":    user.FirstName,
		"surname":      user.Surname,
		"phone_number": user.PhoneNumber,
	})
}

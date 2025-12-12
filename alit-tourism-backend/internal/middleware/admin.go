package middleware

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

// AdminRequired проверяет, что пользователь имеет роль admin
func AdminRequired() gin.HandlerFunc {
	return func(c *gin.Context) {
		role, exists := c.Get("userRole")
		if !exists {
			c.JSON(http.StatusUnauthorized, gin.H{"error": "Unauthorized"})
			c.Abort()
			return
		}

		if role != "admin" {
			c.JSON(http.StatusForbidden, gin.H{"error": "Access denied. Admin role required."})
			c.Abort()
			return
		}

		c.Next()
	}
}

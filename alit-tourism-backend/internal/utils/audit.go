package utils

import (
	"encoding/json"
	"time"

	db "alit-tourism-backend/internal/database"
	"alit-tourism-backend/internal/models"

	"github.com/gin-gonic/gin"
)

// LogAudit создает запись в логе аудита
func LogAudit(c *gin.Context, entityType string, entityID uint, action string, oldValue, newValue interface{}, description string) error {
	userID, exists := c.Get("userID")
	var uid uint
	if exists {
		uid = userID.(uint)
	}

	// Получаем имя пользователя
	var user models.User
	userName := "System"
	if uid > 0 {
		if err := db.DB.First(&user, uid).Error; err == nil {
			userName = user.FirstName + " " + user.Surname
		}
	}

	// Конвертируем значения в JSON
	oldJSON, _ := json.Marshal(oldValue)
	newJSON, _ := json.Marshal(newValue)

	log := models.AuditLog{
		EntityType:  entityType,
		EntityID:    entityID,
		Action:      action,
		UserID:      uid,
		UserName:    userName,
		OldValue:    string(oldJSON),
		NewValue:    string(newJSON),
		Description: description,
		IPAddress:   c.ClientIP(),
		Timestamp:   time.Now(),
	}

	return db.DB.Create(&log).Error
}

// GetAuditLogs получает логи для конкретной сущности
func GetAuditLogs(entityType string, entityID uint) ([]models.AuditLog, error) {
	var logs []models.AuditLog
	err := db.DB.Where("entity_type = ? AND entity_id = ?", entityType, entityID).
		Order("timestamp DESC").
		Find(&logs).Error
	return logs, err
}

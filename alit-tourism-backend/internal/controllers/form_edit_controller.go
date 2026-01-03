package controllers

import (
	"encoding/json"
	"net/http"
	"strconv"

	db "alit-tourism-backend/internal/database"
	"alit-tourism-backend/internal/models"
	"alit-tourism-backend/internal/utils"

	"github.com/gin-gonic/gin"
)

// UpdateGuestForm - обновить данные гостевой формы
func UpdateGuestForm(c *gin.Context) {
	formID := c.Param("id")

	var form models.UserGuestForm
	if err := db.DB.First(&form, formID).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Guest form not found"})
		return
	}

	// Сохраняем старые данные для лога
	oldData, _ := json.Marshal(form)

	var updateData struct {
		TourType           *string `json:"tour_type"`
		FullName           *string `json:"full_name"`
		CountryOfResidence *string `json:"country_of_residence"`
		Language           *string `json:"language"`
		VisitPlan          *string `json:"visit_plan"`
		PeopleCount        *string `json:"people_count"`
		TripInterests      *string `json:"trip_interests"`
		Request            *string `json:"request"`
		DietaryPreferences *string `json:"dietary_preferences"`
	}

	if err := c.ShouldBindJSON(&updateData); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request body"})
		return
	}

	// Обновляем только переданные поля
	if updateData.TourType != nil {
		form.TourType = *updateData.TourType
	}
	if updateData.FullName != nil {
		form.FullName = *updateData.FullName
	}
	if updateData.CountryOfResidence != nil {
		form.CountryOfResidence = *updateData.CountryOfResidence
	}
	if updateData.Language != nil {
		form.Language = *updateData.Language
	}
	if updateData.VisitPlan != nil {
		form.VisitPlan = *updateData.VisitPlan
	}
	if updateData.PeopleCount != nil {
		form.PeopleCount = *updateData.PeopleCount
	}
	if updateData.TripInterests != nil {
		form.TripInterests = *updateData.TripInterests
	}
	if updateData.Request != nil {
		form.Request = *updateData.Request
	}
	if updateData.DietaryPreferences != nil {
		form.DietaryPreferences = *updateData.DietaryPreferences
	}

	if err := db.DB.Save(&form).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to update guest form"})
		return
	}

	// Логируем изменение
	newData, _ := json.Marshal(form)
	utils.LogAudit(c, "user_guest_form", form.ID, "data_update", string(oldData), string(newData), "Guest form data updated")

	c.JSON(http.StatusOK, gin.H{
		"message": "Guest form updated successfully",
		"data":    form,
	})
}

// UpdateVisaForm - обновить данные визовой формы
func UpdateVisaForm(c *gin.Context) {
	formID := c.Param("id")

	var form models.VisaInvitationForm
	if err := db.DB.First(&form, formID).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Visa form not found"})
		return
	}

	// Сохраняем старые данные для лога
	oldData, _ := json.Marshal(form)

	var updateData map[string]interface{}
	if err := c.ShouldBindJSON(&updateData); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request body"})
		return
	}

	// Обновляем переданные поля
	if err := db.DB.Model(&form).Updates(updateData).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to update visa form"})
		return
	}

	// Перезагружаем форму
	db.DB.First(&form, formID)

	// Логируем изменение
	newData, _ := json.Marshal(form)
	utils.LogAudit(c, "visa_invitation_form", form.ID, "data_update", string(oldData), string(newData), "Visa form data updated")

	c.JSON(http.StatusOK, gin.H{
		"message": "Visa form updated successfully",
		"data":    form,
	})
}

// GetAuditLogs - получить историю логов для сущности
func GetAuditLogs(c *gin.Context) {
	entityType := c.Param("entity_type")
	entityIDStr := c.Param("entity_id")

	// Конвертируем entityID в uint
	entityID, err := strconv.ParseUint(entityIDStr, 10, 32)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid entity ID"})
		return
	}

	logs, err := utils.GetAuditLogs(entityType, uint(entityID))
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch audit logs"})
		return
	}

	c.JSON(http.StatusOK, logs)
}

package models

import (
	"time"

	"gorm.io/gorm"
)

type AuditLog struct {
	gorm.Model

	// Тип сущности (user_guest_form, visa_invitation_form, user)
	EntityType string `json:"entity_type" gorm:"not null;index"`

	// ID сущности
	EntityID uint `json:"entity_id" gorm:"not null;index"`

	// Тип действия (status_change, data_update, create, delete)
	Action string `json:"action" gorm:"not null"`

	// ID пользователя, который совершил действие
	UserID uint `json:"user_id" gorm:"index"`

	// Имя пользователя для быстрого доступа
	UserName string `json:"user_name"`

	// Старое значение (JSON)
	OldValue string `json:"old_value" gorm:"type:text"`

	// Новое значение (JSON)
	NewValue string `json:"new_value" gorm:"type:text"`

	// Описание изменения
	Description string `json:"description"`

	// IP адрес
	IPAddress string `json:"ip_address"`

	// Время действия
	Timestamp time.Time `json:"timestamp" gorm:"not null;index"`

	User User `gorm:"foreignKey:UserID;constraint:OnUpdate:CASCADE,OnDelete:SET NULL;"`
}

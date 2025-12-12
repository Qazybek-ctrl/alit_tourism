package models

import "gorm.io/gorm"

type User struct {
	gorm.Model
	FirstName   string `json:"firstname"`
	Surname     string `json:"surname"`
	PhoneNumber string `json:"phone_number" gorm:"unique"`
	Password    string `json:"password"`
	Role        string `json:"role" gorm:"default:'user'"` // user or admin
}

package models

import "gorm.io/gorm"

type User struct {
    gorm.Model
    FirstName   string `json:"firstname"`
    Surname     string `json:"surname"`
    PhoneNumber string `json:"phone_number" gorm:"unique"`
    Password    string `json:"password"`
}
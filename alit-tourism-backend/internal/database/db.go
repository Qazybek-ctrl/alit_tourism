package db

import (
	"fmt"
	"log"

	"alit-tourism-backend/internal/models"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

func Connect() {
	dsn := "host=localhost user=postgres password=1234 dbname=alit_tourism port=5433 sslmode=disable"
	database, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal("❌ Ошибка подключения к базе:", err)
	}
	fmt.Println("✅ Подключение к базе успешно!")

	err = database.AutoMigrate(&models.User{})
	if err != nil {
		log.Fatal("❌ Ошибка миграции:", err)
	}
	fmt.Println("✅ Таблица users готова!")

	DB = database
}

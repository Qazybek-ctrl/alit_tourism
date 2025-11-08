package database

import (
	"fmt"
	"log"
	"os"

	"alit-tourism-backend/internal/models"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

func Connect() *gorm.DB {

	host := os.Getenv("DB_HOST")
	port := os.Getenv("DB_PORT")
	user := os.Getenv("DB_USER")
	password := os.Getenv("DB_PASSWORD")
	dbname := os.Getenv("DB_NAME")

	dsn := fmt.Sprintf(
		"host=%s user=%s password=%s dbname=%s port=%s sslmode=disable",
		host, user, password, dbname, port,
	)
	// Подключаемся к базе
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatalf("Ошибка подключения к базе данных: %v", err)
	}

	// Миграции
	if err := db.AutoMigrate(
		&models.User{},
		&models.VisaInvitationForm{},
		&models.UserGuestForm{},
	); err != nil {
		log.Fatalf("Ошибка миграции базы данных: %v", err)
	}

	DB = db
	fmt.Printf("✅ Connected to DB (%s)\n", os.Getenv("APP_ENV"))
	return db
}

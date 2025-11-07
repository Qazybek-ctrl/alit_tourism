package db

import (
	"log"
	"os"

	"alit-tourism-backend/internal/models"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

// Musin123!
// alit-user
// 5432
func Connect() *gorm.DB {
	dsn := os.Getenv("DATABASE_URL")
	if dsn == "" {
		dsn = "host=127.0.0.1 user=alit-user password=1234 dbname=alit_tourism port=5433 sslmode=disable"
	}

	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatalf("Ошибка подключения к базе данных: %v", err)
	}

	if err := db.AutoMigrate(
		&models.User{},
		&models.VisaInvitationForm{},
		&models.UserGuestForm{},
	); err != nil {
		log.Fatalf("Ошибка миграции базы данных: %v", err)
	}

	DB = db
	return db
}

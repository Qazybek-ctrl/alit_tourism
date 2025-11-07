package database

import (
	"fmt"
	"log"
	"os"

	"alit-tourism-backend/internal/models"

	"github.com/joho/godotenv"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

func Connect() *gorm.DB {
	// Определяем какой .env файл грузить
	envFile := "local.env"
	if os.Getenv("APP_ENV") == "prod" {
		envFile = "prod.env"
	}

	// Загружаем переменные окружения из файла
	err := godotenv.Load(envFile)
	if err != nil {
		log.Fatalf("Ошибка загрузки %s: %v", envFile, err)
	}

	// Получаем DATABASE_URL из env
	dsn := os.Getenv("DATABASE_URL")
	if dsn == "" {
		log.Fatal("DATABASE_URL не задана в env файле")
	}

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

package main

import (
	db "alit-tourism-backend/internal/database"
	"alit-tourism-backend/internal/router"
	"alit-tourism-backend/internal/storage"
	"alit-tourism-backend/internal/telegram"
	"fmt"
	"log"
	"os"

	"github.com/joho/godotenv"
)

func init() {
	mode := os.Getenv("GIN_MODE")
	fmt.Println(mode)

	if mode == "" {
		mode = "debug"
	}

	envFile := "local.env"
	if mode == "release" {
		envFile = "prod.env"
	}

	if err := godotenv.Load(envFile); err != nil {
		log.Printf("⚠️ Не удалось загрузить %s: %v", envFile, err)
	} else {
		log.Printf("✅ Загружен конфиг: %s", envFile)
	}
}

func main() {
	db.Connect()

	storage.InitMinIO()

	// Инициализация Telegram бота
	if err := telegram.InitTelegram(); err != nil {
		log.Printf("⚠️ Failed to initialize Telegram: %v", err)
	}

	r := router.SetupRouter()
	r.Run(":8080")
}

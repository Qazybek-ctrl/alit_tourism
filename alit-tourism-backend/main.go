package main

import (
	db "alit-tourism-backend/internal/database"
	"alit-tourism-backend/internal/router"
	"os"
	"log"
	"fmt"

	"alit-tourism-backend/internal/storage"
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

	r := router.SetupRouter()
	r.Run(":8080")
}

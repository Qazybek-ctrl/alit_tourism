package main

import (
	"alit-tourism-backend/internal/controllers"
	db "alit-tourism-backend/internal/database"
	"alit-tourism-backend/internal/middleware"
	"time"
	"os"
	"log"
	"fmt"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
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

	r := gin.Default()

	r.SetTrustedProxies([]string{"127.0.0.1", "::1"})

	r.Use(cors.New(cors.Config{
		AllowOrigins: []string{
			"http://localhost:5173",
			"http://89.207.253.252",
			"http://89.207.253.252:80",
			"http://89.207.253.252:8080",
			"https://89.207.253.252",
			"https://ailt-tourism.com",
			"https://www.ailt-tourism.com",
			"http://ailt-tourism.com",
			"http://www.ailt-tourism.com",
		},
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Authorization"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
		MaxAge:           12 * time.Hour,
	}))

	api := r.Group("/api")
	{
		api.POST("/login", controllers.LoginHandler)
		api.POST("/register", controllers.RegisterHandler)
	}

	protected := api.Group("/")
	protected.Use(middleware.AuthRequired())
	{
		protected.GET("/profile", controllers.ProfileHandler)
		protected.POST("/visa/invitation", controllers.CreateVisaInvitationForm)
		protected.POST("/form/guest", controllers.CreateUserGuestForm)
	}

	r.Run(":8080")
}

package main

import (
	"alit-tourism-backend/internal/controllers"
	db "alit-tourism-backend/internal/database"
	"alit-tourism-backend/internal/middleware"

	"github.com/gin-gonic/gin"

	"time"

	"github.com/gin-contrib/cors"
)

func main() {
	db.Connect()

	r := gin.Default()

	r.Use(cors.New(cors.Config{
		AllowOrigins: []string{
			"http://localhost:5173",
			"http://89.207.253.252",
			"http://89.207.253.252:80",
			"http://89.207.253.252:8080",
			"https://89.207.253.252",
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
	}

	r.Run(":8080")
}

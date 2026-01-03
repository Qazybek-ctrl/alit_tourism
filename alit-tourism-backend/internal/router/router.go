package router

import (
	"alit-tourism-backend/internal/controllers"
	"alit-tourism-backend/internal/middleware"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func SetupRouter() *gin.Engine {
	r := gin.Default()

	r.SetTrustedProxies([]string{"127.0.0.1", "::1"})

	// CORS
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
		AllowMethods:     []string{"GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Authorization"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
		MaxAge:           12 * time.Hour,
	}))

	// Public routes
	api := r.Group("/api")
	{
		api.POST("/login", controllers.LoginHandler)
		api.POST("/register", controllers.RegisterHandler)
	}

	// Protected routes
	protected := api.Group("/")
	protected.Use(middleware.AuthRequired())
	{
		protected.GET("/profile", controllers.ProfileHandler)
		protected.POST("/visa/invitation", controllers.CreateVisaInvitationForm)
		protected.POST("/form/guest", controllers.CreateUserGuestForm)
		protected.GET("/forms/guest", controllers.GetUserGuestForms)
		protected.GET("/forms/visa", controllers.GetUserVisaForms)
	}

	// Admin routes
	admin := api.Group("/admin")
	admin.Use(middleware.AuthRequired())
	admin.Use(middleware.AdminRequired())
	{
		admin.GET("/users", controllers.GetAllUsers)
		admin.PUT("/users/:id/role", controllers.UpdateUserRole)
		admin.PUT("/users/:id/password", controllers.UpdateUserPassword)
		admin.GET("/forms/guest", controllers.GetAllGuestForms)
		admin.GET("/forms/visa", controllers.GetAllVisaForms)
		admin.GET("/dashboard/stats", controllers.GetDashboardStats)

		// Status update endpoints
		admin.PATCH("/forms/visa/:id/status", controllers.UpdateVisaStatus)
		admin.PATCH("/forms/guest/:id/status", controllers.UpdateGuestFormStatus)

		// Form edit endpoints
		admin.PUT("/forms/guest/:id", controllers.UpdateGuestForm)
		admin.PUT("/forms/visa/:id", controllers.UpdateVisaForm)

		// Audit logs endpoint
		admin.GET("/audit/:entity_type/:entity_id", controllers.GetAuditLogs)

		// File URL endpoint
		admin.GET("/files/url", controllers.GetFileURL)

		// Excel export endpoint
		admin.GET("/forms/visa/export", controllers.ExportVisaFormsToExcel)
	}

	return r
}

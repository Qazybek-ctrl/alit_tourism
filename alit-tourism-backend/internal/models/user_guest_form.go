package models

import (
	"gorm.io/gorm"
)

type UserGuestForm struct {
	gorm.Model

	UserID uint `json:"user_id" gorm:"not null;index"`
	TourID uint `json:"tour_id"`

	TourType           string `json:"tour_type"`
	FullName           string `json:"full_name"`
	CountryOfResidence string `json:"country_of_residence"`
	Language           string `json:"language"`
	VisitPlan          string `json:"visit_plan"`
	PeopleCount        string `json:"people_count"`
	TripInterests      string `json:"trip_interests"`
	Request            string `json:"request"`
	DietaryPreferences string `json:"dietary_preferences"`

	User User `gorm:"foreignKey:UserID;constraint:OnUpdate:CASCADE,OnDelete:SET NULL;"`
}

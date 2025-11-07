package models

import (
    "time"

    "gorm.io/gorm"
)

type VisaInvitationForm struct {
    gorm.Model

    UserID uint `json:"user_id" gorm:"not null;index"`

    LastName               string    `json:"last_name"`
    FirstName              string    `json:"first_name"`
    MiddleName             string    `json:"middle_name"`
    Gender                 string    `json:"gender"`
    DateOfBirth            time.Time `json:"date_of_birth"`
    PlaceOfBirth           string    `json:"place_of_birth"`
    Citizenship            string    `json:"citizenship"`
    PassportNumber         string    `json:"passport_number"`
    DateOfIssue            time.Time `json:"date_of_issue"`
    DateOfExpiry           time.Time `json:"date_of_expiry"`
    CountryOfIssue         string    `json:"country_of_issue"`
    WorkPlace              string    `json:"work_place"`
    AddressKZStreet        string    `json:"address_kz_street"`
    AddressKZBuilding      string    `json:"address_kz_building"`
    AddressKZBlock         string    `json:"address_kz_block"`
    AddressKZApartment     string    `json:"address_kz_apartment"`
    TravelItinerary        string    `json:"travel_itinerary"`
    ResidenceCountry       string    `json:"residence_country"`
    ResidenceAddressAbroad string    `json:"residence_address_abroad"`
    VisaType               string    `json:"visa_type"`
    VisaPeriodStart        time.Time `json:"visa_period_start"`
    VisaPeriodEnd          time.Time `json:"visa_period_end"`
    VisaIssuanceCountry    string    `json:"visa_issuance_country"`
    VisaIssuanceCity       string    `json:"visa_issuance_city"`
    TravelHistory          string    `json:"travel_history"`
    PhoneNumber            string    `json:"phone_number"`
    EmailAddress           string    `json:"email_address"`
    PassportURL            string    `json:"passport_url"` 

    User User `gorm:"foreignKey:UserID;constraint:OnUpdate:CASCADE,OnDelete:SET NULL;"`
}

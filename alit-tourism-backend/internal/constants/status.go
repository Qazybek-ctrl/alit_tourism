package constants

// Visa Invitation Form Statuses
const (
	VisaStatusNew      = 0 // Новый
	VisaStatusReview   = 1 // На проверке
	VisaStatusPaid     = 2 // Оплачено
	VisaStatusApproved = 3 // Одобрено
	VisaStatusRejected = 4 // Отказано
)

// User Guest Form Statuses
const (
	GuestStatusNew      = 0 // Новый
	GuestStatusPaid     = 1 // Оплачен
	GuestStatusCanceled = 2 // Отмена
)

// VisaStatusNames maps status codes to their names
var VisaStatusNames = map[int]string{
	VisaStatusNew:      "Новый",
	VisaStatusReview:   "На проверке",
	VisaStatusPaid:     "Оплачено",
	VisaStatusApproved: "Одобрено",
	VisaStatusRejected: "Отказано",
}

// GuestStatusNames maps status codes to their names
var GuestStatusNames = map[int]string{
	GuestStatusNew:      "Новый",
	GuestStatusPaid:     "Оплачен",
	GuestStatusCanceled: "Отмена",
}

// IsValidVisaStatus checks if the given status is valid for visa forms
func IsValidVisaStatus(status int) bool {
	_, exists := VisaStatusNames[status]
	return exists
}

// IsValidGuestStatus checks if the given status is valid for guest forms
func IsValidGuestStatus(status int) bool {
	_, exists := GuestStatusNames[status]
	return exists
}

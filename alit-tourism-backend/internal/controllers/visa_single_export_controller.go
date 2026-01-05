package controllers

import (
	"fmt"
	"net/http"
	"time"

	db "alit-tourism-backend/internal/database"
	"alit-tourism-backend/internal/models"

	"github.com/gin-gonic/gin"
	"github.com/xuri/excelize/v2"
)

// ExportSingleVisaFormToExcel - экспорт одной конкретной визовой заявки в Excel на основе шаблона
func ExportSingleVisaFormToExcel(c *gin.Context) {
	// Получаем ID из URL параметра
	id := c.Param("id")

	// Получаем конкретную визовую заявку по ID
	var visaForm models.VisaInvitationForm
	if err := db.DB.Preload("User").Where("id = ?", id).First(&visaForm).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Visa form not found"})
		return
	}

	// Создаем массив с одной записью для совместимости с существующим кодом
	visaForms := []models.VisaInvitationForm{visaForm}

	// Открываем шаблон - путь к файлу в папке backend
	templatePath := "files/template.xlsx"
	f, err := excelize.OpenFile(templatePath)
	if err != nil {
		fmt.Printf("Error opening template file: %v, path: %s\n", err, templatePath)
		c.JSON(http.StatusInternalServerError, gin.H{"error": fmt.Sprintf("Error opening template file: %v", err)})
		return
	}
	defer func() {
		if err := f.Close(); err != nil {
			fmt.Println(err)
		}
	}()

	// Получаем имя первого листа
	sheetName := f.GetSheetName(0)

	// Статусы
	statusMap := map[int]string{
		0: "Новый",
		1: "На проверке",
		2: "Оплачено",
		3: "Одобрено",
		4: "Отказано",
	}

	// Строка-образец для копирования (строка 10)
	templateRow := 10
	// Начинаем заполнять данные с 11-й строки
	startRow := 11

	// Дублируем строку templateRow (строка 10) для заявки
	if err := f.DuplicateRow(sheetName, templateRow); err != nil {
		fmt.Printf("Error duplicating row: %v\n", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error duplicating row"})
		return
	}

	for i, form := range visaForms {
		row := startRow + i

		// Форматируем даты
		birthDate := ""
		if !form.DateOfBirth.IsZero() {
			birthDate = form.DateOfBirth.Format("02.01.2006")
		}

		passportIssueDate := ""
		if !form.DateOfIssue.IsZero() {
			passportIssueDate = form.DateOfIssue.Format("02.01.2006")
		}

		passportExpiryDate := ""
		if !form.DateOfExpiry.IsZero() {
			passportExpiryDate = form.DateOfExpiry.Format("02.01.2006")
		}

		visaPeriodStart := ""
		if !form.VisaPeriodStart.IsZero() {
			visaPeriodStart = form.VisaPeriodStart.Format("02.01.2006")
		}

		visaPeriodEnd := ""
		if !form.VisaPeriodEnd.IsZero() {
			visaPeriodEnd = form.VisaPeriodEnd.Format("02.01.2006")
		}

		userName := ""
		userPhone := ""
		userName = form.User.FirstName + " " + form.User.Surname
		userPhone = form.User.PhoneNumber

		// Формируем полный адрес в Казахстане
		addressKZ := fmt.Sprintf("%s, д.%s, корп.%s, кв.%s",
			form.AddressKZStreet,
			form.AddressKZBuilding,
			form.AddressKZBlock,
			form.AddressKZApartment,
		)

		// Заполняем данные согласно структуре шаблона (строки 9-10)
		// A - Фамилия (в соответствии с паспортом)
		f.SetCellValue(sheetName, fmt.Sprintf("A%d", row), form.LastName)

		// B - Имя (в соответствии с паспортом)
		f.SetCellValue(sheetName, fmt.Sprintf("B%d", row), form.FirstName)

		// C - Отчество (при наличии, в соответствии с паспортом)
		f.SetCellValue(sheetName, fmt.Sprintf("C%d", row), form.MiddleName)

		// D - Пол
		f.SetCellValue(sheetName, fmt.Sprintf("D%d", row), form.Gender)

		// E - Дата и место рождения
		birthInfo := birthDate
		if form.PlaceOfBirth != "" {
			birthInfo = birthDate + ", " + form.PlaceOfBirth
		}
		f.SetCellValue(sheetName, fmt.Sprintf("E%d", row), birthInfo)

		// F - Гражданство
		f.SetCellValue(sheetName, fmt.Sprintf("F%d", row), form.Citizenship)

		// G - Паспорт №
		f.SetCellValue(sheetName, fmt.Sprintf("G%d", row), form.PassportNumber)

		// H - Страна выдачи и срок действия
		passportInfo := form.CountryOfIssue
		if passportIssueDate != "" || passportExpiryDate != "" {
			passportInfo = fmt.Sprintf("%s, выдан: %s, до: %s", form.CountryOfIssue, passportIssueDate, passportExpiryDate)
		}
		f.SetCellValue(sheetName, fmt.Sprintf("H%d", row), passportInfo)

		// I - Адрес места жительства в РК (Улица, дом, корпус, кв.)
		f.SetCellValue(sheetName, fmt.Sprintf("I%d", row), addressKZ)

		// J - Место работы и должность
		f.SetCellValue(sheetName, fmt.Sprintf("J%d", row), form.WorkPlace)

		// K - Страна места жительства за рубежом
		f.SetCellValue(sheetName, fmt.Sprintf("K%d", row), form.ResidenceCountry)

		// L - Адрес места жительства за рубежом
		f.SetCellValue(sheetName, fmt.Sprintf("L%d", row), form.ResidenceAddressAbroad)

		// M - Цель поездки
		f.SetCellValue(sheetName, fmt.Sprintf("M%d", row), form.TravelItinerary)

		// N - Кратко описать маршрут
		f.SetCellValue(sheetName, fmt.Sprintf("N%d", row), form.TravelHistory)

		// O - Тип визы
		f.SetCellValue(sheetName, fmt.Sprintf("O%d", row), form.VisaType)

		// P - Период действия приглашения
		visaPeriod := ""
		if visaPeriodStart != "" && visaPeriodEnd != "" {
			visaPeriod = fmt.Sprintf("с %s по %s", visaPeriodStart, visaPeriodEnd)
		}
		f.SetCellValue(sheetName, fmt.Sprintf("P%d", row), visaPeriod)

		// Q - Кратность
		f.SetCellValue(sheetName, fmt.Sprintf("Q%d", row), form.VisaInvitationType)

		// R - Место подачи заявки (страна, город, наим. визы)
		visaLocation := fmt.Sprintf("%s, %s", form.VisaIssuanceCountry, form.VisaIssuanceCity)
		f.SetCellValue(sheetName, fmt.Sprintf("R%d", row), visaLocation)

		// S - Контакты (телефон, email)
		contacts := fmt.Sprintf("Тел: %s, Email: %s", form.PhoneNumber, form.EmailAddress)
		f.SetCellValue(sheetName, fmt.Sprintf("S%d", row), contacts)

		// T - Пользователь (кто подал заявку)
		f.SetCellValue(sheetName, fmt.Sprintf("T%d", row), userName)

		// U - Телефон пользователя
		f.SetCellValue(sheetName, fmt.Sprintf("U%d", row), userPhone)

		// V - Статус
		f.SetCellValue(sheetName, fmt.Sprintf("V%d", row), statusMap[form.Status])
	}

	// Генерируем имя файла с ID и текущей датой
	filename := fmt.Sprintf("visa_application_%s_%s.xlsx", id, time.Now().Format("20060102_150405"))

	// Устанавливаем заголовки для скачивания файла
	c.Header("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	c.Header("Content-Disposition", fmt.Sprintf("attachment; filename=%s", filename))
	c.Header("Content-Transfer-Encoding", "binary")

	// Отправляем файл
	if err := f.Write(c.Writer); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error writing Excel file"})
		return
	}
}

package telegram

import (
	"context"
	"fmt"
	"os"
	"time"

	"github.com/go-telegram/bot"
)

var (
	telegramBot *bot.Bot
)

var chatIDs = []string{
	"368941169",
	"180167697",
	"1153209109",
}

// InitTelegram инициализирует Telegram бота
func InitTelegram() error {
	token := os.Getenv("TELEGRAM_BOT_TOKEN")

	if token == "" {
		fmt.Println("⚠️ Telegram not configured (TELEGRAM_BOT_TOKEN missing)")
		return nil
	}

	// Проверяем наличие Chat ID
	if len(chatIDs) == 0 {
		fmt.Println("⚠️ No Chat IDs configured in telegram.go")
		return nil
	}

	var err error
	telegramBot, err = bot.New(token)
	if err != nil {
		return fmt.Errorf("failed to create telegram bot: %w", err)
	}

	fmt.Printf("✅ Telegram bot initialized successfully with %d chat(s)\n", len(chatIDs))
	return nil
}

// SendMessage отправляет сообщение всем настроенным Chat ID
func SendMessage(message string) error {
	if telegramBot == nil {
		fmt.Println("⚠️ Telegram not configured, skipping notification")
		return nil
	}

	if len(chatIDs) == 0 {
		fmt.Println("⚠️ No Chat IDs configured, skipping notification")
		return nil
	}

	ctx := context.Background()
	successCount := 0
	errorCount := 0

	// Отправляем сообщение каждому Chat ID
	for _, chatID := range chatIDs {
		_, err := telegramBot.SendMessage(ctx, &bot.SendMessageParams{
			ChatID:    chatID,
			Text:      message,
			ParseMode: "HTML",
		})

		if err != nil {
			fmt.Printf("❌ Failed to send to chat %s: %v\n", chatID, err)
			errorCount++
		} else {
			successCount++
		}
	}

	if successCount > 0 {
		fmt.Printf("✅ Telegram notification sent to %d/%d chat(s)\n", successCount, len(chatIDs))
	}

	if errorCount == len(chatIDs) {
		return fmt.Errorf("failed to send to all chats")
	}

	return nil
}

// NotifyUserRegistration отправляет уведомление о регистрации нового пользователя
func NotifyUserRegistration(firstName, surname, phoneNumber string) {
	message := fmt.Sprintf(
		"� <b>НОВАЯ РЕГИСТРАЦИЯ</b> 🎉\n"+
			"━━━━━━━━━━━━━━━━━━━━\n\n"+
			"👤 <b>Пользователь:</b>\n"+
			"   • Имя: <code>%s %s</code>\n\n"+
			"📱 <b>Контакт:</b>\n"+
			"   • Телефон: <code>%s</code>\n\n"+
			"━━━━━━━━━━━━━━━━━━━━\n"+
			"⏰ <i>%s</i>",
		firstName, surname, phoneNumber,
		getCurrentTime(),
	)

	if err := SendMessage(message); err != nil {
		fmt.Printf("Error sending telegram notification: %v\n", err)
	}
}

// NotifyNewTourForm отправляет уведомление о новой заявке на тур
func NotifyNewTourForm(userName, tourName, phoneNumber string) {
	message := fmt.Sprintf(
		"✈️ <b>НОВАЯ ЗАЯВКА НА ТУР</b> ✈️\n"+
			"━━━━━━━━━━━━━━━━━━━━\n\n"+
			"👤 <b>Клиент:</b>\n"+
			"   • ФИО: <code>%s</code>\n"+
			"   • Телефон: <code>%s</code>\n\n"+
			"🌍 <b>Тур:</b>\n"+
			"   • Название: <b>%s</b>\n\n"+
			"━━━━━━━━━━━━━━━━━━━━\n"+
			"� <i>Требуется обработка заявки</i>\n"+
			"⏰ <i>%s</i>",
		userName, phoneNumber, tourName,
		getCurrentTime(),
	)

	if err := SendMessage(message); err != nil {
		fmt.Printf("Error sending telegram notification: %v\n", err)
	}
}

// NotifyNewVisaForm отправляет уведомление о новой заявке на визу
func NotifyNewVisaForm(firstName, lastName, visaType, phoneNumber string) {
	message := fmt.Sprintf(
		"📄 <b>НОВАЯ ЗАЯВКА НА ВИЗУ</b> 📄\n"+
			"━━━━━━━━━━━━━━━━━━━━\n\n"+
			"👤 <b>Заявитель:</b>\n"+
			"   • ФИО: <code>%s %s</code>\n"+
			"   • Телефон: <code>%s</code>\n\n"+
			"📋 <b>Тип визы:</b>\n"+
			"   • <b>%s</b>\n\n"+
			"━━━━━━━━━━━━━━━━━━━━\n"+
			"� <i>Требуется обработка заявки</i>\n"+
			"⏰ <i>%s</i>",
		firstName, lastName, phoneNumber, visaType,
		getCurrentTime(),
	)

	if err := SendMessage(message); err != nil {
		fmt.Printf("Error sending telegram notification: %v\n", err)
	}
}

// NotifyStatusPaid отправляет уведомление об оплате
func NotifyStatusPaid(formType, clientName, details string) {
	message := fmt.Sprintf(
		"💰 <b>ОПЛАТА ПОДТВЕРЖДЕНА</b> 💰\n"+
			"━━━━━━━━━━━━━━━━━━━━\n\n"+
			"✅ <b>Статус:</b> <u>Оплачено</u>\n\n"+
			"📋 <b>Тип заявки:</b>\n"+
			"   • %s\n\n"+
			"👤 <b>Клиент:</b>\n"+
			"   • <code>%s</code>\n\n"+
			"ℹ️ <b>Детали:</b>\n"+
			"   • %s\n\n"+
			"━━━━━━━━━━━━━━━━━━━━\n"+
			"🎉 <i>Заявка успешно оплачена!</i>\n"+
			"⏰ <i>%s</i>",
		formType, clientName, details,
		getCurrentTime(),
	)

	if err := SendMessage(message); err != nil {
		fmt.Printf("Error sending telegram notification: %v\n", err)
	}
}

// getCurrentTime возвращает текущее время в красивом формате
func getCurrentTime() string {
	now := time.Now()
	return fmt.Sprintf("Время: %s", now.Format("02.01.2006 15:04"))
}

package storage

import (
	"context"
	"log"
	"os"
	"time"

	"github.com/minio/minio-go/v7"
	"github.com/minio/minio-go/v7/pkg/credentials"
)

var (
	MinioClient   *minio.Client
	MinioEndpoint string
	isDev         bool
)

func InitMinIO() {
	MinioEndpoint = os.Getenv("MINIO_ENDPOINT")
	accessKeyID := os.Getenv("MINIO_ACCESS_KEY")
	secretAccessKey := os.Getenv("MINIO_SECRET_KEY")
	ginMode := os.Getenv("GIN_MODE")

	// Определяем режим (dev/prod)
	isDev = ginMode == "" || ginMode == "debug"

	client, err := minio.New(MinioEndpoint, &minio.Options{
		Creds:  credentials.NewStaticV4(accessKeyID, secretAccessKey, ""),
		Secure: false,
	})
	if err != nil {
		log.Fatalf("❌ Ошибка подключения к MinIO: %v", err)
	}

	// Проверим соединение
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()
	_, err = client.ListBuckets(ctx)
	if err != nil {
		log.Fatalf("❌ Не удалось получить список бакетов: %v", err)
	}

	MinioClient = client
	if isDev {
		log.Println("✅ MinIO успешно подключен! (DEV mode - localhost)")
	} else {
		log.Println("✅ MinIO успешно подключен! (PROD mode)")
	}
}

// GetMinioURL возвращает правильный URL для доступа к файлам
// В dev режиме использует localhost, в prod - серверный endpoint
func GetMinioURL(bucket, fileName string) string {
	var endpoint string
	if isDev {
		// В dev режиме используем localhost
		endpoint = "localhost:9000"
	} else {
		// В prod режиме используем серверный endpoint
		endpoint = MinioEndpoint
	}
	return "http://" + endpoint + "/" + bucket + "/" + fileName
}

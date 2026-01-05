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
	useSSL        bool
	isDev         bool
)

func InitMinIO() {
	MinioEndpoint = os.Getenv("MINIO_ENDPOINT")
	accessKeyID := os.Getenv("MINIO_ACCESS_KEY")
	secretAccessKey := os.Getenv("MINIO_SECRET_KEY")
	ginMode := os.Getenv("GIN_MODE")
	
	// Определяем режим (dev/prod)
	isDev = ginMode == "" || ginMode == "debug"
	
	// В dev режиме используем HTTP, в prod - HTTPS
	useSSL = !isDev

	client, err := minio.New(MinioEndpoint, &minio.Options{
		Creds:  credentials.NewStaticV4(accessKeyID, secretAccessKey, ""),
		Secure: useSSL, // ← Изменено: теперь зависит от режима
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
		log.Println("✅ MinIO успешно подключен! (DEV mode - HTTP)")
	} else {
		log.Println("✅ MinIO успешно подключен! (PROD mode - HTTPS)")
	}
}

// GetMinioURL возвращает правильный URL для доступа к файлам
// В dev режиме использует localhost, в prod - серверный endpoint
func GetMinioURL(bucket, fileName string) string {
	var endpoint string
	var protocol string
	
	if isDev {
		// В dev режиме используем localhost с HTTP
		endpoint = "localhost:9000"
		protocol = "http://"
	} else {
		// В prod режиме используем серверный endpoint с HTTPS
		endpoint = MinioEndpoint
		protocol = "https://"
	}
	
	return protocol + endpoint + "/" + bucket + "/" + fileName
}

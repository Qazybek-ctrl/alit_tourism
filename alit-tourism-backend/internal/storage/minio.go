package storage

import (
	"context"
	"log"
	"time"

	"github.com/minio/minio-go/v7"
	"github.com/minio/minio-go/v7/pkg/credentials"
)

var (
	MinioClient   *minio.Client
	MinioEndpoint string
)

func InitMinIO() {
	MinioEndpoint = "localhost:9000" // ✅ теперь её можно использовать в контроллерах
	accessKeyID := "admin"
	secretAccessKey := "secret123"
	useSSL := false

	client, err := minio.New(MinioEndpoint, &minio.Options{
		Creds:  credentials.NewStaticV4(accessKeyID, secretAccessKey, ""),
		Secure: useSSL,
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
	log.Println("✅ MinIO успешно подключен!")
}

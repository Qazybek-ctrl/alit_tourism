// Определяем MinIO URL в зависимости от окружения
const isDevelopment = import.meta.env.DEV;

export const MINIO_BASE_URL = isDevelopment
    ? "http://localhost:9000/alit-tourism"
    : "http://89.207.253.252:9000/alit-tourism";

export const getMinioFileUrl = (filename) => {
    if (!filename) return "";
    return `${MINIO_BASE_URL}/${filename}`;
};

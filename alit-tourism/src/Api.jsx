import axios from "axios";
import { handleApiError } from "./utility/handleApiError";

const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://ailt-tourism.com/api"
    : "http://localhost:8080/api";

const api = axios.create({
  baseURL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.href = "/auth";
    }

    handleApiError(error);
    return Promise.reject(error);
  }
);

export default api;

// src/services/api.js
import axios from "axios";

// 👇 ISSO AQUI É A URL CERTA — GARANTE QUE ESTÁ ASSIM
export const FASTAPI_BASE_URL = "http://127.0.0.1:8001/api/v1";
// ou "http://localhost:8001/api/v1"

// URLs das IAs (mantém do jeito que estava)
export const NODE_CHAT_URL = "http://localhost:4000";
export const NODE_ML_URL = "http://localhost:3000";

// Cliente Axios configurado
export const apiFast = axios.create({
  baseURL: FASTAPI_BASE_URL,
});

// Intercepta token (pode deixar como está)
apiFast.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Rotas do FastAPI
export const authApi = {
  register: (data) => apiFast.post("/auth/register", data),
  login: (data) => apiFast.post("/auth/login", data),
  forgotPassword: (data) => apiFast.post("/auth/forgot-password", data),
  resetPassword: (data) => apiFast.post("/auth/reset-password", data),
  updateProfile: (data) => apiFast.put("/auth/me", data),

};

// src/services/api.js
import axios from "axios";

// 👉 URL base da sua API FastAPI
export const FASTAPI_BASE_URL = "http://127.0.0.1:8001/api/v1";
// ou: "http://localhost:8001/api/v1"

// URLs das IAs (mantém como estavam)
export const NODE_CHAT_URL = "http://localhost:3000";
export const NODE_ML_URL = "http://localhost:4000";

// Cliente Axios configurado para o FastAPI
export const apiFast = axios.create({
  baseURL: FASTAPI_BASE_URL,
});

// Interceptor para enviar token automaticamente
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
  adminPin: (data) => apiFast.post("/auth/admin-pin", data),
};

// 👉 Rotas administrativas (Relatórios)
export const adminApi = {
  // IMPORTANTE: FastAPI exige GET com query params
  preview: (params) =>
    apiFast.get("/admin/reports/preview", {
      params, // envia ?tipo=usuarios&periodo=7d
    }),

  metadata: () => apiFast.get("/admin/reports/metadata"),
};

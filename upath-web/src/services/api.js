import axios from "axios";

// URL da API FastAPI
export const FASTAPI_BASE_URL =
  import.meta.env.VITE_FASTAPI_URL || "http://127.0.0.1:8001/api/v1";

// URL do servidor de CHAT (Node)
export const NODE_CHAT_URL =
  import.meta.env.VITE_NODE_CHAT_URL || "http://localhost:3000";

// URL do servidor de SIMULAÇÃO (Node + Python)
export const NODE_ML_URL =
  import.meta.env.VITE_NODE_ML_URL || "http://localhost:4000";

export const apiFast = axios.create({
  baseURL: FASTAPI_BASE_URL,
});

apiFast.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authApi = {
  register: (data) => apiFast.post("/auth/register", data),
  login: (data) => apiFast.post("/auth/login", data),
  forgotPassword: (data) => apiFast.post("/auth/forgot-password", data),
  resetPassword: (data) => apiFast.post("/auth/reset-password", data),
  updateProfile: (data) => apiFast.put("/auth/me", data),
  adminPin: (data) => apiFast.post("/auth/admin-pin", data),
};

export const adminApi = {
  
  preview: (params) =>
    apiFast.get("/admin/reports/preview", {
      params,
    }),

  metadata: () => apiFast.get("/admin/reports/metadata"),
};

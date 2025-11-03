export const API_URL = import.meta.env.VITE_API_URL ?? "http://127.0.0.1:8000";

export async function registerUser(data: { email: string; password: string; full_name?: string }) {
  const res = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const json = await res.json();
  if (!res.ok) {
    throw new Error(json?.detail || "Erro ao registrar");
  }
  return json;
}

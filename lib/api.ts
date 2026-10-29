export const API_BASE = (process.env.NEXT_PUBLIC_API_BASE_URL || "http://127.0.0.1:8080/api/v1").replace(/\/$/, "");

export class ApiError extends Error {
  status: number;
  constructor(message: string, status = 0) { super(message); this.name = "ApiError"; this.status = status; }
}

export async function api<T = any>(path: string, options: RequestInit = {}, token?: string | null): Promise<T> {
  const headers = new Headers(options.headers || {});
  if (options.body && !headers.has("Content-Type")) headers.set("Content-Type", "application/json");
  if (token) headers.set("Authorization", `Bearer ${token}`);
  let response: Response;
  try { response = await fetch(`${API_BASE}${path.startsWith("/") ? path : `/${path}`}`, { ...options, headers, cache: "no-store" }); }
  catch { throw new ApiError("Cannot connect to the ONTIME API. Check the API URL and backend CORS configuration."); }
  const raw = await response.text();
  let data: any = null;
  try { data = raw ? JSON.parse(raw) : null; } catch { data = raw; }
  if (!response.ok) {
    const detail = data?.detail || data?.message || (typeof data === "string" ? data : `Request failed (${response.status})`);
    throw new ApiError(typeof detail === "string" ? detail : JSON.stringify(detail), response.status);
  }
  return data as T;
}

export function money(value: unknown) {
  const amount = Number(value ?? 0);
  return new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN", maximumFractionDigits: 2 }).format(Number.isFinite(amount) ? amount : 0);
}
export function dateText(value: unknown) {
  if (!value) return "—";
  const date = new Date(String(value));
  return Number.isNaN(date.getTime()) ? String(value) : date.toLocaleString("en-NG", { dateStyle: "medium", timeStyle: "short" });
}
export function shortId(value: unknown) { const text = String(value ?? ""); return text.length > 14 ? `${text.slice(0, 8)}…${text.slice(-4)}` : text || "—"; }

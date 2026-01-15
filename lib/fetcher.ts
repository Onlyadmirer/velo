import Cookies from "js-cookie";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function fetchAPI(url: string, options: RequestInit = {}) {
  const token = Cookies.get("token");

  const headers = {
    "Content-type": "application/json",
    ...options.headers,
  } as Record<string, string>;

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const res = await fetch(`${API_URL}${url}`, {
    ...options,
    headers,
  });

  if (!res.ok) {
    throw new Error("Failed to fetch API");
  }

  return res.json();
}

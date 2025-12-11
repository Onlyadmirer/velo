
export const API_URL = process.env.NEXT_PUBLIC_API_URL

export async function fetchAPI(url: string, options: RequestInit = {}) {
  const res = await fetch(`${API_URL}${url}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers
    }
  })

  if (!res.ok) {
    throw new Error("Failed to fetch API")
  }

  return res.json()
}
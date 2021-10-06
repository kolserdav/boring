import { baseUrl } from "./baseUrl";

export async function getCategoriesRequest() {
  const response = await fetch(new URL('/api/category', baseUrl));
  if (!response.ok) {
    throw new Error(response.status)
  }
  return await response.json()
}

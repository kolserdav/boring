export async function getCategoriesRequest() {
  const response = await fetch('/api/category');
  if (!response.ok) {
    throw new Error(response.status)
  }
  return await response.json()
}

import { baseUrl } from "./baseUrl";

function prepareCategories(categories) {
  return categories.map(category => {
    return { _id: category.id }
  })
}



export async function fetchUserRequest(token) {
  const response = await fetch(new URL(`/api/user/auth`, baseUrl), {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  })

  const { token: newToken } = await response.json();
  return newToken
}

export async function registerUserRequest(email, password) {
  const response = await fetch(new URL(`/api/user/registration`, baseUrl), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({ email, password })
  })

  const { token } = await response.json();
  return token
}

export async function loginUserRequest(email, password) {
  const response = await fetch(new URL(`/api/user/login`, baseUrl), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({ email, password })
  })
  if (response.status === 404) {
    throw new Error('User not found')
  }

  if (!response.ok) {
    throw new Error({ status: response.status, message: response.message })
  }

  const { token } = await response.json();
  return token
}

export async function putCategoriesRequest(userId, token, categories) {
  const response = await fetch(new URL(`/api/user/${userId}`, baseUrl), {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(prepareCategories(categories))
  })

  const result = await response.json()
  return result
}
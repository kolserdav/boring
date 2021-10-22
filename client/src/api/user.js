import API_URI from "./baseUrl";

function prepareCategories(categories) {
  return categories.map(category => {
    return { _id: category.id }
  })
}



export async function fetchUserRequest(token) {
  const response = await fetch(`${API_URI}/user/auth`, {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  })

  const { token: newToken } = await response.json();
  return newToken
}

export async function registerUserRequest({ email, password, confirm_password }) {
  const response = await fetch(`${API_URI}/user/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      args: {
        data: {
          email,
          password
        }
      },
      passwordRepeat: confirm_password
    })
  })

  if (!response.ok) {
    const answer = await response.json()
    throw new Error(answer.message)
  }

  return await response.json();
}

export async function loginUserRequest({ email, password }) {
  const response = await fetch(`${API_URI}/user/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      login: {
        email,
        password
      }
    })
  })

  if (!response.ok) {
    const answer = await response.json()
    throw new Error(answer.message)
  }

  return await response.json();
}

export async function putCategoriesRequest(userId, token, categories) {
  const response = await fetch(`/api/user/${userId}`, {
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
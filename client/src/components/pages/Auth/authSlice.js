import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import jwtDecode from 'jwt-decode';
import { fetchUserRequest, loginUserRequest, putCategoriesRequest, registerUserRequest } from '../../../api/user';

const initialState = {
  id: '',
  isAuth: false,
  role: 'GUEST',
  categories: []
}

const initialToken = localStorage.getItem('token')

function userFromToken(token) {
  try {
    const { id, role, categories = [] } = jwtDecode(token)
    return { id, role, isAuth: true, categories }
  }
  catch {
    return
  }
}

function setUserAndToken(state, action) {
  const newToken = action.payload
  localStorage.setItem('token', newToken);

  const { id, role, isAuth, categories } = userFromToken(newToken);

  state.id = id
  state.role = role
  state.isAuth = isAuth

  for (const category of categories) {
    if (!state.categories.includes(category)) {
      state.categories.push(category)
    }
  }
}

function removeUserAndToken() {
  localStorage.removeItem('token');
  return initialState;
}

export const fetchUser = createAsyncThunk('user/fetchuser', async (token) => {
  // const { data } = await axios.get(`${SERVER_URI}/api/user/auth`, { headers: { "Authorization": `Bearer ${token}` } });
  // return data.token
  return await fetchUserRequest(token)
})

export const loginUser = createAsyncThunk('user/loginUser', async ({ email, password }) => {
  // const { data } = await axios.post(`${SERVER_URI}/api/user/login`, { email, password });
  // return data.token
  return await loginUserRequest(email, password)
})

export const registerUser = createAsyncThunk('user/registerUser', async ({ email, password }) => {
  // const { data } = await axios.post(`${SERVER_URI}/api/user/registration`, { email, password });
  // return data.token
  return await registerUserRequest(email, password)
})

export const asyncUpdateCategories = createAsyncThunk('user/pushCategories', async ({ categoryIds, action }, { getState, dispatch }) => {

  switch (action) {
    case 'add':
      dispatch(addCategories(categoryIds));
      break;
    case 'remove':
      dispatch(removeCategories(categoryIds));
      break;

    default:
      return
  }

  const state = getState()
  const allCategories = getSelectedCategories(state);

  const userId = state.user.id;
  const token = localStorage.getItem('token')

  return await putCategoriesRequest(userId, token, allCategories)
})

const authSlice = createSlice({
  name: 'user',
  initialState: (userFromToken(initialToken) ? userFromToken(initialToken) : initialState),
  reducers: {
    setUser: (state, action) => {
      state.id = action.payload.id;
      state.isAuth = true;
      state.role = action.payload.role;
    },
    removeUser: removeUserAndToken,
    addCategories: (state, action) => {
      for (const category of action.payload) {
        if (!state.categories.includes(category)) {
          state.categories.push(category)
        }
      }
    },
    removeCategories: (state, action) => {
      state.categories = state.categories.filter((item) => !action.payload.includes(item));
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.fulfilled, setUserAndToken)
      .addCase(loginUser.fulfilled, setUserAndToken)
      .addCase(registerUser.fulfilled, setUserAndToken)
      .addCase(fetchUser.rejected, removeUserAndToken)
      .addCase(asyncUpdateCategories.fulfilled, (state, action) => {
        console.log(action);
      })
  }
})

export const { setUser, removeUser, addCategories, removeCategories } = authSlice.actions

export const checkAuth = state => state.user.isAuth
export const getSelectedCategories = state => state.user.categories

export default authSlice.reducer
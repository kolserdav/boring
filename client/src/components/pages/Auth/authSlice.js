import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  role: 'GUEST',
  isAuth: false,
  id: ''
}

export const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      console.log(state, action);
      state.role = action.payload.role;
      state.id = action.payload.id;
      state.isAuth = true;
    },
    removeUser: () => {
      return initialState;
    }
  }
})

export const { setUser, removeUser } = authSlice.actions

export default authSlice.reducer
import { fetchUser, loginUser, registerUser, removeUser } from 'store/authSlice';
import store from 'store';


export const registration = async (form) => {
    return await store.dispatch(registerUser(form)).unwrap();
}

export const login = async (form) => {
    return await store.dispatch(loginUser(form)).unwrap();
}

export const logout = () => {
    store.dispatch(removeUser())
}

export const updateToken = async (token) => {
    store.dispatch(fetchUser(token))
}
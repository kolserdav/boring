import { fetchUser, loginUser, registerUser, removeUser } from '../store/authSlice';
import store from '../store';


export const registration = async (email, password) => {
    return await store.dispatch(registerUser({ email, password })).unwrap();
}

export const login = async (email, password) => {
    return await store.dispatch(loginUser({ email, password })).unwrap();
}

export const logout = () => {
    store.dispatch(removeUser())
}

export const updateToken = async (token) => {
    store.dispatch(fetchUser(token))
}
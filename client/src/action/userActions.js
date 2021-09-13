import axios from 'axios'
import jwtDecode from 'jwt-decode'
import { SERVER_URI } from '../config'


export const registration = async (email, password) => {
    const { data } = await axios.post(`${SERVER_URI}/api/user/registration`, {
        email,
        password
    });
    localStorage.setItem('token', data.token);
    return jwtDecode(data.token);

}

export const login = async (email, password) => {
    const { data } = await axios.post(`${SERVER_URI}/api/user/login`, {
        email,
        password
    });
    localStorage.setItem('token', data.token);
    return jwtDecode(data.token);
}

export const logout = () => {
    localStorage.removeItem('token');
}


export const check = async () => {
    const { data } = await axios.get(`${SERVER_URI}/api/user/auth`, { headers: { "Authorization": `Bearer ${localStorage.getItem('token')}` } });
    localStorage.setItem('token', data.token);
    return jwtDecode(data.token);
}
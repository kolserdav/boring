import axios from 'axios'
import { SERVER_URI } from '../config'


export const Registration = async (email, password) => {
    try {
        const { data } = await axios.post(`${SERVER_URI}/api/user/registration`, {
            email,
            password
        })
        localStorage.setItem('token', data.token)
    } catch (e) {
        console.log(e)
    }
}

export const Login = async (email, password) => {
    try {
        const { data } = await axios.post(`${SERVER_URI}/api/user/login`, {
            email,
            password
        })
        localStorage.setItem('token', data.token)
        return data.token
    } catch (e) {
        console.log(e)
    }
}


export const Check = async () => {
    try {
        const { data } = await axios.get(`${SERVER_URI}/api/user/auth`, { headers: { "Authorization": `Bearer ${localStorage.getItem('token')}` } })
        localStorage.setItem('token', data.token)
        return data.token
    } catch (e) {
        console.log(e)
    }

}
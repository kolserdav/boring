import axios from 'axios'

export const Registration = async (email, password) => {
    try {
        const { data } = await axios.post('http://localhost:5000/api/user/registration', {
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
        const { data } = await axios.post(`http://localhost:5000/api/user/login`, {
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
        const { data } = await axios.get(`http://localhost:5000/api/user/auth`, {headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`}})
        localStorage.setItem('token', data.token)
        return data.token
    } catch (e) {
        console.log(e)
    }

}
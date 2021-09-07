import axios from 'axios'
import { SERVER_URI } from '../config'


export const CreateCategory = async (formData) => {
    try {
        const { data } = await axios.post(`${SERVER_URI}/api/category`, {
            headers: { "Authorization": `Bearer ${localStorage.getItem('token')}` }
        }, formData)
        localStorage.setItem('token', data.token)
    } catch (e) {
        console.log(e)
    }
}

export const GetCategories = async () => {
    try {
        const { data } = await axios.get(`${SERVER_URI}/api/category`,)
        return data
    } catch (e) {
        console.log(e)
    }

}

export const GetCategory = async (id) => {
    try {
        const { data } = await axios.get(`${SERVER_URI}/api/category/${id}`,)
        return data
    } catch (e) {
        console.log(e)
    }

}
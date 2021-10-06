import axios from 'axios'
import { SERVER_URI } from 'config'

export const GetEvents = async (currentPage) => {
    try {
        const response = await axios.get(`${SERVER_URI}/api/event`, {
            params: {
                page: currentPage,
            }
        })
        return response
    }
    catch (e) {
        console.log(e)
    }
}

export const CreateEvent = async (formData) => {
    try {
        const response = await axios.post(`${SERVER_URI}/api/event`, formData)
        return response
    }
    catch (e) {
        console.log(e)
    }
}

export const GetEvent = async (id) => {
    try {
        const response = await axios.get(`${SERVER_URI}/api/event/${id}`)
        return response
    }
    catch (e) {
        console.log(e)
    }
}
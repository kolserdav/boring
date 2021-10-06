import axios from 'axios'
import { SERVER_URI } from 'config'

export const GetContents = async () => {
    try {
        const response = await axios.get(`${SERVER_URI}/api/content`,)
        return response
    }
    catch (e) {
        console.log(e)
    }
}

export const CreateContent = async (formData) => {
    try {
        const response = await axios.post(`${SERVER_URI}/api/content`, formData)
        return response
    }
    catch (e) {
        console.log(e)
    }
}
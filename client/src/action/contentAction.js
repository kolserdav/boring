import axios from 'axios'

export const GetContents = async () => {
    try {
        const response = await axios.get('http://localhost:5000/api/content', )
        return response
    }
    catch (e) { 
        console.log(e)
    }
}

export const CreateContent = async (formData) => {
    try {
        const response = await axios.post('http://localhost:5000/api/content', formData)
        return response
    }
    catch (e) {
        console.log(e)
    }
}
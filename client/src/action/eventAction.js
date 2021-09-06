import axios from 'axios'

export const GetEvents = async (currentPage) => {
    try {
        const response = await axios.get('http://localhost:5000/api/event', {
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
        const response = await axios.post('http://localhost:5000/api/event', formData)
        return response
    }
    catch (e) {
        console.log(e)
    }
}

export const GetEvent = async (id) => {
    try {
        const response = await axios.get(`http://localhost:5000/api/event/${id}`)
        return response
    }
    catch (e) {
        console.log(e)
    }
}
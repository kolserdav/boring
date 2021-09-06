import axios from 'axios'

export const CreateCategory = async (formData) => {
    try {
        const { data } = await axios.post('http://localhost:5000/api/category', {
            headers: { "Authorization": `Bearer ${localStorage.getItem('token')}` }
        },  formData)
        localStorage.setItem('token', data.token)
    } catch (e) {
        console.log(e)
    }
}

export const GetCategories = async () => {
    try {
        const { data } = await axios.get(`http://localhost:5000/api/category`, )
        return data
    } catch (e) {
        console.log(e)
    }

}

export const GetCategory = async (id) => {
    try {
        const { data } = await axios.get(`http://localhost:5000/api/category/${id}`,)
        return data
    } catch (e) {
        console.log(e)
    }

}
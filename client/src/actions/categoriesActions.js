import axios from 'axios'
import { getCategoriesRequest } from 'api/categories'
import { asyncUpdateCategories } from 'store/authSlice'
import { SERVER_URI } from 'config'
import store from 'store'


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

export async function GetCategories() {
    return getCategoriesRequest();

}

export const GetCategory = async (id) => {
    try {
        const { data } = await axios.get(`${SERVER_URI}/api/category/${id}`,)
        return data
    } catch (e) {
        console.log(e)
    }

}

export async function addCategory(categoryId) {
    const categoryIds = [categoryId]
    store.dispatch(asyncUpdateCategories({ categoryIds, action: 'add' }))
}

export async function addCategories(categoryIds) {
    store.dispatch(asyncUpdateCategories({ categoryIds, action: 'add' }))
}

export async function removeCategory(categoryId) {
    const categoryIds = [categoryId]
    store.dispatch(asyncUpdateCategories({ categoryIds, action: 'remove' }))
}

export async function removeCategories(categoryIds) {
    store.dispatch(asyncUpdateCategories({ categoryIds, action: 'remove' }))
}

export function toggleCategoryState(categoryId) {
    const categoryIds = [categoryId]
    store.dispatch(asyncUpdateCategories({ categoryIds, action: 'toggle' }))

}

export function setAllCategoriesActive() {
    store.dispatch(asyncUpdateCategories({ action: 'allActive' }))
}
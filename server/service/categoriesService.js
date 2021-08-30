import CategoriesModel from "../model/categoriesModel.js"
import fileService from "./fileService.js"

class categoriesService {

    async create({title, color}, picture) {
        const filepath = 'categories'
        const fileName = fileService.saveFile(picture, filepath)
        const createdCategory = await CategoriesModel.create({title,color, picture: fileName})
        return createdCategory
    } 

    async get() {
        const createdCategory = await CategoriesModel.find()
        return createdCategory
    } 

    async getOne(id) {
        if (!id) {
            throw new Error('Id не указан') 
        }
        const createdCategory = await CategoriesModel.findById(id)
        return createdCategory
    } 


}

export default new categoriesService()
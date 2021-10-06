import contentModel from "../model/contentModel.js"
import fileService from "./fileService.js"

class contentService {

    async create({title, categoriesMain, categoriesChild}, picture) {
        const parseCategoriesMain = JSON.parse(categoriesMain)
        const parseCategoriesChild = JSON.parse(categoriesChild)
        const filepath = 'content'
        const fileName = fileService.saveFile(picture, filepath)
        const createdContent = await contentModel.create({title, categoriesMain: parseCategoriesMain, categoriesChild: parseCategoriesChild, picture: fileName})
        return createdContent
    }

    async getAll() {
        const event = await contentModel.find()
        return event
    }

}

export default new contentService()
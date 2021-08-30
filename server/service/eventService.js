import eventModel from "../model/eventModel.js"
import fileService from "../service/fileService.js"

class eventService {

    async create({ title, categories, description, location, locationUri }, picture ) {
        const parseCategories = JSON.parse(categories)
        const filepath = 'events'
        const fileName = fileService.saveFile(picture, filepath)
        const createdEvent = await eventModel.create({title, categories: parseCategories, picture: fileName, description, location, locationUri})
        return createdEvent
    }

    async getAll({ page }) {

        const event = await eventModel.find().limit(20).skip(Number(page))
        return event
    }

    async getOne(id) {

        if (!id) {
            throw new Error('Id не указан')
        }
        const event = await eventModel.findById(id)
        return event

    }
}

export default new eventService()
import eventService from "../service/eventService.js"

class EventController {

    async create(req, res) {
        try {
            const event = await eventService.create(req.body, req.files.picture)
            res.json(event)

        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res){
        try {
            const event = await eventService.getAll(req.query)
            return res.json(event) 
        } catch (e){
            res.status(500).json(e)
        }
    }

    async getOne(req, res){
        try {
            const event = await eventService.getOne(req.params.id)
            return res.json(event) 
            
        } catch (e){
            res.status(500).json(e)
        }
    }
    
}

export default new EventController()
import contentService from "../service/contentService.js"

class ContentController {

    async create(req, res) {
        try {
            const content = await contentService.create(req.body, req.files.picture)
            res.json(content)

        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res){
        try {
            const content = await contentService.getAll()
            return res.json(content) 
        } catch (e){
            res.status(500).json(e)
        }
    }
    
}

export default new ContentController()
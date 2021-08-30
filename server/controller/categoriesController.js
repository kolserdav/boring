import categoriesService from "../service/categoriesService.js"

class CategoriesController {

    async create(req, res) {
        try {
            const category = await categoriesService.create(req.body, req.files.picture)
            res.json(category)

        } catch (e) {
            res.status(500).json(e)
        }
    }

    async get(req, res) {
        try {
            const category = await categoriesService.get(req.query)
            res.json(category)

        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getOne(req, res) {
        try {
            const category = await categoriesService.getOne(req.params.id)
            res.json(category)

        } catch (e) {
            res.status(500).json(e)
        }
    }
    
}

export default new CategoriesController()
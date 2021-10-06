import Router from "express";
import ContentController from "../controller/contentController.js";
import checkRole from "../middleware/checkRoleMiddleware.js";

const contentRouter = new Router()

contentRouter.post('/',  ContentController.create)
contentRouter.get('/', ContentController.getAll)
contentRouter.put('/', checkRole('ADMIN'))
contentRouter.delete('/:id', checkRole('ADMIN'))

export default contentRouter;
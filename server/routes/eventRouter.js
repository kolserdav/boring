import Router from "express";
import eventController from "../controller/eventController.js";
import checkRole from "../middleware/checkRoleMiddleware.js";

const eventRouter = new Router()

eventRouter.post('/',  eventController.create)
eventRouter.get('/', eventController.getAll)
eventRouter.get('/:id', eventController.getOne)
eventRouter.put('/', checkRole('ADMIN'))
eventRouter.delete('/:id', checkRole('ADMIN'))

export default eventRouter;
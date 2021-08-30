import Router from "express";
import categoriesController from "../controller/categoriesController.js";
import checkRole from "../middleware/checkRoleMiddleware.js";

const categoriesRouter = new Router()

categoriesRouter.post('/', checkRole('ADMIN'), categoriesController.create)
categoriesRouter.get('/', categoriesController.get)
categoriesRouter.get('/:id', categoriesController.getOne)

export default categoriesRouter;
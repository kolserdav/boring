import Router from "express";
import userController from "../controller/userController.js";
import authMiddleware from '../middleware/authMiddleware.js'

const userRouter = new Router()

userRouter.post('/registration', userController.registration)
userRouter.post('/login', userController.login)
userRouter.put('/:id', userController.update)
userRouter.get('/auth', authMiddleware, userController.check)

export default userRouter;
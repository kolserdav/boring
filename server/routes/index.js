import Router from "express";
import categoriesRouter from "./categoriesRouter.js";
import eventRouter from "./eventRouter.js";
import userRouter from "./userRouter.js";
import contentRouter from "./contentRouter.js";
const router = Router()

router.use('/event', eventRouter)
router.use('/category', categoriesRouter)
router.use('/user', userRouter)
router.use('/content', contentRouter)

export default router
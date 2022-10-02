import {Router} from "express";
import UserController from '../../api/controllers/userController';
import {authMiddleware,refreshTokenMiddleware} from "../../middleware/middlewares";

export const userRouter = Router();

userRouter.post('/registration', UserController.registration);
userRouter.post('/login', UserController.login);
userRouter.get('/auth', refreshTokenMiddleware, authMiddleware, UserController.check);

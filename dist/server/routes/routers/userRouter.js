import { Router } from "express";
import UserController from '../../api/controllers/userController';
export const userRouter = Router();
userRouter.post('/registration', UserController.registration);
userRouter.post('/login', UserController.login);
userRouter.get('/auth');
userRouter.get('/activate/:link', UserController.activate);

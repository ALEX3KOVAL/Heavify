import {Router} from "express";
import UserController from '../../api/controllers/userController';
import {body} from "express-validator";

export const userRouter = Router();

userRouter.post('/registration',
    body("email").isEmail(),
    body("password").isLength({min: 3, max: 32}),
    UserController.registration
);
userRouter.post('/login', UserController.login);
userRouter.get('/auth');
userRouter.get('/activate/:link', UserController.activate);
userRouter.post('/logout', UserController.logout);
userRouter.get('/refresh', UserController.refresh);

import { Router } from "express";
import { UserController } from '../../api/controllers/controllers';
import { activateMiddleware } from "../../middleware/activateMiddleware";
export const userRouter = Router();
userRouter.post('/registration', UserController.registration);
userRouter.post('/login', activateMiddleware, UserController.login);
userRouter.get('/activate/:link', UserController.activate);
userRouter.post('/logout', UserController.logout);
userRouter.get('/refresh', UserController.refresh);
//# sourceMappingURL=userRouter.js.map
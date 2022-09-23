import { Router } from "express";
import * as UserController from '../../api/controllers/userController';
import authMiddleware from "../../middleware/authMiddleware";
import errorHandlingMiddleware from "../../middleware/errorHandlingMiddleware";
const router = Router();
router.post('/registration', UserController.registration);
router.post('/login', UserController.login);
router.get('/auth', authMiddleware, errorHandlingMiddleware, UserController.check);
export default router;

import {Router} from "express";
import SongController from '../../api/controllers/songController';
import {checkRoleMiddleware, authMiddleware, errorHandlingMiddleware} from "../../middleware/middlewares";

export const songRouter = Router();

songRouter.post('/', authMiddleware, checkRoleMiddleware("ADMIN"), SongController.add);
songRouter.get('/', authMiddleware, SongController.getAll);
songRouter.get('/:id', authMiddleware, SongController.getOne);

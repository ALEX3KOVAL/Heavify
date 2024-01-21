import {Router} from "express";
import {SongController} from '../../../api/controllers/controllers';
import {checkRoleMiddleware, authMiddleware, errorHandlingMiddleware} from "../../middleware/middlewares";

export const songRouter = Router();

songRouter.post('/', authMiddleware, checkRoleMiddleware("ADMIN"), SongController.addSong);
songRouter.get('/', authMiddleware, SongController.getAllSongs);
songRouter.get('/:id', authMiddleware, SongController.getOneSong);

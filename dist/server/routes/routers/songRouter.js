import { Router } from "express";
import { SongController } from '../../api/controllers/controllers';
import { checkRoleMiddleware, authMiddleware } from "../../middleware/middlewares";
export const songRouter = Router();
songRouter.post('/', authMiddleware, checkRoleMiddleware("ADMIN"), SongController.addSong);
songRouter.get('/', authMiddleware, SongController.getAllSongs);
songRouter.get('/:id', authMiddleware, SongController.getOneSong);
//# sourceMappingURL=songRouter.js.map
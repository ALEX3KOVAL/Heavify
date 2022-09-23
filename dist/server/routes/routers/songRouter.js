import { Router } from "express";
import * as SongController from '../../api/controllers/songController';
import checkRoleMiddleware from "../../middleware/checkRoleMiddleware";
import errorHandlingMiddleware from "../../middleware/errorHandlingMiddleware";
const router = Router();
router.post('/', checkRoleMiddleware("ADMIN"), errorHandlingMiddleware, SongController.add);
router.get('/', SongController.getAll);
router.get('/:id', SongController.getOne);
export default router;

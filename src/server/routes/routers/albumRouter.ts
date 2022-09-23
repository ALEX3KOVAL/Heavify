import {Router} from "express";
import * as AlbumController from "../../api/controllers/albumController";

const router = Router();

router.post('/', AlbumController.add);
router.get('/', AlbumController.getAll);
router.get('/:id',AlbumController.getOne);

export default router;

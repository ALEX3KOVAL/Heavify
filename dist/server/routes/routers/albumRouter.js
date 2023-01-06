import { Router } from "express";
import { AlbumController } from "../../api/controllers/controllers";
export const albumRouter = Router();
albumRouter.post('/', AlbumController.addAlbum);
albumRouter.get('/', AlbumController.getAll);
albumRouter.get('/:id', AlbumController.getOneAlbum);
//# sourceMappingURL=albumRouter.js.map
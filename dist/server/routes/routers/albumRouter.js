import { Router } from "express";
import * as AlbumController from "../../api/controllers/albumController";
export const albumRouter = Router();
albumRouter.post('/', AlbumController.add);
albumRouter.get('/', AlbumController.getAll);
albumRouter.get('/:id', AlbumController.getOne);

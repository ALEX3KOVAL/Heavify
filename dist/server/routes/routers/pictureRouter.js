import { Router } from "express";
import PictureController from "../../api/controllers/pictureController";
export const pictureRouter = Router();
pictureRouter.get('/:pageName/:componentName', PictureController.getPicturesGroupByNames);

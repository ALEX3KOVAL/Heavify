import { Router } from "express";
import PictureController from "../../api/controllers/pictureController";
export const pictureRouter = Router();
pictureRouter.get('/:pageName/:componentType/', PictureController.getFoldersNamesBy);
pictureRouter.get('/:pageName/:componentType/:componentName?', PictureController.getPicturesGroupByNames);

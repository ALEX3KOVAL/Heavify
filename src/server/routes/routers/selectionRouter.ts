import {Router} from "express";
import * as SelectionController from "../../api/controllers/selectionController";

export const selectionRouter = Router();

//selectionRouter.post('/', SelectionController.add);
selectionRouter.get('/', SelectionController.getAll);
//selectionRouter.get('/:id',SelectionController.getOne);


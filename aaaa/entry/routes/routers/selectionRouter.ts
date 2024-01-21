import {Router} from "express";
import {SelectionController} from "../../../api/controllers/controllers";

export const selectionRouter = Router();

//selectionRouter.post('/', SelectionController.add);
selectionRouter.get('/', SelectionController.getAllSelections);
//selectionRouter.get('/:id',SelectionController.getOne);


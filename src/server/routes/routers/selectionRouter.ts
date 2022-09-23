import {Router} from "express";
import * as SelectionController from "../../api/controllers/selectionController";

const router = Router();

//router.post('/', SelectionController.add);
router.get('/', SelectionController.getAll);
//router.get('/:id',SelectionController.getOne);

export default router;

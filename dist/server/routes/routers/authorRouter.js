import { Router } from "express";
import * as AuthorController from '../../api/controllers/authorController';
export const authorRouter = Router();
authorRouter.post('/', AuthorController.add);
authorRouter.get('/', AuthorController.getAll);

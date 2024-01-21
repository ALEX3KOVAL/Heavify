import {Router} from "express";
import {AuthorController} from '../../../api/controllers/controllers';

export const authorRouter: Router = Router();

authorRouter.post('/', AuthorController.addAuthor);
authorRouter.get('/', AuthorController.getAllAuthors);


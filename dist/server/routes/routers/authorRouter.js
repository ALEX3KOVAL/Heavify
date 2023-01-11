import { Router } from "express";
import { AuthorController } from '../../api/controllers/controllers';
export const authorRouter = Router();
authorRouter.post('/', AuthorController.addAuthor);
authorRouter.get('/', AuthorController.getAllAuthors);
//# sourceMappingURL=authorRouter.js.map
import {Router} from "express";
import * as AuthorController from '../../api/controllers/authorController';

const router: Router = Router();

router.post('/', AuthorController.add);
router.get('/', AuthorController.getAll);

export default router;

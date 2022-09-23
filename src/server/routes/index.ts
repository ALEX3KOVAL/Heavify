import {Router} from "express";
import * as modelRouter from "./routers/routers";

const router: Router = Router();
router.use('/users', modelRouter.userRouter);
router.use('/genres', modelRouter.genreRouter);
router.use('/authors', modelRouter.authorRouter);
router.use('/albums', modelRouter.albumRouter);
router.use('/selections', modelRouter.selectionRouter);
router.use('/songs', modelRouter.songRouter);

export default router;

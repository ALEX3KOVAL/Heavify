import { Router } from "express";
import * as modelRouter from "./routers/routers";
export const router = Router();
router.use('/users', modelRouter.userRouter);
router.use('/genres', modelRouter.genreRouter);
router.use('/authors', modelRouter.authorRouter);
router.use('/albums', modelRouter.albumRouter);
router.use('/selections', modelRouter.selectionRouter);
router.use('/songs', modelRouter.songRouter);
router.use('/pictures', modelRouter.pictureRouter);
//# sourceMappingURL=index.js.map
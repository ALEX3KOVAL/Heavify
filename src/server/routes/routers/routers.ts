import {Router} from "express";
import song_router from "./songRouter";
import genre_router from "./genreRouter";
import author_router from "./authorRouter";
import album_router from "./albumRouter";
import selection_router from "./selectionRouter";
import user_router from "./userRouter";

export const songRouter: Router = song_router;
export const genreRouter: Router = genre_router;
export const authorRouter: Router = author_router;
export const albumRouter: Router = album_router;
export const selectionRouter: Router = selection_router;
export const userRouter: Router = user_router;

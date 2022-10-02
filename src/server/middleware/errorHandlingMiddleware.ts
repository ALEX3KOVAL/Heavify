import ApiError from '../api/error/apiError';
import {NextFunction, Request, Response} from "express";

export const errorHandlingMiddleware = (err: unknown, req: Request, res: Response, next: NextFunction) =>
    res.status((err as ApiError).getStatus()).json({message: (err as ApiError).getMessage()});

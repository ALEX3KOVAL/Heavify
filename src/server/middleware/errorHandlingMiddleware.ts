import ApiError from '../api/error/apiError';
import {NextFunction, Request, Response} from "express";

export const errorHandlingMiddleware = (err: ApiError, req: Request, res: Response, next: NextFunction) =>
    res.status(err.getStatus()).json({message: err.getMessage()});

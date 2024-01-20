import {ErrorAPI} from '../api/http/HttpAPI';
import {NextFunction, Request, Response} from "express";

export const errorHandlingMiddleware = (err: ErrorAPI, req: Request, res: Response, next: NextFunction) =>
    res.status(err.getStatus()).json({message: err.getMessage(), errors: err.getErrors()});

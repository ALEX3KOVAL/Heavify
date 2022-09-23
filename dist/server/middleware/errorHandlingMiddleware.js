import ApiError from '../api/error/apiError';
import jwt from "jsonwebtoken";
const errorHandlingMiddleware = (err, req, res, next) => {
    console.log("jkjkjkjkjkjkjkjkjjkjkjk");
    if (err instanceof ApiError) {
        return res.status(err.getStatus()).json({ message: err.getMessage() });
    }
    if (err instanceof jwt.JsonWebTokenError) {
        return res.status(400).json({ message: "BAD REQUEST" });
    }
    return res.status(500).json({ message: "НЕПРЕДВИДЕННАЯ ОШИБКА!" });
};
export default errorHandlingMiddleware;

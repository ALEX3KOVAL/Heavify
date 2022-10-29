import jwt from "jsonwebtoken";

declare class ApiError extends Error {
    constructor(status: number, message: string);
    getMessage(): string;
    getStatus(): number;
}

function ApiError(status: number, message: string) {
    var _message = message
    var _error = new Error(message);
    var _status: number = status;

    Object.setPrototypeOf(_error, ApiError.prototype);

    ApiError.prototype.getMessage = () => _message;

    ApiError.prototype.getStatus = () => _status;

    return _error;
};

ApiError.prototype = Object.create(Error.prototype, {
    name: { value: 'ApiError', enumerable: false },}
);

ApiError.notImplemented = (message: string = "Сервером не предусмотрен такое поведение"): ApiError => new ApiError(501, message);

ApiError.badRequest = (message: string = "Некорректный запрос"): ApiError => new ApiError(400, message);

ApiError.unauthorized = (message: string = "Недостаточно прав"): ApiError => new ApiError(401, message);

ApiError.internal = (message: string = "Что-то пошло не так..."): ApiError => new ApiError(500, message);

ApiError.forbidden = (message: string = "Доступ к запрашиваемому ресурсу запрещён"): ApiError => new ApiError(403, message);

ApiError.conflict = (message: string = "Возник конфликт с сервером"): ApiError => new ApiError(409, message);

ApiError.identify = (error: Error): ApiError => {
    if (error instanceof jwt.JsonWebTokenError) {
        return ApiError.forbidden();
    }
    if (error instanceof jwt.TokenExpiredError) {

    }
    return ApiError.internal();
}

export default ApiError;

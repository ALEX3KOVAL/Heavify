import jwt from "jsonwebtoken";

declare class ErrorAPI extends Error {
    constructor(status: number, message: string, errors: any[]);
    getMessage(): string;
    getStatus(): number;
    getErrors(): any[];
}

function ErrorAPI(status: number, message: string, errors: any[] = []) {
    var _message: string = message;
    var _error: Error = new Error(message);
    var _status: number = status;
    var _errors: Error[] = errors;

    Object.setPrototypeOf(_error, ErrorAPI.prototype);

    ErrorAPI.prototype.getMessage = () => _message;

    ErrorAPI.prototype.getStatus = () => _status;

    ErrorAPI.prototype.getErrors = () => _errors;

    return _error;
}

ErrorAPI.prototype = Object.create(Error.prototype, {
    name: { value: 'ErrorAPI', enumerable: false },}
);

ErrorAPI.notImplemented = (message: string = "Данное поведение не предусмотрено сервером", errors: any[] = []): ErrorAPI => new ErrorAPI(501, message, errors);

ErrorAPI.badRequest = (message: string = "Некорректный запрос", errors: any[] = []): ErrorAPI => new ErrorAPI(400, message, errors);

ErrorAPI.unauthorized = (message: string = "Недостаточно прав", errors: any[] = []): ErrorAPI => new ErrorAPI(401, message, errors);

ErrorAPI.internal = (message: string = "Что-то пошло не так...", errors: any[] = []): ErrorAPI => new ErrorAPI(500, message, errors);

ErrorAPI.forbidden = (message: string = "Доступ к запрашиваемому ресурсу запрещён", errors: any[] = []): ErrorAPI => new ErrorAPI(403, message, errors);

ErrorAPI.conflict = (message: string = "Возник конфликт с сервером", errors: any = []): ErrorAPI => new ErrorAPI(409, message, errors);

ErrorAPI.identify = (error: Error): ErrorAPI => {
    if (error instanceof jwt.JsonWebTokenError) {
        return ErrorAPI.forbidden();
    }
    if (error instanceof jwt.TokenExpiredError) {
        return ErrorAPI.forbidden("Жизненный цикл токена истёк");
    }
    return ErrorAPI.internal();
}

export {ErrorAPI};

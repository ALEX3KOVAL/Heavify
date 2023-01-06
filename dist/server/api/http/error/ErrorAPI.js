import jwt from "jsonwebtoken";
function ErrorAPI(status, message, errors = []) {
    var _message = message;
    var _error = new Error(message);
    var _status = status;
    var _errors = errors;
    Object.setPrototypeOf(_error, ErrorAPI.prototype);
    ErrorAPI.prototype.getMessage = () => _message;
    ErrorAPI.prototype.getStatus = () => _status;
    ErrorAPI.prototype.getErrors = () => _errors;
    return _error;
}
ErrorAPI.prototype = Object.create(Error.prototype, {
    name: { value: 'ErrorAPI', enumerable: false },
});
ErrorAPI.notImplemented = (message = "Данное поведение не предусмотрено сервером", errors = []) => new ErrorAPI(501, message, errors);
ErrorAPI.badRequest = (message = "Некорректный запрос", errors = []) => new ErrorAPI(400, message, errors);
ErrorAPI.unauthorized = (message = "Недостаточно прав", errors = []) => new ErrorAPI(401, message, errors);
ErrorAPI.internal = (message = "Что-то пошло не так...", errors = []) => new ErrorAPI(500, message, errors);
ErrorAPI.forbidden = (message = "Доступ к запрашиваемому ресурсу запрещён", errors = []) => new ErrorAPI(403, message, errors);
ErrorAPI.conflict = (message = "Возник конфликт с сервером", errors = []) => new ErrorAPI(409, message, errors);
ErrorAPI.identify = (error) => {
    if (error instanceof jwt.JsonWebTokenError) {
        return ErrorAPI.forbidden();
    }
    if (error instanceof jwt.TokenExpiredError) {
        return ErrorAPI.forbidden("Жизненный цикл токена истёк");
    }
    return ErrorAPI.internal();
};
export { ErrorAPI };
//# sourceMappingURL=ErrorAPI.js.map
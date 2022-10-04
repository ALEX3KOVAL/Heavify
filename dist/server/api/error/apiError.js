import jwt from "jsonwebtoken";
function ApiError(status, message) {
    var _message = message;
    var _error = new Error(message);
    var _status = status;
    Object.setPrototypeOf(_error, ApiError.prototype);
    ApiError.prototype.getMessage = () => _message;
    ApiError.prototype.getStatus = () => _status;
    return _error;
}
;
ApiError.prototype = Object.create(Error.prototype, {
    name: { value: 'ApiError', enumerable: false },
});
ApiError.badRequest = (message = "Некорректный запрос") => new ApiError(400, message);
ApiError.unauthorized = (message = "Недостаточно прав") => new ApiError(401, message);
ApiError.internal = (message = "Что-то пошло не так...") => new ApiError(500, message);
ApiError.forbidden = (message = "Доступ к запрашиваемому ресурсу запрещён") => new ApiError(403, message);
ApiError.conflict = (message = "Возник конфликт с сервером") => new ApiError(409, message);
ApiError.identify = (error) => {
    if (error instanceof jwt.JsonWebTokenError) {
        return ApiError.forbidden();
    }
    if (error instanceof jwt.TokenExpiredError) {
    }
    return ApiError.internal();
};
export default ApiError;

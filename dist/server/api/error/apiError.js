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
ApiError.badRequest = (message) => new ApiError(400, message);
ApiError.unauthorized = (message) => new ApiError(401, message);
ApiError.internal = (message) => new ApiError(500, message);
ApiError.forbidden = (message) => new ApiError(403, message);
export default ApiError;

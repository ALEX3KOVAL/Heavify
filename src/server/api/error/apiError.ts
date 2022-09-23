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

ApiError.badRequest = (message: any) => new (ApiError as any)(400, message);

ApiError.unauthorized = (message: any) => new (ApiError as any)(401, message);

ApiError.internal = (message: any) => new (ApiError as any)(500, message);

ApiError.forbidden = (message: any) => new (ApiError as any)(403, message);

export default ApiError;

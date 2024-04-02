export interface ServerException extends Error {
    readonly error: ErrorInfo
}

export class ErrorInfo {
    constructor(
        readonly code: number,
        readonly message: string
    ) {}
}
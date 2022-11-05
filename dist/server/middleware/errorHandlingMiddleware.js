export const errorHandlingMiddleware = (err, req, res, next) => res.status(err.getStatus()).json({ message: err.getMessage(), errors: err.getErrors() });

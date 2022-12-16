export const errorHandlingMiddleware = (err, req, res, next) => {
    console.log(res.status(err.getStatus()).json({ message: err.getMessage(), errors: err.getErrors() }));
    return res.status(err.getStatus()).json({ message: err.getMessage(), errors: err.getErrors() });
};

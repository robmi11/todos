export const customErrorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  res.status(statusCode);
  res.json({
    error: err.message,
    stack: process.env.MODE === "production" ? null : err.stack,
  });
};

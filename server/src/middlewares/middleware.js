const notFoundPages = (req, res, next) => {
  const error = new Error(`Pages Not Found -- ${req.originalUrl}`);
  res.status(404);
  next(error)
};

const errorHandler = (error, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    error: {
      code: statusCode,
      title: error.message,
      stack: "🎂🎂🎂"
    }
  });
};

module.exports = {
  notFoundPages,
  errorHandler
}
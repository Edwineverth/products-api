import boom from "@hapi/boom";

function withErrorStack(err, stack) {
  return err;
}

function logErrors(err, req, res, next) {
  console.log(err);
  next(err);
}

function wrapErrors(err, req, res, next) {
  if (!err.isBoom) {
    next(boom.badImplementation());
  }
  next(err);
}

function errorHandler(err, req, res, next) {
  //eslint-disable-line
  const {
    output: { statusCode, payload },
  } = err;
  res.status(statusCode);
  res.json(withErrorStack(payload, err.stack));
}

module.exports = {
  logErrors,
  wrapErrors,
  errorHandler,
};
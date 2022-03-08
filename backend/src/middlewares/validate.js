const Joi = require('joi');
const httpStatus = require('http-status');
const R = require('ramda');

const ApiError = require('../utils/ApiError');

const validate = (schema) => (req, res, next) => {
  const validSchema = R.pick(['params', 'query', 'body'], schema);
  const object = R.pick(Object.keys(validSchema), req);
  const { value, error } = Joi.compile(validSchema)
    .prefs({ errors: { label: 'key' }, abortEarly: false })
    .validate(object);

  if (error) {
    const errorMessage = error.details.map((details) => details.message).join(', ');
    return next(new ApiError(httpStatus.BAD_REQUEST, errorMessage));
  }
  Object.assign(req, value);
  return next();
};

module.exports = validate;

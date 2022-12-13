import { CustomError } from '../errors/customError.js';

export const errorHandler = (
  err,
  req,
  res,
  next,
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({ errors: err.serializeErrors() });
  }

  console.log('err.message: ', err.message);
  console.error(err);
  return res.status(500).send({
    errors: [{ message: 'Something went wrong' }],
  });
};

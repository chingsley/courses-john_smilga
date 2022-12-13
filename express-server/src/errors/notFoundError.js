import { CustomError } from './customError.js';

export class NotFoundError extends CustomError {
  statusCode = 404;

  constructor(message) {
    super(message || '404 not found Error');
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeErrors() {
    return [{ message: this.message || 'resource not found' }];
  }
}

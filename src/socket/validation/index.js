import Joi from 'joi';
import ValidatorUtil from './validator.util';

const PrivateMessageSchema = {
  to: Joi.number().integer().min(1).required(),
  content: Joi.string().min(1).required()
};

class Validation {
  static ValidatePrivateMessageArgs(args) {
    return ValidatorUtil.validateArgs(args, PrivateMessageSchema, Validation.OPTIONS);
  }
}

export default Validation;

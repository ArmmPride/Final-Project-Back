import { UsersSchema } from './schemes';
import ValidatorUtil from './util/validator.util';

class UsersValidation {
    static validateGetByIdArgs(req, res, next) {
        ValidatorUtil.validateArgs(req, UsersSchema.getByIdSchema, next);
    }

    static validateAddArgs(req, res, next) {
        ValidatorUtil.validateArgs(req, UsersSchema.addSchema, next);
    }

    static validateEditArgs(req, res, next) {
        ValidatorUtil.validateArgs(req, UsersSchema.editSchema, next);
    }
    
}

export default UsersValidation;

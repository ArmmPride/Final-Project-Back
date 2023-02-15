// NPM Modules
import express from 'express';

// Local Modules
import { UsersController } from '../controller';
import AuthMiddleware from '../auth/auth.middlware';
import { UsersValidationMiddleware } from '../middlewares/validation';
import { ImageUploadMiddleware } from '../middlewares/image-upload.middleware';
const router = express.Router();


router.get('/fullList',
    AuthMiddleware.authenticateFor(['admin']),
    UsersController.fullList);

router.get('/',
    UsersController.list);


router.get('/:id',
    UsersController.getById);


router.post('/upload',
    AuthMiddleware.authenticateFor(['admin']),
    ImageUploadMiddleware.upload(),
    UsersController.addPic
);

router.post('/',
    AuthMiddleware.authenticateFor(['admin']),
    UsersValidationMiddleware.validateAddArgs,
    UsersController.add);

router.put('/:id',
    AuthMiddleware.authenticateFor(['admin']),
    UsersValidationMiddleware.validateEditArgs,
    UsersController.edit);

router.patch('/:id',
    AuthMiddleware.authenticateFor(['admin']),
    UsersValidationMiddleware.validateGetByIdArgs,
    UsersController.update);


router.delete('/delete/:id',
    AuthMiddleware.authenticateFor(['admin']),
    UsersValidationMiddleware.validateGetByIdArgs,
    UsersController.delete);
    
export default router;

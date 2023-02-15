// Local Modules
import { UsersServices } from '../services';
import { SuccessHandlerUtil } from '../utils';
const HOST_OF_SERVER = process.env.SERVER_HOST;

export default class UsersController {
    static async fullList(req, res, next) {
        try {
            const users = await UsersServices.fullList();
            SuccessHandlerUtil.handleList(res, next, users);
        } catch (error) {
            next(error);
        }
    }

    static async list(req, res, next) {
        try {
            const users = await UsersServices.list();

            SuccessHandlerUtil.handleList(res, next, users);
        } catch (error) {
            next(error);
        }
    }

    static async getById(req, res, next) {
        try {

            const { id } = req.params;
            const user = await UsersServices.getById(id);

            SuccessHandlerUtil.handleGet(res, next, { ...user});
        } catch (error) {
            next(error);
        }
    }

    static async add(req, res, next) {
        try {
            let { fullname, position, picture } = req.body;
            let dirname = `${HOST_OF_SERVER}/upload/` + picture;
            picture = dirname;
            const user = await UsersServices.add({fullname, position, picture });

            SuccessHandlerUtil.handleAdd(res, next, user);
        } catch (error) {
            next(error);
        }
    }



    static async edit(req, res, next) {
        try {

            const { id } = req.params;
            
            const { fullname, position, picture } = req.body;
            const editedUser = await UsersServices.edit(id, { fullname, position, picture });
            SuccessHandlerUtil.handleUpdate(res, next, editedUser);
        } catch (error) {
            next(error);
        }
    }
    static async update(req, res, next) {
        try {
            const { id } = req.params;
            const { status } = req.body;

            const [updatedUser] = await UsersServices.update(id, status);
            SuccessHandlerUtil.handleUpdate(res, next, {status: updatedUser.status});
        } catch (error) {
            next(error);
        }
    }


    static async addPic(req, res, next) {
        try {
            const { file } = req;
            const { originalname, filename, path } = file;
            const dirname =  `${HOST_OF_SERVER}/` + path
            SuccessHandlerUtil.handleAdd(res, next, { originalname, filename, dirname, success: true  });
        } catch (error) {
            next(error);
        }
    }

    static async delete(req, res, next) {
        try {
            const { id } = req.params;
            const deletedUser = await UsersServices.delete(id);

            SuccessHandlerUtil.handleGet(res, next, deletedUser);
        } catch (error) {
            next(error);
        }
    }
}

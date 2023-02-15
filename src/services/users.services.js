// Local Modules
import { UsersModel } from '../models';

export default class UsersServices {
    static fullList() {
        return  UsersModel.fullList();
    }

    static list() {
        return  UsersModel.list();
    }

    static getById(id){
        return UsersModel.getById(id);
    }

    static add(payload){
        payload.role = 'member';
        payload.status = 'active';
        return UsersModel.create(payload);
    }

    static async edit(id, update){
        await UsersModel.getOneOrFail(id);
        return UsersModel.edit(id, update);
    }
    
    static  update(id, status){
        return UsersModel.update(id, status);
    }

    static async saveImages( path){
        
        return UsersModel.saveImages( path);
    }
    static delete(id){
        return UsersModel.delete(id);
    }
}

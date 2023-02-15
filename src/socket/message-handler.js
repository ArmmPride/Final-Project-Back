// Local Modules
import { UsersModel, AuthModel } from '../models';
import Event from './events';

import ClientsManager from './clients-manager';

class MessageHandler {
    /*
   * @param {Object} client
   * @description registers given client and inits event handlers
   */
    static postAuthenticate(client) {
        client.on(
            Event.CLICK,
            MessageHandler.handleClick(client)
        );
    }

    /*
   * @param {object} client
   * @description forward all messages by current user to loged user
   */
    static handleClick(client) {
        return async (loginUserId, currentUserid) => {
            const ids =  ClientsManager.registerClient(client);
            const loginUser = await AuthModel.getById(loginUserId);
            if(loginUser?.role !== 'primeminister'){
                return;
            }
            const user = await AuthModel.getById(ids);
            if(user.role === 'primeminister') {
                const { id, fullname , position, picture } = await UsersModel.getById(currentUserid);
                console.log({ id, fullname , position, picture });
                client.broadcast.emit(Event.CLICK, { id, fullname, position, picture });
            }
        };
    }
}

export default MessageHandler;
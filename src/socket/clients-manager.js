import { LoggerUtil } from '../utils';

import Event from './events';

class ClientsManager {
  /**
   * @param {Object} client
   * @description get userId from socket
   * @return {string}
   */
  static getId(client) {
    return client.client.locals.user.id;
  }

  /**
   * @description get user Ids from socket
   * @return {string}
   */
  static getIds() {
    return ClientsManager._clients.keys();
  }

  /**
   * @param {Object} client
   * @description Register the client.
   */
  static registerClient(client) {
    const id = ClientsManager.getId(client);
    ClientsManager._clients.set(id, client);
    ClientsManager._users.set(id, { active: true, last_seen: new Date() });

    client.join(id);
    client.broadcast.emit(Event.CONNECTED, id);
    LoggerUtil.info(`Active Users: ${ClientsManager._clients.size}`);
    return id
  }

  /**
   * @param {Object} client
   * @param {string} event
   * @param {Funtion} handler
   * @description register event handler for given socket
   */
  static registerHandler(client, event, handler) {
    client.on(event, handler);
  }

  /**
   * @param {string} userId
   * @description checks user existence by given user ID
   * @return {Bool}
   */
  static hasUser(userId) {
    return ClientsManager._clients.has(userId);
  }

  /**
   * @param {string} clientId
   * @description Remove the client.
   */
  static removeClient(id) {
    ClientsManager._clients.forEach((value, key) => {
      if (value.id === id) {
        ClientsManager._clients.delete(key);
      }
    });
  }

  /**
   * @param {Object} client
   * @description removes current client,set user active true after disconnect
   */
  static disconnectClient(client) {
    return () => {
      const id = ClientsManager.getId(client);
      ClientsManager.removeClient(client.id);
      ClientsManager._users.set(id, { active: false, last_seen: new Date() });

      client.broadcast.emit(Event.DISCONNECTED, id);
      LoggerUtil.info(`Active Users: ${ClientsManager._clients.size}`);
    };
  }

  /**
   * @param {string} userId
   * @param {string} event
   * @param {Object} data
   * @description Emit event.
   */
  static emitEvent(userId, event, data) {
    const client = ClientsManager._clients.get(userId);
    if (client) {
      LoggerUtil.debug(`Emitting event: ${event}...`);
      client.emit(event, data);
    }
  }

  /**
   * @param {string} userId
   * @description get user
   * @return {object}
   */
  static getUser(userId) {
    if (ClientsManager._users.has(userId)) {
      return ClientsManager._users.get(userId);
    }
    return {};
  }
}

ClientsManager._clients = new Map();
ClientsManager._users = new Map();
export default ClientsManager;

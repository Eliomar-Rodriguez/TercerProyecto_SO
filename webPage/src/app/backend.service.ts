import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  id: string;
  public users;
  public chats;
  constructor() {}
  login(id: string, password: string): { id: string; name: string } {
    return {
      id: 'lazuli26',
      name: 'Alberth Salas'
    };
  }
  getChats(id: string) {
    this.chats = {
      elior: [
        { id: 'lazuli26', text: 'hola' },
        { id: 'lazuli26', text: 'hola' },
        { id: 'elior', text: 'hola mundo' },
        { id: 'elior', text: 'hola mundo' },
        { id: 'lazuli26', text: 'hola' },
        { id: 'elior', text: 'hola mundo' },
        { id: 'lazuli26', text: 'hola' },
        { id: 'elior', text: 'hola mundo' },
        { id: 'lazuli26', text: 'hola' },
        { id: 'elior', text: 'hola mundo' },
        { id: 'lazuli26', text: 'hola' },
        { id: 'elior', text: 'hola mundo' },
        { id: 'lazuli26', text: 'hola' },
        { id: 'elior', text: 'hola mundo' },
        { id: 'lazuli26', text: 'hola' },
        { id: 'elior', text: 'hola mundo' }
      ],
      kemqa: [
        { id: 'lazuli26', text: 'holi' },
        { id: 'lazuli26', text: 'holi' },
        { id: 'kemqa', text: 'holota' },
        { id: 'kemqa', text: 'holota' },
        { id: 'lazuli26', text: 'holi' },
        { id: 'kemqa', text: 'holota' },
        { id: 'lazuli26', text: 'holi' },
        { id: 'kemqa', text: 'holota' }
      ]
    };
  }
  getUsers() {
    this.users = {
      lazuli26: { name: 'Alberth' },
      elior: { name: 'Eliomar' },
      kemqa: { name: 'Kembly' }
    };
  }
  getChat(localID: string, remoteID: string) {
    this.chats[remoteID] = [{id: localID, text: 'prueba exitosa'}, {id: remoteID, text: 'recibido' + remoteID}];
  }
  sendMsg(from: string, to: string, msg: string) {
    this.chats[to].push({id: from, text: msg});
  }
}

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router"; // Se importa las liibrerias del router para el enrutamiento a la pagina principal
import { PlatformLocation } from "@angular/common";
@Injectable({
  providedIn: "root"
})
export class BackendService {
  //Dirección del servidor
  server;
  // Registro de usuarios
  public users = {};
  // Registro de conversaciones
  public chats = {};
  constructor(
    private _http: HttpClient,
    private router: Router,
    platformLocation: PlatformLocation
  ) {
    // Se especifica la dirección del servidor
    this.server = (platformLocation as any).location.origin+ '/';
  }
  // Intenta autenticarse y enruta a la pantalla principal si es exitoso
  login(id: string, password: string) {
    this._http
      .post(this.server + "login", { userName: id, contrasenia: password })
      .subscribe(result => {
        if (result["success"]) {
          // Si la autenticación es exitosa, se procede a ir a la pagina principal y se guarda la información de autenticacion
          localStorage.setItem(
            "userInfo",
            JSON.stringify({ name: id, id: result["data"][0]["success"] })
          );
          this.router.navigate(["/main"]);
        }
      });
  }
  // Se obtiene la lista de usuarios existentes en el servidor
  getUsers() {
    this._http.get(this.server + "allUsers").subscribe(data => {
      if (data["success"]) {
        let newKeys = {};
        // Castea la información recibida según los datos necesarios
        data["data"].forEach(element => {
          this.users[element.ID] = { name: element.username };
          newKeys[element.ID] = element.username;
        });
        Object.keys(this.users).forEach(element => {
          if (newKeys[element] == undefined) {
            this.users[element] = undefined;
          }
        });
      } else {
        this.getUsers();
      }
    });
  }
  // Obtiene la conversación con un usuario especifico
  getChat(localID: string, remoteID: string) {
    this._http
      .post(this.server + "getMessagesChat", {
        ID_Emiter: localID,
        ID_Receiver: remoteID
      })
      .subscribe(data => {
        this.chats[remoteID] = [];
        if (data['success'] && data["data"])
          data["data"].forEach(element => {
            this.chats[remoteID].push({
              id: element.ID_Emiter,
              text: element.TextMessage
            });
          });
      });
  }
  // Envía un mensaje a un usuario
  sendMsg(from: string, to: string, msg: string) {
    this._http
      .post(this.server + "sendMessage", {
        textMessage: msg,
        ID_Emiter: from,
        ID_Receiver: to
      })
      .subscribe(data => {
        if (data["success"]) {
          this.getChat(from, to);
        }
      });
  }
}

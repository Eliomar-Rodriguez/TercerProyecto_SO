import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router"; // Se importa las liibrerias del router para el enrutamiento a la pagina principal
import { BackendService } from "../backend.service"; // Se importa el servicio de backend para uso del login

@Component({
  selector: "app-main-view",
  templateUrl: "./main-view.component.html",
  styleUrls: ["./main-view.component.css"]
})
export class MainViewComponent implements OnInit {
  // Para utilizar desde el codigo html
  Object = Object;
  // Contador para tareas por lote
  Contador = 0;
  // Numero maximo de mensajes que se pueden enviar por tarea
  maxCounter = 100;
  // Donde se almacena la información de inicio de sesión del usuario
  userInfo;

  // El constructor define instancias del BackendService y el Router
  constructor(private _Backend: BackendService, private _Router: Router) {
    // Se obtiene la información del usuario y se retorna al login si esta no es encontrada
    this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (this.userInfo === null) {
      this._Router.navigate([""]);
    }
    // Se obtienen los usuarios de la base de datos
    this._Backend.getUsers();
  }
  // Identifica al usuario actual con que se está conversando
  activeUser = "";
  selectUser(user) {
    // Selecciona a un usuario desde la interfaz, para mostrar el chat y especificar el actual destinatario de un mensaje
    if (this._Backend.users[user].text === undefined) {
      this._Backend.users[user].text = "";
    }
    this.activeUser = user;
    // Se actualiza el chat con el destinatario seleccionado
    this._Backend.getChat(this.userInfo.id, this.activeUser);
  }
  send() {
    // Envia un mensaje desde el servicio de backend
    this._Backend.sendMsg(
      this.userInfo.id,
      this.activeUser,
      this._Backend.users[this.activeUser].text
    );
    // Limpia el cuadro de texto ya que el mensaje fue enviado
    this._Backend.users[this.activeUser].text = "";
  }
  // Envia un conjunto de mensajes generado automaticamente
  sendLot(C) {
    for (let index = 0; index < C; index++) {
      this._Backend.sendMsg(
        this.userInfo.id,
        this.activeUser,
        "Message #" + (index + 1) + ", " + new Date().toLocaleString()
      );
    }
  }
  ngOnInit() {
    // Intervalo que chequea regularmente si se ha recibido un mensaje nuevo
    setInterval(() => {
      if (this.activeUser !== "") {
        this._Backend.getChat(this.userInfo.id, this.activeUser);
      }
    }, 2000);
  }
}

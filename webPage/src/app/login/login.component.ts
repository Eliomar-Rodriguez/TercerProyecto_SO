import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service'; // Se importa el servicio de backend para uso del login
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // user contiene los datos de los campos de texto
  user = {
    id: '',
    pass: ''
  };
  // El constructor define instancias del BackendService y el Router
  constructor(private _Backend: BackendService) {}
  // La unica funcion contenida se encarga de realizar el proceso de autenticacion en conjunto con el servicio de backend
  public login() {
    this._Backend.login(this.user.id, this.user.pass);
  }

  ngOnInit() {}
}

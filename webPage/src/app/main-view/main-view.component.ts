import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {
  Object = Object;
  users = {
    lazuli26: { name: 'Alberth' },
    elior: { name: 'Eliomar' },
    kemqa: { name: 'Kembly' }
  };
  chats = {
    elior: [
      { id: 'lazuli26', text: 'hola' },
      { id: 'lazuli26', text: 'hola' },
      { id: 'elior', text: 'hola mundo' },
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
  userInfo = {
    id: 'lazuli26',
    name: 'Alberth Salas'
  };
  constructor() {}
  activeUser = '';
  selectUser(user) {
    if (this.users[user].text === undefined) {
      this.users[user].text = '';
    }
    this.activeUser = user;
  }
  send() {
    console.log(this.users[this.activeUser].text);
    this.users[this.activeUser].text = '';
  }
  ngOnInit() {}
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    id: '',
    pass: ''
  };
  userInfo = {
    name: '',
    id: ''
  };
  constructor(private router: Router) {}
  public login() {
    this.router.navigate(['/main']);
    localStorage.setItem('userInfo', JSON.stringify({id: 'lazuli26', name: 'Alberth Salas'}));
  }

  ngOnInit() {}
}

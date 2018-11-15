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
    console.log('User:' + this.user + '\n Pass:' + this.user.pass);
    this.router.navigate(['/main']);
  }

  ngOnInit() {}
}

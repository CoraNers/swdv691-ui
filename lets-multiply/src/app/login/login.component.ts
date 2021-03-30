import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username = "";
  password = "";

  constructor() { }

  ngOnInit(): void {
    console.log('ngOnInit of login component');
  }

  doLogin() {
    console.log('doLogin of login component');
    console.log(this.username);
    console.log(this.password);
  }

}

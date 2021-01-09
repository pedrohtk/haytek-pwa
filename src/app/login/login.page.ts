import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  showPass = false as boolean;

  constructor() { }

  ngOnInit() {
  }

  changeVisibilityPass(){
    this.showPass = !this.showPass;
  }

}

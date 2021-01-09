import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular'
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  showPass = false as boolean;

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  changeVisibilityPass(){
    this.showPass = !this.showPass;
  }

  login(){
    this.navCtrl.navigateForward('home')
  }

}

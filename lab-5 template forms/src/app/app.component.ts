import { Component } from '@angular/core';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  user: User

  constructor() {
    this.user = new User()
  }

  loginSubmit(loginForm){
    console.log(loginForm)
    this.user = new User()
    loginForm.form.markAsPristine()
  }

}

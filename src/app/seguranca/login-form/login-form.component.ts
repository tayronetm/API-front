import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { AuthService } from '../auth.service';
=======
>>>>>>> 0385db708c486563888754151eaf920ed036f743

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

<<<<<<< HEAD
  constructor(private auth: AuthService) { }

  login(usuario: string, senha: string) {
    this.auth.login(usuario, senha);
=======
  constructor() { }

  login(usuario: string, senha: string) {
>>>>>>> 0385db708c486563888754151eaf920ed036f743
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public cheking: boolean = false;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {

    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });

  }

  get username() { return this.loginForm.get('username'); }
  get password() { return this.loginForm.get('password'); }

  ngOnInit() {
  }

  onSubmitForm() {

    this.cheking = true;

    setTimeout(() => {
      if (this.loginService.login(this.loginForm.value)) {
        this.loginService.verificationMessage('Inicio de Session correcto');
        this.loginService.loginSuccessful = true;
        this.router.navigate(['/ships']);
      } else {
        this.loginService.errorMessage('Usuario o contraseña incorrecto');
      }
      this.cheking = false;
    }, 2000);

  }

  register() {

    this.cheking = true;

    setTimeout(() => {
      if (this.loginService.contolDuplucate(this.loginForm.value)) {
        this.loginService.errorMessage('Usuario ya registrado');
        this.cheking = false;
      } else {
        this.loginService.users.push(this.loginForm.value);
        this.cheking = false;
        this.loginService.verificationMessage('Usuario registrado');
      }
    }, 2000);

  }

}

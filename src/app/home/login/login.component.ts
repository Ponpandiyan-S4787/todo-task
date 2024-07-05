import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });
  onClickedLoginBtn() {
    this.authService
      .loginMethod(
        this.loginForm.value.email as string,
        this.loginForm.value.password as string
      )
      .then((res) => {
        alert('LOGIN-Successfully...!');
        this.router.navigate(['dashboard']);
      })
      .catch((error) => {
        alert(' please login correctly');
      });
  }
  onClickedCancelBtn() {
    window.location.reload();
  }
  onClickedLoginGoogle() {
    this.authService
      .loginWithGoogleMethod()
      .then((res) => {
        console.log('google login success');
        this.router.navigate(['dashboard']);
      })
      .catch((error) => {
        alert('please use proper credientials... ');
      });
  }
}

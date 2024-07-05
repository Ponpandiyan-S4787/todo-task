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
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  constructor(private authService: AuthService, private route: Router) {}

  signupForm = new FormGroup({
    fName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lName: new FormControl('', [Validators.required, Validators.minLength(6)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });
  onClickedSubmitBtn() {
    this.authService
      .signinMethod(
        this.signupForm.value.email as string,
        this.signupForm.value.password as string
      )
      .then((res) => {
        alert(' successfully');
        this.route.navigate(['login']);
      })
      .catch((error) => {
        alert(error);
      });
  }
  onClickedCancelBtn() {
    window.location.reload();
  }
  onClickedAlreadyReg() {
    this.route.navigate(['login']);
  }
}

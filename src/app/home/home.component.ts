import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,SignUpComponent, LoginComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}

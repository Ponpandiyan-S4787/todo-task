import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  constructor(private router: Router, private authService: AuthService) {}
  onClickedBackBtn() {
    this.router.navigate(['todo']);
  }
  // onClickedLogoutBtn() {
  //   this.authService
  //     .logoutMethod()
  //     .then((res) => {
  //       setTimeout(() => {
  //         window.location.reload();
  //       }, 1000);
  //       this.router.navigate(['home']);
  //     })
  //     .catch((error) => {});
  // }
}

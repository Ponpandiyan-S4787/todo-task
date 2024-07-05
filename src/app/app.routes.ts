import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './home/sign-up/sign-up.component';
import { LoginComponent } from './home/login/login.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { PageNotFoundComponent } from './home/page-not-found/page-not-found.component';
import { TodoComponent } from './home/todo/todo.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'todo', component: TodoComponent },
  { path: '***', component: PageNotFoundComponent },
];

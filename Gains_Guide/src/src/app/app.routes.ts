import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'create-account', component: CreateAccountComponent },
    { path: 'profile', component: ProfileComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' }  // 👈 this sets the default page
  ];
  

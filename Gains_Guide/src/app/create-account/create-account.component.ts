import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './create-account.component.html'
})
export class CreateAccountComponent {
  email = '';
  password = '';
  confirmPassword = '';
  name = '';
  age: number | null = null;
  errorMessage = '';
  successMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match.';
      this.successMessage = '';
      return;
    }
  
    this.authService.register(this.email, this.password)
      .then(() => {
        this.successMessage = 'Account created! Redirecting to login...';
        this.errorMessage = '';
        setTimeout(() => {
          this.router.navigate(['/welcome']);
        }, 1500);
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          this.errorMessage = 'That email is already registered.';
        } else {
          this.errorMessage = 'Account creation failed.';
        }
        this.successMessage = '';
      });
  }
  
  
}

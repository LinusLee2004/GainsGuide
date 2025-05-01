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

    const success = this.authService.registerUser({
      email: this.email,
      password: this.password,
      name: this.name,
      age: this.age || undefined
    });

    if (success) {
      this.successMessage = 'Account created! Redirecting to login...';
      this.errorMessage = '';
      setTimeout(() => {
        this.router.navigate(['/welcome']);
      }, 1500);
    } else {
      this.errorMessage = 'That email is already registered.';
      this.successMessage = '';
    }
  }
}

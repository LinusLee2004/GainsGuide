import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
  user: any = null;
  successMessage = '';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.user = this.authService.currentUser;
    if (this.user) {
      this.user = { ...this.user }; // clone to avoid modifying original until saved
    }
  }

  saveProfile(): void {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const index = users.findIndex((u: { email: string }) => u.email === this.user.email);
    if (index > -1) {
      users[index] = this.user;
      localStorage.setItem('users', JSON.stringify(users));
      this.successMessage = 'Profile updated!';
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
  user: any = null;
  prs: any[] = [];
  successMessage = '';

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.user = this.authService.currentUser;


    if (this.user?.prs) {
      this.prs = this.user.prs;
    }
  }

  saveProfile() {
    this.successMessage = 'Profile updated (local only in this version)';
  }
}

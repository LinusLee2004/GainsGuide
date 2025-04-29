import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  email: string | null = null;

  constructor(private router: Router) {}

  ngOnInit() {
    const storedEmail = localStorage.getItem('loggedInUser');
    if (!storedEmail) {
      // No one is logged in — redirect to login
      this.router.navigate(['/login']);
    } else {
      this.email = storedEmail;
    }
  }

  logout() {
    localStorage.removeItem('loggedInUser');
    this.router.navigate(['/login']);
  }
}

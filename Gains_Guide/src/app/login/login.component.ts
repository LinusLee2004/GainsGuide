import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private router: Router) {}

  onSubmit() {
    const savedPassword = localStorage.getItem(this.email);

    if (!savedPassword) {
      alert('Account not found. Please create one.');
      return;
    }

    if (savedPassword !== this.password) {
      alert('Incorrect password.');
      return;
    }

    
    localStorage.setItem('loggedInUser', this.email);

    alert('Login successful!');
    this.router.navigate(['/profile']);
  }
}

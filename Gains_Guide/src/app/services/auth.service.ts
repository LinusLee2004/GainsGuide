import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface User {
  email: string;
  password: string;
  name?: string;
  age?: number;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.loggedIn.asObservable();
  private currentUserEmail: string | null = null;

  registerUser(user: User): boolean {
    const users = this.getUsers();
    const email = user.email.trim().toLowerCase();

    const exists = users.some(u => u.email.trim().toLowerCase() === email);
    if (exists) return false;

    users.push({ ...user, email });
    localStorage.setItem('users', JSON.stringify(users));
    return true;
  }

  login(email: string, password: string): boolean {
    const users = this.getUsers();
    const match = users.find(u => 
      u.email.trim().toLowerCase() === email.trim().toLowerCase() && 
      u.password === password
    );

    if (match) {
      this.loggedIn.next(true);
      this.currentUserEmail = match.email;
      return true;
    }

    return false;
  }

  logout(): void {
    this.loggedIn.next(false);
    this.currentUserEmail = null;
  }

  getCurrentUser(): User | null {
    const users = this.getUsers();
    return users.find(u => u.email === this.currentUserEmail) || null;
  }

  private getUsers(): User[] {
    try {
      return JSON.parse(localStorage.getItem('users') || '[]');
    } catch {
      return [];
    }
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserProfile } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  private userProfile = new BehaviorSubject<UserProfile | null>(null);
  user$ = this.userProfile.asObservable();

  setUser(user: UserProfile) {
    this.userProfile.next(user);
  }

  updateUser(updates: Partial<UserProfile>) {
    const current = this.userProfile.value;
    if (current) {
      this.userProfile.next({ ...current, ...updates });
    }
  }
}
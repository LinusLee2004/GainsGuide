import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';
import { UserProfile } from '../models/user.model';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  imports: [ReactiveFormsModule], // 👈 this line is critical
})
export class ProfileComponent implements OnInit {
  profileForm!: FormGroup;
  user!: UserProfile | null;

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit() {
    this.userService.user$.subscribe(user => {
      this.user = user;
      this.profileForm = this.fb.group({
        name: [user?.name || ''],
        email: [user?.email || ''],
        age: [user?.age || ''],
        gender: [user?.gender || ''],
        height: [user?.height || ''],
        weight: [user?.weight || ''],
        goal: [user?.goal || ''],
      });
    });
  }

  save() {
    if (this.profileForm.valid) {
      this.userService.updateUser(this.profileForm.value);
    }
  }
}
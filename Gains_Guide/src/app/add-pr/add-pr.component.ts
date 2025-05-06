import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { Auth } from '@angular/fire/auth';

@Component({
  standalone: true,
  selector: 'app-add-pr',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-pr.component.html',
  styleUrls: ['./add-pr.component.css']
})
export class AddPrComponent {
  lift = '';
  weight: number | null = null;
  units = 'lbs';
  date = '';

  constructor(private firestore: Firestore, private auth: Auth) {}

  async addPR() {
    const user = this.auth.currentUser;
    if (!user) return;

    const prData = {
      lift: this.lift,
      weight: this.weight,
      units: this.units,
      date: this.date
    };

    const prCollection = collection(this.firestore, `users/${user.uid}/prs`);
    await addDoc(prCollection, prData);
    alert('PR added successfully!');
  }
}

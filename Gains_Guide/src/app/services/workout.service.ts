import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, addDoc, doc, deleteDoc, query, where } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { WorkoutEntry } from '../models/workout.model';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class WorkoutService {
  constructor(private firestore: Firestore, private authService: AuthService) {}

  getWorkouts(): Observable<WorkoutEntry[]> {
    const userId = this.authService.currentUser?.uid;
    if (!userId) return of([]);

    const workoutsRef = collection(this.firestore, 'workouts');
    const userQuery = query(workoutsRef, where('userId', '==', userId));

    return collectionData(userQuery, { idField: 'id' }) as Observable<WorkoutEntry[]>;
  }

  addWorkout(workout: WorkoutEntry) {
    const workoutsRef = collection(this.firestore, 'workouts');
    return addDoc(workoutsRef, workout);
  }

  deleteWorkout(id: string) {
    const workoutRef = doc(this.firestore, `workouts/${id}`);
    return deleteDoc(workoutRef);
  }
}

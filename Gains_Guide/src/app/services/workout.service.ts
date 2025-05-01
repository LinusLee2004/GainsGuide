import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { WorkoutEntry } from '../models/workout.model';

@Injectable({ providedIn: 'root' })
export class WorkoutService {
  private workouts = new BehaviorSubject<WorkoutEntry[]>([]);
  workouts$ = this.workouts.asObservable();

  addWorkout(workout: WorkoutEntry) {
    this.workouts.next([...this.workouts.value, workout]);
  }

  updateWorkout(id: number, updated: Partial<WorkoutEntry>) {
    this.workouts.next(
      this.workouts.value.map(w => w.id === id ? { ...w, ...updated } : w)
    );
  }

  deleteWorkout(id: number) {
    this.workouts.next(this.workouts.value.filter(w => w.id !== id));
  }
}
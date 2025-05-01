import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Workout {
  exercise: string;
  sets: number;
  reps: number;
  weight: number;
  date: string;
}

@Component({
  selector: 'app-log-workout',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './log-workout.component.html'
})
export class LogWorkoutComponent implements OnInit {
  workout: Partial<Workout> = {};
  workouts: Workout[] = [];

  ngOnInit(): void {
    const stored = localStorage.getItem('workouts');
    this.workouts = stored ? JSON.parse(stored) : [];
  }

  logWorkout(): void {
    if (!this.workout.exercise || !this.workout.sets || !this.workout.reps || !this.workout.weight) return;

    const entry: Workout = {
      exercise: this.workout.exercise,
      sets: this.workout.sets,
      reps: this.workout.reps,
      weight: this.workout.weight,
      date: new Date().toISOString().split('T')[0]
    };

    this.workouts.push(entry);
    localStorage.setItem('workouts', JSON.stringify(this.workouts));
    this.workout = {};
  }

  get todayWorkouts(): Workout[] {
    const today = new Date().toISOString().split('T')[0];
    return this.workouts.filter(w => w.date === today);
  }
}

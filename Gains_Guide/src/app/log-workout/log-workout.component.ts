import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WorkoutService } from '../services/workout.service';
import { AuthService } from '../services/auth.service';

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

  constructor(
    private workoutService: WorkoutService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const stored = localStorage.getItem('workouts');
    this.workouts = stored ? JSON.parse(stored) : [];
  }

  logWorkout(): void {
    if (!this.workout.exercise || !this.workout.sets || !this.workout.reps || !this.workout.weight) return;
  
    const userId = this.authService.currentUser?.uid;
    if (!userId) {
      console.error('No user is logged in — cannot save workout');
      return;
    }

    
  
    const date = new Date().toISOString().split('T')[0];
  
    const entry = {
      date,
      notes: '',
      userId,
      exercises: [
        {
          name: this.workout.exercise as string,
          sets: Array(this.workout.sets).fill(null).map(() => ({
            reps: this.workout.reps as number,
            weight: this.workout.weight as number
          }))
        }
      ]
    };
    
  
    this.workoutService.addWorkout(entry)
      .then(() => console.log('Workout saved to Firestore'))
      .catch(err => console.error('Error saving workout:', err));
  
    this.workout = {};
  }
  get todayWorkouts(): Workout[] {
    const today = new Date().toISOString().split('T')[0];
    return this.workouts.filter(w => w.date === today);
  }  
  
  
}

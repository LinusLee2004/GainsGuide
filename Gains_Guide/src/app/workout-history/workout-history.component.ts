import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Workout {
  exercise: string;
  sets: number;
  reps: number;
  weight: number;
  date: string;
}

@Component({
  selector: 'app-workout-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './workout-history.component.html'
})
export class WorkoutHistoryComponent implements OnInit {
  groupedWorkouts: { [date: string]: Workout[] } = {};

  ngOnInit(): void {
    const raw = localStorage.getItem('workouts');
    const workouts: Workout[] = raw ? JSON.parse(raw) : [];

    // Group workouts by date
    workouts.forEach(w => {
      if (!this.groupedWorkouts[w.date]) {
        this.groupedWorkouts[w.date] = [];
      }
      this.groupedWorkouts[w.date].push(w);
    });

    // Sort workouts within each date (optional)
    for (const date in this.groupedWorkouts) {
      this.groupedWorkouts[date].sort((a, b) => a.exercise.localeCompare(b.exercise));
    }
  }

  get sortedDates(): string[] {
    return Object.keys(this.groupedWorkouts).sort((a, b) => b.localeCompare(a)); // newest date first
  }
}

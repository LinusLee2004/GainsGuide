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
  selector: 'app-track-progress',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './track-progress.component.html'
})
export class TrackProgressComponent implements OnInit {
  allWorkouts: Workout[] = [];
  progressData: { [exercise: string]: { date: string; volume: number }[] } = {};
  objectKeys = Object.keys;

  ngOnInit(): void {
    const stored = localStorage.getItem('workouts');
    this.allWorkouts = stored ? JSON.parse(stored) : [];

    this.processVolumeByExercise();
  }

  processVolumeByExercise(): void {
    for (const workout of this.allWorkouts) {
      const volume = workout.sets * workout.reps * workout.weight;

      if (!this.progressData[workout.exercise]) {
        this.progressData[workout.exercise] = [];
      }

      this.progressData[workout.exercise].push({
        date: workout.date,
        volume
      });
    }

    // Sort each array by date (optional)
    for (const exercise in this.progressData) {
      this.progressData[exercise].sort((a, b) => a.date.localeCompare(b.date));
    }
  }
}

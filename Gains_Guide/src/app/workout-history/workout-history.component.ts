import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutService } from '../services/workout.service';
import { WorkoutEntry } from '../models/workout.model';
import { AsyncPipe, NgForOf } from '@angular/common';

@Component({
  selector: 'app-workout-history',
  standalone: true,
  imports: [CommonModule, NgForOf],
  templateUrl: './workout-history.component.html',
  styleUrls: ['./workout-history.component.css']
})
export class WorkoutHistoryComponent implements OnInit {
  workouts: WorkoutEntry[] = [];
  groupedWorkouts: { [date: string]: WorkoutEntry[] } = {};

  constructor(private workoutService: WorkoutService) {}

  ngOnInit(): void {
    this.workoutService.getWorkouts().subscribe(data => {
      this.workouts = data;
      this.groupWorkoutsByDate();
    });
  }

  private groupWorkoutsByDate(): void {
    this.groupedWorkouts = {};
    for (const workout of this.workouts) {
      if (!this.groupedWorkouts[workout.date]) {
        this.groupedWorkouts[workout.date] = [];
      }
      this.groupedWorkouts[workout.date].push(workout);
    }
  }

  getSortedDates(): string[] {
    return Object.keys(this.groupedWorkouts).sort((a, b) => b.localeCompare(a));
  }
}

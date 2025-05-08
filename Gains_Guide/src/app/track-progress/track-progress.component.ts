import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutService } from '../services/workout.service';
import { WorkoutEntry } from '../models/workout.model';
import { AsyncPipe, NgForOf } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-track-progress',
  standalone: true,
  imports: [CommonModule, NgForOf, AsyncPipe],
  templateUrl: './track-progress.component.html',
  styleUrls: ['./track-progress.component.css']
})
export class TrackProgressComponent implements OnInit {
  workouts$: Observable<WorkoutEntry[]>;

  constructor(private workoutService: WorkoutService) {
    this.workouts$ = this.workoutService.getWorkouts();
  }

  ngOnInit(): void {}

  deleteWorkout(id: string | undefined): void {
    if (!id) {
      console.warn('Tried to delete a workout with no ID');
      return;
    }
  
    this.workoutService.deleteWorkout(id)
      .catch(err => console.error('Delete failed:', err));
  }  
  
}


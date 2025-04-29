import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LogWorkoutComponent } from './log-workout/log-workout.component';
import { ExerciseDemosComponent } from './exercise-demos/exercise-demos.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LogWorkoutComponent, ExerciseDemosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Gains_Guide';
}

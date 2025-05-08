import { AddPrComponent } from './add-pr/add-pr.component';
import { Routes } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { ExerciseDemosComponent } from './exercise-demos/exercise-demos.component';
import { LogWorkoutComponent } from './log-workout/log-workout.component';
import { TrackProgressComponent } from './track-progress/track-progress.component';
import { WorkoutHistoryComponent } from './workout-history/workout-history.component';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';


export const appRoutes: Routes = [
  { path: 'add-pr', component: AddPrComponent},
  { path: 'welcome', component: LoginComponent },
  { path: 'create-account', component: CreateAccountComponent},
  { path: 'login', component: LoginComponent},
  { path: 'profile', component: ProfileComponent },
  { path: 'exercise-demos', component: ExerciseDemosComponent },
  { path: 'log-workout', component: LogWorkoutComponent },
  { path: 'track-progress', component: TrackProgressComponent },
  { path: 'workout-history', component: WorkoutHistoryComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }, 
];

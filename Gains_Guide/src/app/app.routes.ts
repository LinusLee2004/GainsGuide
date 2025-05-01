import { Routes } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { ExerciseDemosComponent } from './exercise-demos/exercise-demos.component';
import { LogWorkoutComponent } from './log-workout/log-workout.component';
import { TrackProgressComponent } from './track-progress/track-progress.component';
import { WorkoutHistoryComponent } from './workout-history/workout-history.component';
import { LoginComponent } from './login/login.component';

export const appRoutes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'profile', component: ProfileComponent },
  { path: 'account-settings', component: AccountSettingsComponent },
  { path: 'exercise-demos', component: ExerciseDemosComponent },
  { path: 'log-workout', component: LogWorkoutComponent },
  { path: 'track-progress', component: TrackProgressComponent },
  { path: 'workout-history', component: WorkoutHistoryComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // default route
];

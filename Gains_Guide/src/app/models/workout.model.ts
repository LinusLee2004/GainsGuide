export interface WorkoutEntry {
  id?: string;
  date: string;
  notes?: string;
  exercises: LoggedExercise[];
}

export interface LoggedExercise {
  name: string;
  sets: SetEntry[];
}

export interface SetEntry {
  reps: number;
  weight: number;
  rpe?: number;
}


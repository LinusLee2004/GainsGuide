export interface WorkoutEntry {
  id: number;
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


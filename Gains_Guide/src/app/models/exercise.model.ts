export interface ExerciseDemo {
    id: number;
    name: string;
    category: 'push' | 'pull' | 'legs' | 'core' | 'cardio';
    description?: string;
    videoUrl?: string;
    tips?: string[];
  }
  
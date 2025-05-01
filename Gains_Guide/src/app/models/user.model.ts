export interface UserProfile {
    id: number;
    name: string;
    email: string;
    age?: number;
    gender?: string;
    height?: number;
    weight?: number;
    goal?: 'cutting' | 'bulking' | 'maintenance';
  }
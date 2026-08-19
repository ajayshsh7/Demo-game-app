export type CategoryId = 'frontend' | 'backend' | 'database' | 'system_design' | 'devops' | 'oop';

export interface Category {
  id: CategoryId;
  name: string;
  description: string;
}

export interface Question {
  id: string;
  categoryId: CategoryId;
  text: string;
  options: string[];
  correctOptionIndex: number;
}

export interface CategoryProgress {
  score: number; 
  lives: number;
  isComplete: boolean;
}

export type AppProgress = Record<CategoryId, CategoryProgress>;

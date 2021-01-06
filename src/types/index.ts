export enum Difficulty {
  EASY = 1,
  MEDIUM = 2,
  HARD = 3,
}

export interface Recipe {
  id: string;
  image: string;
  title: string;
  description: string;
  created_at: string;
  score: number;
  difficulty: Difficulty;
  preparation_time: string;
  ingredients: Ingredient[];
  author: string;
  comments?: Comment[];
}

export interface Comment {
  id: string;
  recipe: string;
  author: string;
  content: string;
  created_at: string;
}

export interface Ingredient {
  name: string;
  quantity: string;
}

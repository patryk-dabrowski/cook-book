export interface Recipe {
  id: string;
  image: string;
  title: string;
  description: string;
  created_at: string;
  author: User;
}

export interface User {
  id: string;
  first_name: string;
  last_name: string;
}

export interface Comment {
  id: string;
  author: User;
  content: string;
  created_at: string;
}

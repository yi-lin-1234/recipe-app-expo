export type Recipe = {
  id: string;
  name: string;
  cuisine: string;
  ingredients: string;
  instructions: string;
  recipePictureUrl: string;
  totalPrepTime: number;
  difficultyLevel: string;
  likes: number;
  reviews: number;
  notes: string;
  UserId: string;
  createdAt: string;
  updatedAt: string;
};

export type RecipeWithUserInfo = {
  User: { id: string; profilePictureUrl: string; username: string };
  id: string;
  name: string;
  cuisine: string;
  ingredients: string;
  instructions: string;
  recipePictureUrl: string;
  totalPrepTime: number;
  difficultyLevel: string;
  likes: number;
  reviews: number;
  notes: string;
  UserId: string;
  createdAt: string;
  updatedAt: string;
};

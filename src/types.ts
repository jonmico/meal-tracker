export type User = {
  id: string;
  userName: string;
  fat: number;
  carbs: number;
  protein: number;
  calories: number;
};

export type Meal = {
  id: string;
  mealName: string;
  fat: number;
  carbs: number;
  protein: number;
  calories: number;
};

export type Macros = {
  calories: number;
  fat: number;
  carbs: number;
  protein: number;
};

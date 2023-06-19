import { Meal } from './types';

export function sumByKey(
  arr: Meal[],
  key: keyof Omit<Meal, 'id' | 'mealName'>
): number {
  return arr.reduce((sum, obj: Meal) => sum + obj[key], 0);
}

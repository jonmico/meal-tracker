import { Macros, User } from '../types';
import MacroNumber from './styled-components/MacroNumber';

interface MacroRemainingProps {
  macros: Macros;
  user: User;
}

export default function MacroRemaining({ macros, user }: MacroRemainingProps) {
  const { calories, fat, carbs, protein } = macros;
  const remainCals = user.calories - calories;
  const remainCarbs = user.carbs - carbs;
  const remainFat = user.fat - fat;
  const remainPro = user.protein - protein;

  return (
    <>
      <h4>Remaining</h4>
      <MacroNumber>{remainFat}</MacroNumber>
      <MacroNumber>{remainCarbs}</MacroNumber>
      <MacroNumber>{remainPro}</MacroNumber>
      <MacroNumber>{remainCals}</MacroNumber>
    </>
  );
}

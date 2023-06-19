import { User } from '../types';
import MacroNumber from './styled-components/MacroNumber';

interface MacroTotalsProps {
  user: User;
}

export default function MacroTotals({ user }: MacroTotalsProps) {
  const { fat, protein, carbs, calories } = user;
  return (
    <>
      <h4>Total</h4>
      <MacroNumber>{fat}</MacroNumber>
      <MacroNumber>{carbs}</MacroNumber>
      <MacroNumber>{protein}</MacroNumber>
      <MacroNumber>{calories}</MacroNumber>
    </>
  );
}

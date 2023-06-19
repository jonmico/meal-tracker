import { User } from '../types';
import { styled } from 'styled-components';

const MacroNumber = styled.p`
  font-size: 1rem;
`;

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

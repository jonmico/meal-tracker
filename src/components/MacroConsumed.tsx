import { styled } from 'styled-components';
import { Macros } from '../types';

const MacroNumber = styled.p`
  font-size: 1rem;
`;

interface MacroConsumedProps {
  macros: Macros;
}

export default function MacroConsumed({ macros }: MacroConsumedProps) {
  const { calories, fat, carbs, protein } = macros;

  return (
    <>
      <h4>Consumed</h4>
      <MacroNumber>{fat}</MacroNumber>
      <MacroNumber>{carbs}</MacroNumber>
      <MacroNumber>{protein}</MacroNumber>
      <MacroNumber>{calories}</MacroNumber>
    </>
  );
}

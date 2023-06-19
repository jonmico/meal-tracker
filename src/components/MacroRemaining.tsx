import { styled } from 'styled-components';

const MacroNumber = styled.p`
  font-size: 1rem;
`;

export default function MacroRemaining() {
  return (
    <>
      <h4>Remaining</h4>
      <MacroNumber>X</MacroNumber>
      <MacroNumber>X</MacroNumber>
      <MacroNumber>X</MacroNumber>
      <MacroNumber>X</MacroNumber>
    </>
  );
}

import { styled } from 'styled-components';

const MacroNumber = styled.p`
  font-size: 1rem;
`;

export default function MacroConsumed() {
  return (
    <>
      <h4>Consumed</h4>
      <MacroNumber>X</MacroNumber>
      <MacroNumber>X</MacroNumber>
      <MacroNumber>X</MacroNumber>
      <MacroNumber>X</MacroNumber>
    </>
  );
}

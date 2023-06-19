import { styled } from 'styled-components';

const MacroTitle = styled.h4`
  border-bottom: 1px solid white;
  min-width: 125px;
`;

export default function MacroTitles() {
  return (
    <>
      <h4></h4>
      <MacroTitle>Fat</MacroTitle>
      <MacroTitle>Carbohydrates</MacroTitle>
      <MacroTitle>Protein</MacroTitle>
      <MacroTitle>Calories</MacroTitle>
    </>
  );
}

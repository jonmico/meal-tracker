import { styled } from 'styled-components';
import { User } from '../types';

const MacroDisplayWrapper = styled.div`
  width: 75%;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  column-gap: 20px;
  text-align: center;
  padding: 0 2rem;
`;

const MacroTitle = styled.h4`
  border-bottom: 1px solid white;
  min-width: 125px;
`;

const MacroNumber = styled.p`
  font-size: 1rem;
`;

interface MacroDisplayProps {
  user: User;
}

export default function MacroDisplay({ user }: MacroDisplayProps) {
  const { fat, protein, carbs, calories } = user;
  return (
    <div>
      <h3>Here is a look at today:</h3>
      <MacroDisplayWrapper>
        <h4></h4>
        <MacroTitle>Fat</MacroTitle>
        <MacroTitle>Carbohydrates</MacroTitle>
        <MacroTitle>Protein</MacroTitle>
        <MacroTitle>Calories</MacroTitle>
        <h4>Total</h4>
        <MacroNumber>{fat}</MacroNumber>
        <MacroNumber>{carbs}</MacroNumber>
        <MacroNumber>{protein}</MacroNumber>
        <MacroNumber>{calories}</MacroNumber>
        <h4>Consumed</h4>
        <MacroNumber>X</MacroNumber>
        <MacroNumber>X</MacroNumber>
        <MacroNumber>X</MacroNumber>
        <MacroNumber>X</MacroNumber>
        <h4>Remaining</h4>
        <MacroNumber>X</MacroNumber>
        <MacroNumber>X</MacroNumber>
        <MacroNumber>X</MacroNumber>
        <MacroNumber>X</MacroNumber>
      </MacroDisplayWrapper>
    </div>
  );
}

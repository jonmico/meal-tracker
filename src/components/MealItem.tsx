import { styled } from 'styled-components';
import { Meal } from '../types';

const ListItem = styled.li`
  background-color: #635985;
  border: 1px solid black;
  border-radius: 5px;
  margin-bottom: 1rem;
  padding: 0 2rem;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

const DeleteButton = styled.button`
  font-size: 2rem;
  color: #393646;
  background-color: #635985;
  outline: none;
  border: none;

  &:hover {
    cursor: pointer;
    color: #18122b;
  }

  &:active {
    opacity: 0.6;
  }
`;

const Container = styled.div`
  padding: 1rem;
  width: 15%;
`;

const Header = styled.h4`
  margin: 0 0 6px 0;
`;

const Content = styled.p`
  margin: 0;
`;

const MacroContainer = styled(Container)`
  text-align: center;
`;

interface MealItemProps {
  meal: Meal;
  onDelete: (id: string) => void;
}

export default function MealItem({ meal, onDelete }: MealItemProps) {
  const { mealName, carbs, fat, protein, calories, id } = meal;
  return (
    <ListItem>
      <Container>
        <Header>{mealName}</Header>
        <Content>Calories: {calories}</Content>
      </Container>
      <MacroContainer>
        <Header>Fat</Header>
        <Content>{fat}</Content>
      </MacroContainer>
      <MacroContainer>
        <Header>Carbohydrates</Header>
        <Content>{carbs}</Content>
      </MacroContainer>
      <MacroContainer>
        <Header>Protein</Header>
        <Content>{protein}</Content>
      </MacroContainer>

      <DeleteButton onClick={() => onDelete(id)}>&#10005;</DeleteButton>
    </ListItem>
  );
}

import { styled } from 'styled-components';
import H2Style from './styled-components/H2Style';
import { Meal } from '../types';
import MealItem from './MealItem';

const List = styled.ul`
  padding: 0;
  list-style: none;
  width: 85%;
  margin: auto;
`;

interface MealLogProps {
  meals: Meal[];
  onDelete: (id: string) => void;
}

export default function MealLog({ meals, onDelete }: MealLogProps) {
  return (
    <div>
      <H2Style>Meal Log</H2Style>
      <List>
        {meals.map((m) => (
          <MealItem key={m.id} meal={m} onDelete={onDelete} />
        ))}
      </List>
    </div>
  );
}

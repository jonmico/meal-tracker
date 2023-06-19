import { styled } from 'styled-components';
import { Meal, User } from '../types';

import MacroTitles from './MacroTitles';
import MacroTotals from './MacroTotals';
import MacroConsumed from './MacroConsumed';
import MacroRemaining from './MacroRemaining';
import { sumByKey } from '../utils';

const MacroDisplayWrapper = styled.div`
  width: 75%;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  column-gap: 20px;
  text-align: center;
  padding: 0 2rem;
`;

interface MacroDisplayProps {
  user: User;
  meals: Meal[];
}

export default function MacroDisplay({ user, meals }: MacroDisplayProps) {
  const calories = sumByKey(meals, 'calories');
  const fat = sumByKey(meals, 'fat');
  const carbs = sumByKey(meals, 'carbs');
  const protein = sumByKey(meals, 'protein');

  const macros = { calories, fat, carbs, protein };

  return (
    <div>
      <h3>Here is a look at today:</h3>
      <MacroDisplayWrapper>
        <MacroTitles />
        <MacroTotals user={user} />
        <MacroConsumed macros={macros} />
        <MacroRemaining macros={macros} user={user} />
      </MacroDisplayWrapper>
    </div>
  );
}

import { User, Meal } from '../types';
import { styled } from 'styled-components';
import { StartButton } from '../App';

import MacroDisplay from './MacroDisplay';
import { useState } from 'react';

const MainScreenWrapper = styled.div`
  padding: 2rem;
`;

const NoMealsMessage = styled.div`
  width: 30%;
  margin: auto;

  p {
    text-align: center;
  }
`;

const Button = styled(StartButton)`
  margin: 0 auto;
`;

interface UserScreenProps {
  user: User;
}

export default function UserScreen({ user }: UserScreenProps) {
  const { userName, fat, carbs, protein, calories } = user;
  const [meals, setMeals] = useState<Meal[]>([]);

  return (
    <MainScreenWrapper>
      <h2>Helllooooo, {userName}!</h2>
      <MacroDisplay user={user} />
      {meals.length === 0 && (
        <NoMealsMessage>
          <p>
            Looks like you haven't added a meal today, click the button below to
            get started!
          </p>
          <Button>Add Meal</Button>
        </NoMealsMessage>
      )}
    </MainScreenWrapper>
  );
}

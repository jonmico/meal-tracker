import { User, Meal } from '../types';
import { styled } from 'styled-components';
import AddMealButton from './buttons/AddMealButton';

import MacroDisplay from './MacroDisplay';
import MealForm from './MealForm';
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
          <AddMealButton>Add Meal</AddMealButton>
        </NoMealsMessage>
      )}
      <MealForm />
    </MainScreenWrapper>
  );
}

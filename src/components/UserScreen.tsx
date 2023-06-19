import { User, Meal } from '../types';
import { styled } from 'styled-components';
import AddMealButton from './buttons/AddMealButton';
import H2Style from './styled-components/H2Style';

import MacroDisplay from './MacroDisplay';
import MealForm from './MealForm';
import MealLog from './MealLog';
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
  const { userName } = user;
  const [meals, setMeals] = useState<Meal[]>([]);
  const [isAddingMeal, setIsAddingMeal] = useState(false);

  function handleAddMeal(meal: Meal) {
    setMeals((m) => [...m, meal]);
  }

  function handleDeleteMeal(id: string) {
    setMeals((m) => m.filter((meal) => meal.id !== id));
  }

  return (
    <MainScreenWrapper>
      <H2Style>Hellooooo, {userName}!</H2Style>
      <MacroDisplay user={user} meals={meals} />
      {meals.length === 0 && !isAddingMeal && (
        <NoMealsMessage>
          <p>
            Looks like you haven't added a meal today, click the button below to
            get started!
          </p>
        </NoMealsMessage>
      )}
      {!isAddingMeal ? (
        <AddMealButton onClick={() => setIsAddingMeal(true)}>
          Add Meal
        </AddMealButton>
      ) : (
        <MealForm onAddMeal={handleAddMeal} setIsAddingMeal={setIsAddingMeal} />
      )}

      {meals.length > 0 && (
        <MealLog meals={meals} onDelete={handleDeleteMeal} />
      )}
    </MainScreenWrapper>
  );
}

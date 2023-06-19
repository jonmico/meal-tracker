import { FormEvent, useState } from 'react';
import {
  Form,
  StarterHeader,
  FormInputWrapper,
  Label,
  Input,
} from './StarterForm';
import Button from './buttons/Button';
import { Meal } from '../types';

interface MealFormProps {
  setIsAddingMeal: (value: boolean) => void;
  onAddMeal: (meal: Meal) => void;
}

export default function MealForm({
  setIsAddingMeal,
  onAddMeal,
}: MealFormProps) {
  const [fat, setFat] = useState(0);
  const [carbs, setCarbs] = useState(0);
  const [protein, setProtein] = useState(0);
  const calories = fat * 9 + carbs * 4 + protein * 4;

  function handleClearClick() {
    setFat(0);
    setCarbs(0);
    setProtein(0);
  }

  function handleSubmit(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();

    const newFood = {
      fat,
      carbs,
      protein,
      calories,
    };

    onAddMeal(newFood);
    setIsAddingMeal(false);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <StarterHeader>Enter the details of your meal</StarterHeader>

      <FormInputWrapper>
        <Label htmlFor='fat'>Fat: </Label>
        <Input
          type='text'
          name='fat'
          id='fat'
          onChange={(evt) => setFat(Number(evt.target.value))}
          value={fat}
        />
      </FormInputWrapper>

      <FormInputWrapper>
        <Label htmlFor='carbs'>Carbs: </Label>
        <Input
          type='text'
          name='carbs'
          id='carbs'
          onChange={(evt) => setCarbs(Number(evt.target.value))}
          value={carbs}
        />
      </FormInputWrapper>

      <FormInputWrapper>
        <Label htmlFor='protein'>Protein: </Label>
        <Input
          type='text'
          name='protein'
          id='protein'
          onChange={(evt) => setProtein(Number(evt.target.value))}
          value={protein}
        />
      </FormInputWrapper>

      <FormInputWrapper>
        <Label htmlFor='calories'>Calories: </Label>
        <Input
          type='text'
          name='calories'
          id='calories'
          value={calories}
          disabled
        />
      </FormInputWrapper>

      <FormInputWrapper>
        <Button type='submit'>Add meal</Button>
      </FormInputWrapper>
      <FormInputWrapper>
        <Button type='button' onClick={handleClearClick}>
          Clear
        </Button>
        <Button type='button' onClick={() => setIsAddingMeal(false)}>
          Cancel
        </Button>
      </FormInputWrapper>
    </Form>
  );
}

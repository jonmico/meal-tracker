import { useState, FormEvent } from 'react';
import { styled } from 'styled-components';
import { User } from '../types';
import Button from './buttons/Button';

export const Form = styled.form`
  padding: 2.5rem;
  width: 30%;
  min-width: 350px;
  margin: 1rem auto;
  border: 2px solid white;
  border-radius: 7.5px;
`;

export const Label = styled.label`
  font-size: 1.5rem;
  width: 7.5rem;
`;

export const Input = styled.input`
  text-align: center;
  padding: 0;
  height: 1.5rem;
  border: none;
  font-size: 0.75rem;

  &:focus {
    outline: none;
    background-color: #e1aeff;
  }
`;

export const FormInputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
`;

export const StarterHeader = styled.h2`
  margin: 0 auto 1rem auto;
  padding: 0;
  font-weight: 500;
  font-size: 1.25rem;
  text-align: center;
`;

interface StarterFormProps {
  setIsStarterOpen: (value: boolean) => void;
  setUser: (user: User) => void;
}

export default function StarterForm({
  setIsStarterOpen,
  setUser,
}: StarterFormProps) {
  const [userName, setUserName] = useState('');
  const [fat, setFat] = useState(0);
  const [carbs, setCarbs] = useState(0);
  const [protein, setProtein] = useState(0);
  const calories = fat * 9 + carbs * 4 + protein * 4;

  function handleSubmit(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();

    const newUser = {
      id: crypto.randomUUID(),
      userName,
      fat,
      carbs,
      protein,
      calories,
    };

    setUser(newUser);
    setIsStarterOpen(false);
  }

  function handleClearClick() {
    setUserName('');
    setFat(0);
    setCarbs(0);
    setProtein(0);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <StarterHeader>Let's get some basic information</StarterHeader>
      <FormInputWrapper>
        <Label htmlFor='name'>Name: </Label>
        <Input
          type='text'
          id='name'
          name='name'
          onChange={(evt) => setUserName(evt.target.value)}
          value={userName}
        />
      </FormInputWrapper>

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
        <Button type='submit'>Start!</Button>
        <Button type='button' onClick={handleClearClick}>
          Clear
        </Button>
        <Button type='button' onClick={() => setIsStarterOpen(false)}>
          Cancel
        </Button>
      </FormInputWrapper>
    </Form>
  );
}

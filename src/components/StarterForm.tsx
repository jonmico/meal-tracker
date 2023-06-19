import { useState, FormEvent } from 'react';
import { styled } from 'styled-components';

const Form = styled.form`
  padding: 2.5rem;
  width: 30%;
  min-width: 350px;
  margin: 1rem auto;
  border: 2px solid white;
  border-radius: 7.5px;
`;

const Label = styled.label`
  font-size: 1.5rem;
  width: 7.5rem;
`;

const Input = styled.input`
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

const FormInputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
`;

export const Button = styled.button`
  padding: 5px 30px;
  color: white;
  background-color: #18122b;
  border: 1px solid white;
  border-radius: 7.5px;
  margin: 1rem 1rem 0 1rem;
  font-family: Roboto;
  font-size: 1rem;

  &:hover {
    background-color: #ff78c4;
    cursor: pointer;
    font-weight: 700;
    outline: none;

    &:active {
      opacity: 0.6;
    }
  }
`;

const StarterHeader = styled.h2`
  margin: 0 auto 1rem auto;
  padding: 0;
  font-weight: 500;
  font-size: 1.25rem;
  text-align: center;
`;

interface StarterFormProps {
  onCancel: () => void;
}

export default function StarterForm({ onCancel }: StarterFormProps) {
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

    console.log(newUser);
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
        <Button>Start!</Button>
        <Button onClick={handleClearClick}>Clear</Button>
        <Button onClick={onCancel}>Cancel</Button>
      </FormInputWrapper>
    </Form>
  );
}

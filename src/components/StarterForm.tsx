import { styled } from 'styled-components';

const Form = styled.form`
  padding: 2.5rem;
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

  &:focus {
    outline: none;
    background-color: #f4eee0;
  }
`;

const FormInputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  padding: 5px 30px;
  color: white;
  background-color: #18122b;
  border: 1px solid white;
  border-radius: 7.5px;
  margin-top: 1rem;
  margin-right: 1rem;
  font-family: Roboto;
  font-size: 1rem;

  &:hover,
  &:focus {
    background-color: #635985;
    cursor: pointer;
    font-weight: 700;
    outline: none;
  }
`;

export default function StarterForm() {
  return (
    <Form>
      <FormInputWrapper>
        <Label htmlFor='name'>Name: </Label>
        <Input type='text' />
      </FormInputWrapper>

      <FormInputWrapper>
        <Label htmlFor=''>Fat: </Label>
        <Input type='text' name='' id='' />
      </FormInputWrapper>

      <FormInputWrapper>
        <Label htmlFor=''>Carbs: </Label>
        <Input type='text' name='' id='' />
      </FormInputWrapper>

      <FormInputWrapper>
        <Label htmlFor=''>Protein: </Label>
        <Input type='text' name='' id='' />
      </FormInputWrapper>

      <FormInputWrapper>
        <Label htmlFor=''>Calories: </Label>
        <Input type='text' name='' id='' disabled />
      </FormInputWrapper>
      <FormInputWrapper>
        <Button>Start!</Button>
        <Button>Clear</Button>
      </FormInputWrapper>
    </Form>
  );
}

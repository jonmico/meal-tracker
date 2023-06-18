import { styled } from 'styled-components';

export default function StarterForm() {
  return (
    <form>
      <label htmlFor=''>Name</label>
      <input type='text' />

      <label htmlFor=''>Carbs:</label>
      <input type='number' name='' id='' />

      <label htmlFor=''>Carbs:</label>
      <input type='number' name='' id='' />

      <label htmlFor=''>Carbs:</label>
      <input type='number' name='' id='' />

      <label htmlFor=''>Calories</label>
      <input type='text' name='' id='' disabled />
    </form>
  );
}

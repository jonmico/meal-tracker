import './App.css';
import { styled } from 'styled-components';
import { useState } from 'react';

import { Button } from './components/StarterForm';

import StarterForm from './components/StarterForm';

const MainWrapper = styled.div`
  width: 75%;
  background-color: #393053;
  margin: auto;
  padding-bottom: 2rem;
  min-width: 600px;
`;
const Header = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  letter-spacing: 1.5px;
  margin: 0;
  padding: 2rem 0 0 1rem;
`;

const StartButton = styled(Button)`
  width: 200px;
  border-radius: 7.5px;
  padding: 20px 30px;
  margin: 2rem auto 1rem auto;
  display: block;
`;

type User = {
  id: string;
  userName: string;
  fat: number;
  carbs: number;
  protein: number;
  calories: number;
};

function App() {
  const [isStarterOpen, setIsStarterOpen] = useState(false);

  function handleCancelClick() {
    setIsStarterOpen(false);
  }

  return (
    <MainWrapper>
      <Header>Meal Tracker</Header>

      {isStarterOpen ? (
        <StarterForm onCancel={handleCancelClick} />
      ) : (
        <StartButton onClick={() => setIsStarterOpen(true)}>
          Click me to get started!
        </StartButton>
      )}
    </MainWrapper>
  );
}

export default App;

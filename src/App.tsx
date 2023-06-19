import './App.css';
import { styled } from 'styled-components';
import { useState } from 'react';
import { User } from './types';

import StartButton from './components//buttons/StartButton';

import StarterForm from './components/StarterForm';
import UserScreen from './components/UserScreen';

const MainWrapper = styled.div`
  width: 75%;
  background-color: #393053;
  margin: 2rem auto;
  padding-bottom: 2rem;
  min-width: 950px;
  border-radius: 10px;
`;
const Header = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  letter-spacing: 1.5px;
  margin: 0;
  padding: 2rem 0 0 1rem;
`;

function App() {
  const [isStarterOpen, setIsStarterOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  return (
    <MainWrapper>
      <Header>Meal Tracker</Header>

      {user === null &&
        (isStarterOpen ? (
          <StarterForm setUser={setUser} setIsStarterOpen={setIsStarterOpen} />
        ) : (
          <StartButton onClick={() => setIsStarterOpen(true)}>
            Click me to get started!
          </StartButton>
        ))}

      {user !== null && <UserScreen user={user} />}
    </MainWrapper>
  );
}

export default App;

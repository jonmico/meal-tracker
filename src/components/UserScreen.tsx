import { User } from '../types';
import { styled } from 'styled-components';

import MacroDisplay from './MacroDisplay';

const MainScreenWrapper = styled.div`
  padding: 2rem;
`;

interface UserScreenProps {
  user: User;
}

export default function UserScreen({ user }: UserScreenProps) {
  const { userName, fat, carbs, protein, calories } = user;
  return (
    <MainScreenWrapper>
      <h2>Helllooooo, {userName}!</h2>

      <MacroDisplay user={user} />
    </MainScreenWrapper>
  );
}

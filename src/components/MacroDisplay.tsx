import { styled } from 'styled-components';
import { User } from '../types';

import MacroTitles from './MacroTitles';
import MacroTotals from './MacroTotals';
import MacroConsumed from './MacroConsumed';
import MacroRemaining from './MacroRemaining';

const MacroDisplayWrapper = styled.div`
  width: 75%;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  column-gap: 20px;
  text-align: center;
  padding: 0 2rem;
`;

interface MacroDisplayProps {
  user: User;
}

export default function MacroDisplay({ user }: MacroDisplayProps) {
  return (
    <div>
      <h3>Here is a look at today:</h3>
      <MacroDisplayWrapper>
        <MacroTitles />
        <MacroTotals user={user} />
        <MacroConsumed />
        <MacroRemaining />
      </MacroDisplayWrapper>
    </div>
  );
}

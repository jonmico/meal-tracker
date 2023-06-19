import { Macros, User } from '../types';
import MacroNumber from './styled-components/MacroNumber';
import { styled } from 'styled-components';

const MacroNumberRemain = styled(MacroNumber)<MacroNumberRemainProps>`
  color: ${(props) => (props.$remainMacro > 0 ? '#00DFA2' : '#FF0060')};
`;

interface MacroNumberRemainProps {
  $remainMacro: number;
}

interface MacroRemainingProps {
  macros: Macros;
  user: User;
}

export default function MacroRemaining({ macros, user }: MacroRemainingProps) {
  const { calories, fat, carbs, protein } = macros;
  const remainCals = user.calories - calories;
  const remainCarbs = user.carbs - carbs;
  const remainFat = user.fat - fat;
  const remainPro = user.protein - protein;

  return (
    <>
      <h4>Remaining</h4>
      <MacroNumberRemain $remainMacro={remainFat}>
        {remainFat}
      </MacroNumberRemain>
      <MacroNumberRemain $remainMacro={remainCarbs}>
        {remainCarbs}
      </MacroNumberRemain>
      <MacroNumberRemain $remainMacro={remainPro}>
        {remainPro}
      </MacroNumberRemain>
      <MacroNumberRemain $remainMacro={remainCals}>
        {remainCals}
      </MacroNumberRemain>
    </>
  );
}

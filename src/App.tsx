import './App.css';
import { styled } from 'styled-components';

import StarterForm from './components/StarterForm';

const MainWrapper = styled.div`
  width: 75%;
  background-color: #393053;
  margin: auto;
`;
const Header = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  letter-spacing: 1.5px;
  margin: 0;
  padding: 2rem 0 0 1rem;
`;

function App() {
  return (
    <MainWrapper>
      <Header>Meal Tracker</Header>
      <StarterForm />
    </MainWrapper>
  );
}

export default App;

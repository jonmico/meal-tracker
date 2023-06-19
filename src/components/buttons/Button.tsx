import { styled } from 'styled-components';

const Button = styled.button`
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

export default Button;

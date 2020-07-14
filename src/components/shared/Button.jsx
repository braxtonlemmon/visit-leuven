import styled from 'styled-components';

// Button component used for sign up and login in various nav components
const Button = styled.button`
  text-transform: uppercase;
  background: ${(props) => props.theme.colors.light};
  color: ${(props) => props.theme.colors.dark};
  font-weight: bold;
  border: none;
  border-radius: 4px;
  padding: 10px 19px;
  outline: none;
  cursor: pointer;
`;

export default Button;
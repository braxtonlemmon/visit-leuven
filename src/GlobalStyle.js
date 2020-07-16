import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body, html { 
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
    font-family: 'Viga', sans-serif;
    margin: 0;
    padding: 0;
    background: ${props => props.theme.colors.light};
  }

  * {
    box-sizing: border-box;
    user-select: none;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: black;
  }

  button,
  select,
  div,
  a {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }
`;

export default GlobalStyle;
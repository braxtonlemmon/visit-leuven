import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body, html { 
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
    font-family: 'Viga', sans-serif;
  }

  * {
    box-sizing: border-box;
    user-select: none;
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
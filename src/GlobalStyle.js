import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body, html { 
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
  }

  * {
    box-sizing: border-box;
    user-select: none;
  }

  a {
    text-decoration: none;
    color: black;
  }
`;

export default GlobalStyle;
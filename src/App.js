import React from 'react';
import styled from 'styled-components';
import { Reset } from 'styled-reset';
import GlobalStyle from './GlobalStyle';
import Main from './components/Main';
import Theme from './components/Theme';
import Palette from './components/Palette';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;


function App() {
  
  return (
    <Theme>
      <Wrapper id="content">
        <Reset />
        <GlobalStyle />
        <Palette>
          <li id="red">red</li>
          <li id="dark">dark</li>
          <li id="light">light</li>
          <li id="pale">pale</li>
          <li id="pop">pop</li>
          <li id="green">green</li>
        </Palette>
        <Main />
      </Wrapper>
    </Theme>
  );
}

export default App;

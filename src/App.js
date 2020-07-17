import React from 'react';
import styled from 'styled-components';
import { Reset } from 'styled-reset';
import GlobalStyle from './GlobalStyle';
import Main from './components/Main';
import Theme from './components/Theme';

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
        <Main />
      </Wrapper>
    </Theme>
  );
}

export default App;

import React from 'react';
import styled from 'styled-components';
import { Reset } from 'styled-reset';
import GlobalStyle from './GlobalStyle';
import Main from './components/Main';


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <Wrapper>
      <Reset />
      <GlobalStyle />
      <Main />
    </Wrapper>
  );
}

export default App;

import React, { useState } from 'react';
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
  const [viewMenu, setViewMenu] = useState(false);

  const handleMenuClick = () => {
    viewMenu ? setViewMenu(false) : setViewMenu(true);
  }; 

  return (
    <Theme>
      <Wrapper id="content" onClick={handleMenuClick} >
        <Reset />
        <GlobalStyle />
        <Main 
          handleMenuClick={handleMenuClick} 
          viewMenu={viewMenu} 
        />
      </Wrapper>
    </Theme>
  );
}

export default App;

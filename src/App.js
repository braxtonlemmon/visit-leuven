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

const Palette = styled.ul`
  z-index: 999;
  position: fixed;
  bottom: 10px;
  right: 10px;
  width: 500px;
  height: 50px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  li {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #red {
    background: ${(props) => props.theme.colors.red};
    color: ${(props) => props.theme.colors.light};
  }
  #dark {
    background: ${(props) => props.theme.colors.dark};
    color: ${(props) => props.theme.colors.light};
  }
  #light {
    background: ${(props) => props.theme.colors.light};
  }
  #pale {
    background: ${(props) => props.theme.colors.pale};
  }
  #pop {
    background: ${(props) => props.theme.colors.pop};
  }
  #green {
    background: ${(props) => props.theme.colors.green};
  }
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

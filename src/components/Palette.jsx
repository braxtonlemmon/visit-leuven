import styled from 'styled-components';

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

export default Palette;
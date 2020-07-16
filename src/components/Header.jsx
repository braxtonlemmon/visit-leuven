import React from 'react';
import styled from 'styled-components';
import { Responsive, Segment } from 'semantic-ui-react';
import MainNav from './MainNav';
import ProductNav from './ProductNav';
import MobileNav from './MobileNav';

const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: fixed;
  z-index: 100;
`;

function Header(props) {

  return (
    <Wrapper id="header" viewMenu={props.viewMenu} >
      <Responsive as={Segment} minWidth={780}>
        <ProductNav isHeroVisible={props.isHeroVisible} />
        <MainNav isHeroVisible={props.isHeroVisible} />
      </Responsive>
      <Responsive as={Segment} maxWidth={780}>
        <MobileNav 
          handleMenuClick={props.handleMenuClick}
          viewMenu={props.viewMenu}
        />
      </Responsive>
    </Wrapper>
  )
}

export default Header;
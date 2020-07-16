import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import wrapper from './shared/Wrapper';
import BikeLogo from './BikeLogo';

const Wrapper = styled(wrapper)`
  position: relative;
  width: 100%;
  padding: 15px 23px 15px 40px;
  background: ${props => props.theme.colors.pop};
  height: 70px;
  padding-right: ${props => props.viewMenu ? `${props.width}px` : '0'};
`;

const MenuButton = styled.div`
  position: absolute;
  left: 18px;
  height: 28px;
  width: 28px;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  align-items: center;
  cursor: pointer;
  .icon {
    display: inline-block;
    .line1,
    .line2,
    .line3 {
      margin: 6px 0;
      height: 2px;
      width: 35px;
      background: rgba(46, 49, 52, 0.8);
      transition: transform 0.4s ease;
    }
    .line1 {
      transform-origin: top left;
    }
    .line3 {
      transform-origin: bottom left;
    }
    .view.line1 {
      transform: rotate(28deg);
    }
    .view.line2 {
      opacity: 0;
    }
    .view.line3 {
      transform: rotate(-28deg);
    }
  }
`;

const Logo = styled.img``;

function MobileNav(props) {
  const getScrollbarWidth = () => {
    const scrollbox = document.createElement('div');
    scrollbox.style.overflow = 'scroll';
    document.body.appendChild(scrollbox);
    const width = scrollbox.offsetWidth - scrollbox.clientWidth;
    document.body.removeChild(scrollbox);
    return width;
  }
  const width = getScrollbarWidth();

  return (
    <Wrapper viewMenu={props.viewMenu} width={width}>
      <MenuButton
        onClick={() => props.handleMenuClick()}
        viewMenu={props.viewMenu}
      >
        <div className="icon">
          <div className={props.viewMenu ? "line1 view" : "line1"}></div>
          <div className={props.viewMenu ? "line2 view" : "line2"}></div>
          <div className={props.viewMenu ? "line3 view" : "line3"}></div>
        </div>
      </MenuButton>
      <BikeLogo />
    </Wrapper>
  );
}

export default MobileNav;

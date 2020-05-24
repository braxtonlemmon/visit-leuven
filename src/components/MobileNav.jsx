import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 15px 23px 15px 40px;
  background: #fff;
  border-bottom: 1px solid #d5d6d6;
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

    .view.line1 {
      -webkit-transform: rotate(-45deg) translate(-9px, 6px);
      transform: rotate(-45deg) translate(-9px, 6px);
    }

    .view.line2 {
      opacity: 0;
    }

    .view.line3 {
      -webkit-transform: rotate(45deg) translate(-4px, -8px);
      transform: rotate(45deg) translate(-4px, -8px);
    }
  }
`;

const Logo = styled.img``;

function MobileNav(props) {
  return (
    <Wrapper>
      <MenuButton
        onClick={() => props.handleMenuClick()}
        viewMenu={props.viewMenu}
      >
        <div className="icon">
          <div className={props.viewMenu ? 'line1 view' : 'line1'}></div>
          <div className={props.viewMenu ? 'line2 view' : 'line2'}></div>
          <div className={props.viewMenu ? 'line3 view' : 'line3'}></div>
        </div>
      </MenuButton>
      <Link to="#">
        <Logo src={`${process.env.PUBLIC_URL}/img/Group 13 Copy.png`} alt="" />
      </Link>
    </Wrapper>
  );
}

export default MobileNav;

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
    background: yellow;
    width: 28px;
    height: 28px;
    position: relative;
    transform: rotate(0deg);
    transition: transform 0.5s ease-in-out;
  }
  .icon span {
    display: block;
    position: absolute;
    height: 2px;
    width: 100%;
    background: rgba(46, 49, 52, 0.8);
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: transform 1s ease-in-out;
    will-change: transform;
  }
  .icon span:nth-child(1) {
    top: 4px;
    transform-origin: left center;
    ${props => {
      if (props.viewMenu) {
        return `
          transform: rotate(45deg);
          // top: -3px;
          // left: 8px;
        `;
      }
    }}
  }
  .icon span:nth-child(2) {
    top: 12px;
    transform-origin: left center;
    ${props => {
      if (props.viewMenu) {
        return `
          width: 0%;
          opacity: 0%;
        `;
      }
    }}
  }
  .icon span:nth-child(3) {
    top: 20px;
    transform-origin: left center;
    ${props => {
      if (props.viewMenu) {
        return `
          transform: rotate(-45deg);
        `;
      }
    }}
  }
`;

const Line = styled.div`
  height: 2px;
  width: 100%;
  background-color: rgba(46, 49, 52, 0.8);
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
          <span></span>
          <span></span>
          <span></span>
        </div>
      </MenuButton>
      <Link to="#">
        <Logo src={`${process.env.PUBLIC_URL}/img/Group 13 Copy.png`} alt="" />
      </Link>
    </Wrapper>
  );
}

export default MobileNav;

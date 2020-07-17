import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from './shared/Button'; 

const Wrapper = styled.div`
  position: fixed;
  top: 65px;
  bottom: 0;
  left: 0;
  right: 0;
  margin-bottom: 20px;
  padding-bottom: 50px;
  background: ${props => props.theme.colors.light};
  z-index: 50;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  overflow-y: hidden;
  height: 100%;
  transition: transform 300ms ease-in-out;
  transform: ${props => props.viewMenu ? 'translateX(30%)' : 'translateX(120%)'};
  box-shadow: 0 0 8px ${props => props.theme.colors.dark};
`;

const NavList = styled.ul`
  width: 100%;
  margin: 20px 0;
  #product-0 {
    border-top: 2px solid #d5d6d6;
  }
  #site-item-0 {
    border-top: 1px solid black;
  }
`;

const ProductItem = styled.li`
  display: flex;
  width: 100%;
  justify-content: flex-star;
  font-size: 14px;
  font-weight: 500;
  border-bottom: 2px solid #d5d6d6;
  padding: 20px;
  text-transform: uppercase;
  &:hover {
    color: rgba(46, 49, 52);
  }
`;

const SiteItem = styled.li`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  font-weight: 400;
  border-bottom: 1px solid black;
  padding: 20px;
  &:hover {
    color: rgba(0,0,0,0.8);
  }
`;

const Buttons = styled.div`
  align-self: flex-start;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: end;
  gap: 20px;
  margin: 10px 20px;
`;

const Action = styled(Button)`
  background: ${props => props.theme.colors.pale};
  color: ${props => props.theme.colors.dark};
  box-shadow: 0 1px 2px 0 rgba(45, 45, 45, 0.5);
`;

function MobileMenu({ viewMenu }) {
  return (
    <Wrapper viewMenu={viewMenu}>
      <NavList>
        <Link to="#">
          <SiteItem id="site-item-0">City</SiteItem>
        </Link>
        <Link to="#">
          <SiteItem>Nature</SiteItem>
        </Link>
        <Link to="#">
          <SiteItem>Eat & Drink</SiteItem>
        </Link>
        <Link to="#">
          <SiteItem>Entertainment</SiteItem>
        </Link>
      </NavList>
      <NavList>
        <Link to="#">
          <ProductItem id="product-0">About</ProductItem>
        </Link>
        <Link to="#">
          <ProductItem>Contact</ProductItem>
        </Link>
        <Link to="#">
          <ProductItem>Careers</ProductItem>
        </Link>
      </NavList>
      <Buttons>
        <Link to="#">
          <Action>Sign Up</Action>
        </Link>
        <Link to="#">
          <Action>Log In</Action>
        </Link>
      </Buttons>
    </Wrapper>
  )
}

export default MobileMenu;
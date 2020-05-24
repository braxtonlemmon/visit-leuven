import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from './shared/Button'; 

const Wrapper = styled.div`
  position: fixed;
  top: 48px;
  bottom: 0;
  left: 0;
  right: 0;
  margin-bottom: 20px;
  background: #FFF;
  z-index: 150;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  overflow-y: hidden;
  height: 100vh;
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
  font-weight: 400;
  border-bottom: 1px solid black;
  padding: 20px;
  &:hover {
    color: rgba(0,0,0,0.8);
  }
`;

const Buttons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  gap: 20px;
  margin: 10px 20px;
`;

const SignUp = styled(Button)`
  box-shadow: 0 1px 2px 0 rgba(45, 45, 45, 0.5);
  &:hover {
    transform: scale(1.02);
  }
`;

const LogIn = styled(Button)`
  background: #969799;
  box-shadow: 0 1px 2px 0 rgba(45, 45, 45, 0.5);
  &:hover {
    transform: scale(1.02);
  }
`;

function MobileMenu() {
  return (
    <Wrapper>
      <NavList>
        <Link to="#">
          <ProductItem id="product-0">Blog</ProductItem>
        </Link>
        <Link to="#">
          <ProductItem>Nourish</ProductItem>
        </Link>
        <Link to="#">
          <ProductItem>Product</ProductItem>
        </Link>
      </NavList>
      <NavList>
        <Link to="#">
          <SiteItem id="site-item-0">Exercise</SiteItem>
        </Link>
        <Link to="#">
          <SiteItem>Nutrition</SiteItem>
        </Link>
        <Link to="#">
          <SiteItem>Activity</SiteItem>
        </Link>
        <Link to="#">
          <SiteItem>Sleep</SiteItem>
        </Link>
      </NavList>
      <Buttons>
        <Link to="#">
          <SignUp>Sign Up</SignUp>
        </Link>
        <Link to="#">
          <LogIn>Log In</LogIn>
        </Link>
      </Buttons>
    </Wrapper>
  )
}

export default MobileMenu;
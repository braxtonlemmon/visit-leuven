import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import Button from './shared/Button';
import BikeLogo from './BikeLogo';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 1.1em;
  padding: 25px 0;
  background: ${({theme}) => theme.colors.dark};
  box-shadow: 0 2px 2px rgba(0,0,0,0.4);
  transition: transform 150ms ease;
  transform: translateY(0);
  ${props => {
    if (props.isHeroVisible) {
      return `
        transform: translateY(0);
      `;
    } else {
      return `
        transform: translateY(-50px);
      `;
    }
  }}
`;

const NavLinks = styled.ul`
  display: flex;
`;

const NavLink = styled.li`
  text-transform: uppercase;
  /* margin: 29px 25px; */
  padding: 2px 0;
  color: ${props => props.theme.colors.light};
  margin: 0px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-decoration: underline solid transparent;
  transition: all 550ms ease;
  border-bottom: 1px solid transparent;
  border-top: 1px solid transparent;
  &:hover {
    border-bottom: 1px solid ${props => props.theme.colors.light}; 
    border-top: 1px solid ${props => props.theme.colors.light};
  }
`;

const SignUp = styled(Button)`
  padding: 10px 19px;
  position: absolute;
  right: 30px;
  &:hover {
    transform: scale(1.02);
  }
`;

function MainNav(props) {
  return (
    <Wrapper isHeroVisible={props.isHeroVisible}>
      <BikeLogo />
      <NavLinks>
        <Link to="#">
          <NavLink>City</NavLink>
        </Link>
        <Link to="#">
          <NavLink>Nature</NavLink>
        </Link>
        <Link to="#">
          <NavLink>Eat & Drink</NavLink>
        </Link>
        <Link to="#">
          <NavLink>Entertainment</NavLink>
        </Link>
      </NavLinks>
      <SignUp>Join</SignUp>
    </Wrapper>
  );
}

export default MainNav;






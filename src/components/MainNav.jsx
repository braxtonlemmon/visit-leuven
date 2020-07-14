import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import Button from './shared/Button';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 1.1em;
  padding-left: 40px;
  padding-right: 23px;
  padding: 16px 23px 16px 40px;
  color: ${props => props.theme.colors.dark};
  background: ${({theme}) => theme.colors.pop};
  /* border-bottom: 0.5px solid #d5d6d6; */
  /* border-top: 1px solid #d5d6d6; */
  transition: transform 550ms ease;
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

const MainIcon = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;

const Logo = styled.img`
  height: 40px;
`;

const MainIconText = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  justify-content: baseline;
  align-items: center;
  /* border: 1px solid black; */
  font-size: 1.3em;
`;

const NavLinks = styled.ul`
  display: flex;
`;

const NavLink = styled.li`
  text-transform: uppercase;
  /* margin: 29px 25px; */
  padding: 5px 10px;
  margin: 5px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: underline solid transparent;
  transition: border-bottom 550ms ease;
  border-bottom: 1px solid transparent;
  &:hover {
    border-bottom: 1px solid black; 
  }
`;

const SignUp = styled(Button)`
  padding: 10px 19px;
  box-shadow: 0 1px 2px 0 rgba(45, 45, 45, 0.5);
  &:hover {
    transform: scale(1.02);
  }
`;

function MainNav(props) {
  return (
    <Wrapper isHeroVisible={props.isHeroVisible}>
      <Link to="#">
        <MainIcon>
          <Logo src={`${process.env.PUBLIC_URL}/img/bike.svg`} alt="iFit logo" />
          <MainIconText>
            <p>Explore</p>
            <p>Leuven</p>
          </MainIconText>
        </MainIcon>
      </Link>
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






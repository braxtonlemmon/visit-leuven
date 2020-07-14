import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import Button from './shared/Button';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 14px;
  padding-left: 40px;
  padding-right: 23px;
  background: #fff;
  border-bottom: 0.5px solid #d5d6d6;
  border-top: 1px solid #d5d6d6;
  transition: transform 550ms ease;
  transform: translateY(0);
  ${props => {
    if (props.isHeroVisible) {
      return `
        transform: translateY(0);
      `;
    } else {
      return `
        transform: translateY(-48px);
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
  margin: 29px 25px;
  padding-bottom: 5px;
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
          <Logo src={`${process.env.PUBLIC_URL}/img/leuven-bike.svg`} alt="iFit logo" />
          <MainIconText>
            <p>Explore</p>
            <p>Leuven</p>
          </MainIconText>
        </MainIcon>
      </Link>
      <NavLinks>
        <Link to="#">
          <NavLink>Exercise</NavLink>
        </Link>
        <Link to="#">
          <NavLink>Nutrition</NavLink>
        </Link>
        <Link to="#">
          <NavLink>Activity</NavLink>
        </Link>
        <Link to="#">
          <NavLink>Sleep</NavLink>
        </Link>
      </NavLinks>
      <SignUp>Sign Up</SignUp>
    </Wrapper>
  );
}

export default MainNav;






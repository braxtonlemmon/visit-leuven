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
`;

const Logo = styled.div`

`;

const NavLinks = styled.ul`
  display: flex;
`;

const NavLink = styled.li`
  text-transform: uppercase;
  padding: 29px 25px;
`;

const SignUp = styled(Button)`
  padding: 10px 19px;
`;

function MainNav() {
  return (
    <Wrapper>
      <Logo>
        
      </Logo>
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






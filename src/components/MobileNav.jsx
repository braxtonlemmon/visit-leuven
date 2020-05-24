import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 15px 23px 15px 40px;
  background: #fff;
  border-bottom: 1px solid #d5d6d6;
`;

const Logo = styled.img``;

function MobileNav() {
  return (
    <Wrapper>
      <Link to="#">
        <Logo src={`${process.env.PUBLIC_URL}/img/Group 13 Copy.png`} alt="" />
      </Link>
    </Wrapper>
  );
}

export default MobileNav;

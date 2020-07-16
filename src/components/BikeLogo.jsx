import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MainIcon = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  &:hover > .bike {
    transform: translateX(15px);
  }
`;

const Logo = styled.img`
  height: 100%;
  transition: transform 400ms ease-in-out;
`;

const MainIconText = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  justify-content: baseline;
  align-items: center;
  /* border: 1px solid black; */
  font-size: 1.3em;
`;

function BikeLogo() {
  return (
    <Link to="#">
      <MainIcon>
        <Logo className="bike" src={`${process.env.PUBLIC_URL}/img/bike.svg`} alt="iFit logo" />
        <MainIconText>
          <p>Explore</p>
          <p>Leuven</p>
        </MainIconText>
      </MainIcon>
    </Link>

  )
}

export default BikeLogo;
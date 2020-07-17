import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MainIcon = styled.div`
  position: absolute;
  left: 30px;
  top: 10px;
  display: grid;
  color: ${props => props.theme.colors.light};
  height: 70%;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  &:hover > .bike {
    transform: translateX(15px);
  }
  #bike {
    height: 100%;
  }
`;

const Logo = styled.img`
  height: 100%;
  transition: transform 400ms ease-in-out;
  fill: white;
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
        <Logo className="bike" src={`${process.env.PUBLIC_URL}/img/light-bike.svg`} alt="iFit logo" />
        <MainIconText>
          <p>Explore</p>
          <p>Leuven</p>
        </MainIconText>
      </MainIcon>
    </Link>

  )
}

export default BikeLogo;
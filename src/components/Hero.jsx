import React from "react";
import styled from "styled-components";
import Button from './shared/Button';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  margin-top: 57px;
  @media (min-width: 780px) {
    margin-top: 126px;
  }
`;

const HeroImage = styled.img`
  width: 100%;
`;

const HeroContentContainer = styled.div`
  position: absolute;
  z-index: 5;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
`;

const HeroHeading = styled.h1`
  font-size: 2em;
  padding: 10px;
  line-height: 1.2em;
  color: #FFF;
  text-align: center;
  @media (min-width: 780px) {
    font-size: 3em;
  }
  @media (min-width: 1100px) {
    font-size: 4em;
  }
`;

const HeroButton = styled(Button)`
  padding: 15px 85px;
  margin-top: 48px;
  font-weight: 550;
  &:hover {
    background-color: rgba(90,78,189,1);
  }
`;

function Hero() {
  return (
    <Wrapper id="hero">
      <HeroImage src={process.env.PUBLIC_URL + '/img/gmapsinworkout.png'} alt="" />
      <HeroContentContainer>
        <HeroHeading>The best personal training, right in your own home</HeroHeading>
        <HeroButton>Join iFit Coach</HeroButton>
      </HeroContentContainer>
    </Wrapper>
  );
}

export default Hero;

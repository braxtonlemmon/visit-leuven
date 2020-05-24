import React from "react";
import styled, { keyframes } from "styled-components";
import FadeIn from './FadeIn';
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
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const HeroHeading = styled.h1`
  font-size: 2em;
  padding: 10px;
  line-height: 1.2em;
  color: #FFF;
  text-align: center;
  animation: ${fadeIn} 1s ease-in forwards;
  @media (min-width: 780px) {
    font-size: 3em;
  }
  @media (min-width: 1100px) {
    font-size: 4em;
  }
`;

const HeroButton = styled(Button)`
  padding: 15px 85px;
  margin-top: 28px;
  font-weight: 550;
  &:hover {
    background-color: rgba(90,78,189,1);
  }
`;

function Hero(props) {
  return (
    <Wrapper id="hero">
      <HeroImage src={process.env.PUBLIC_URL + '/img/hero.webp'} alt="" />
      <HeroContentContainer>
        <FadeIn>
          <HeroHeading isHeroVisible={props.isHeroVisible}>The best personal training, right in your own home</HeroHeading>
        </FadeIn>
        <HeroButton>Join iFit Coach</HeroButton>
      </HeroContentContainer>
    </Wrapper>
  );
}

export default Hero;

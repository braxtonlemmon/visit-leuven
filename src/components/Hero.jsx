import React from "react";
import styled, { keyframes } from "styled-components";
import FadeIn from './shared/FadeIn';
import Button from './shared/Button';
import wrapper from './shared/Wrapper';

const Wrapper = styled(wrapper)`
  width: 100%;
  position: relative;
  margin-top: 57px;
  @media (min-width: 780px) {
    margin-top: 122px;
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
  width: 75%;
  margin: 0 auto;
  font-size: 2em;
  padding: 10px;
  line-height: 1.2em;
  color: ${props => props.theme.colors.light};
  background: rgba(0,0,0,0.4);
  text-align: center;
  animation: ${fadeIn} 800ms ease-in forwards;
  @media (min-width: 780px) {
    font-size: 3em;
  }
  @media (min-width: 1100px) {
    font-size: 4em;
  }
`;

const HeroButton = styled(Button)`
  padding: 15px;
  margin-top: 28px;
  font-weight: 550;
`;

function Hero(props) {
  return (
    <Wrapper id="hero">
      <HeroImage src={process.env.PUBLIC_URL + '/img/city_hall.JPG'} alt="hero image" />
      <HeroContentContainer>
        <FadeIn>
          <HeroHeading isHeroVisible={props.isHeroVisible}>
            Experience the charm of an innovative city that breathes culture.
          </HeroHeading>
        </FadeIn>
        {/* <HeroButton>Join Explore Leuven</HeroButton> */}
      </HeroContentContainer>
    </Wrapper>
  );
}

export default Hero;

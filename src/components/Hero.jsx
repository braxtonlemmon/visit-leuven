import React from "react";
import styled from "styled-components";
import Button from './shared/Button';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
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

const HeroHeading = styled.h1`
  font-size: 72px;
  line-height: 90px;
  color: #FFF;
  text-align: center;
`;

const HeroButton = styled(Button)`
  padding: 10px 80px;
  margin-top: 48px;

`;

function Hero() {
  return (
    <Wrapper>
      <HeroImage src={process.env.PUBLIC_URL + '/img/gmapsinworkout.png'} alt="" />
      <HeroContentContainer>
        <HeroHeading>The best personal training, right in your own home</HeroHeading>
        <HeroButton>Join iFit Coach</HeroButton>
      </HeroContentContainer>
    </Wrapper>
  );
}

export default Hero;

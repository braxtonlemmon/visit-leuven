import React, { lazy, Suspense } from "react";
import styled, { keyframes } from "styled-components";
import FadeIn from './shared/FadeIn';
import wrapper from './shared/Wrapper';

const Wrapper = styled(wrapper)`
  width: 100%;
  height: 300px;
  position: relative;
  margin-top: 57px;
  overflow: hidden;
  @media (min-width: 600px) {
    height: 400px;
  }
  @media (min-width: 780px) {
    margin-top: 122px;
    height: 500px;
  }
  @media (min-width: 1000px) {
    height: 700px;
  }
  @media (min-width: 1200px) {
    height: 800px;
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
const MyImage = lazy(() => import('./HeroImage.jsx'));
const Placeholder = styled.div`
  height: 100%;
  width: 100%;
  background: lightgrey;
`;

function Hero(props) {
  const width = 500;
  const height = 500;
  return (
    <Wrapper id="hero">
      <Suspense fallback={<Placeholder></Placeholder>}>
        <MyImage />

      {/* <HeroImage
        // data-src={process.env.PUBLIC_URL + "/img/city_hall.JPG"}
        src={process.env.PUBLIC_URL + "/img/city_hall.JPG"}
        alt="hero image"
        /> */}
      </Suspense>

      <HeroContentContainer>
        <FadeIn>
          <HeroHeading isHeroVisible={props.isHeroVisible}>
            Experience the charm of an innovative city that breathes culture.
          </HeroHeading>
        </FadeIn>
      </HeroContentContainer>
    </Wrapper>
  );
}

export default Hero;

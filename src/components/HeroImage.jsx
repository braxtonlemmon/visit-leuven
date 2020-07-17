import React, { useRef } from 'react';
import styled from 'styled-components';

const Image = styled.img`
  width: 100%;
  height: auto;
`;

function HeroImage() {
  const heroImage = useRef(null);
  // const { width, height } = heroImage.current;

  return (
    <Image
      // data-src={process.env.PUBLIC_URL + '/img/city_hall.JPG'}  
    // src={`data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1200"%3E%3C/svg%3E`}
      src={process.env.PUBLIC_URL + "/img/city_hall.JPG"}
      alt="hero image"
      ref={heroImage}
    />
  );
}

export default HeroImage;
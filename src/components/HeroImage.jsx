import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  width: 100%;
  height: auto;
`;

function HeroImage() {
  return (
    <Image
      src={process.env.PUBLIC_URL + "/img/city_hall.JPG"}
      alt="hero image"
    />
  )
}

export default HeroImage;
import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

function FeaturedCardImage({ item }) {
  return (
    <Image src={item.imgUrl} alt={item.alt} />
  );
}

export default FeaturedCardImage;
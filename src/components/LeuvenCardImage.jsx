import React from "react";
import styled from "styled-components";

const Image = styled.img`
  border-radius: 50%;
  height: 100%;
  width: 100%;
  object-fit: cover;
  box-shadow: 0 0 9px rgba(0, 0, 0, 0.4);
`;

function LeuvenCardImage({ item }) {
  return (
    <Image
      className="leuven-image"
      src={item.imgUrl}
      alt={item.name}
    />
  );
}

export default LeuvenCardImage;

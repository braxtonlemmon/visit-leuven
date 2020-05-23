import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Hero() {
  return (
    <Wrapper>
      <h1>Hero</h1>
    </Wrapper>
  );
}

export default Hero;

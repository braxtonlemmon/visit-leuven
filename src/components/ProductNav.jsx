import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 50px;
  background: ${props => props.theme.colors.light};
  color: ${props => props.theme.colors.dark};
  transition: transform 150ms ease;
  transform: translateY(0);
  transform: ${props => props.isHeroVisible ? 'translateY(0)' : 'translateY(-%100)'};
  ${props => {
    if (props.isHeroVisible) {
      return `
        transform: translateY(0);
      `
    } else {
      return `
        transform: translateY(-100%);
      `
    }
  }}
  p {
    font-size: 2em;
    margin: 0 auto;
    letter-spacing: 14px;
    padding: 10px;
  }
`;

function ProductNav(props) {
  return (
    <Wrapper isHeroVisible={props.isHeroVisible}>
      <p>EXPLORE LEUVEN</p>
    </Wrapper>
  );
}

export default ProductNav;
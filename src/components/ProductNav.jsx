import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  background: #FFF;
  border-bottom: 1px solid #d5d6d6;
`;

const NavButtons = styled.ul`
  display: flex;
`;

const NavButton = styled.li`
  font-size: 14px;
  font-weight: 500;
  border-right: 2px solid #d5d6d6;
  padding: 16.5px 43px;
  color: rgba(46,49,52,0.8);
  text-transform: uppercase;
  &:hover {
    color: rgba(46, 49, 52);
  }
`;

function ProductNav() {
  return (
    <Wrapper>
      <NavButtons>
        <Link to="#">
          <NavButton>Blog</NavButton>
        </Link>
        <Link to="#">
          <NavButton>Nourish</NavButton>
        </Link>
        <Link to="#">
          <NavButton>Shop</NavButton>
        </Link>
      </NavButtons>
    </Wrapper>
  );
}

export default ProductNav;
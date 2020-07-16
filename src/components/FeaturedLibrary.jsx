import React from 'react';
import styled from 'styled-components';
import FeaturedCard from './FeaturedCard';
import DESKTOP_ITEMS from '../data/FeaturedData';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-bottom: 50px;
  max-width: 1300px;
`;

function FeaturedLibrary() {
  const getItems = () => {
    const FeaturedCards = [];
    DESKTOP_ITEMS.forEach(item => FeaturedCards.push(
      <FeaturedCard key={`card~${item.id}`} item={item} />
    ))
    return FeaturedCards;
  }
  
  return (
    <Wrapper>
      {getItems()}
    </Wrapper>
  )
}

export default FeaturedLibrary;
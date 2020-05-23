import React from 'react';
import styled from 'styled-components';
import DesktopCard from './DesktopCard';
import DESKTOP_ITEMS from '../data/DesktopData';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

function DesktopLibrary() {
  const getItems = () => {
    const desktopCards = [];
    DESKTOP_ITEMS.forEach(item => desktopCards.push(
      <DesktopCard key={`card~${item.id}`} item={item} />
    ))
    return desktopCards;
  }
  
  return (
    <Wrapper>
      {getItems()}
    </Wrapper>
  )
}

export default DesktopLibrary;
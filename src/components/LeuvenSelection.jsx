import React from "react";
import styled from "styled-components";
import LeuvenCard from './LeuvenCard';
import FadeIn from './shared/FadeIn';
import EQUIPMENT from '../data/LeuvenData';
import wrapper from './shared/Wrapper';

const Wrapper = styled(wrapper)`
  margin: 0 30px;
  width: 100%;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.h2`
  font-size: 24px;
  line-height: 28px;
  color: #34383C;
  text-align: center;
`;

function LeuvenSelection() {
  const getEquipment = () => {
    const equipment = [];
    EQUIPMENT.forEach(item => equipment.push(
      <FadeIn key={`equipment-fade~${item.id}`}>
        <LeuvenCard key={`equipment~${item.id}`} item={item} />
      </FadeIn>
    ))
    return equipment;
  }
  
  return (
    <Wrapper id="equip">
      <Heading>
        Ready to explore Leuven?
      </Heading>
      <CardWrapper>
        { getEquipment() }
      </CardWrapper>
    </Wrapper>
  );
}

export default LeuvenSelection;

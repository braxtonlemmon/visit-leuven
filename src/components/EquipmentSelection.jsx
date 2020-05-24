import React from "react";
import styled from "styled-components";
import EquipmentCard from './EquipmentCard';
import FadeIn from './shared/FadeIn';
import EQUIPMENT from '../data/EquipmentData';
import Wrapper from './shared/Wrapper';

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

function EquipmentSelection() {
  const getEquipment = () => {
    const equipment = [];
    EQUIPMENT.forEach(item => equipment.push(
      <FadeIn key={`equipment-fade~${item.id}`}>
        <EquipmentCard key={`equipment~${item.id}`} item={item} />
      </FadeIn>
    ))
    return equipment;
  }
  
  return (
    <Wrapper id="equip">
      <Heading>
        Interested in our exciting iFit-enabled equipment?
      </Heading>
      <CardWrapper>
        { getEquipment() }
      </CardWrapper>
    </Wrapper>
  );
}

export default EquipmentSelection;

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 330px;
  width: 330px;
  margin: 12px;
`;

const Image = styled.img`
  height: 258px;
`;

const Title = styled.h3`
  font-size: 24px;
  line-height: 28px;
  color: #2E3134;
  text-align: center;
`;

function EquipmentCard(props) {
  return (
    <Wrapper>
      <Link to='#'>
        <Image src={props.item.imgUrl} alt="" />
        <Title>{props.item.name}</Title> 
    </Link>
    </Wrapper>
  )
}

export default EquipmentCard;
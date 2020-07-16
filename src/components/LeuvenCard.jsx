import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import wrapper from './shared/Wrapper';

const Wrapper = styled(wrapper)`
  height: 330px;
  width: 330px;
  margin: 12px;
  &:hover {
    font-weight: 550;
  }
`;

const ImageHolder = styled.div`
  height: 260px;
  width: 260px;
`;

const Image = styled.img`
  border-radius: 35%;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Title = styled.h3`
  font-size: 24px;
  line-height: 28px;
  color: #2E3134;
  text-align: center;
`;

function LeuvenCard(props) {
  return (
    <Wrapper>
      <Link to='#'>
        <ImageHolder>
        <Image src={props.item.imgUrl} alt={props.item.name} />

        </ImageHolder>
        <Title>{props.item.name}</Title> 
    </Link>
    </Wrapper>
  )
}

export default LeuvenCard;
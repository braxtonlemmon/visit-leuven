import React from 'react';
import styled from 'styled-components';
import wrapper from './shared/Wrapper';

const Wrapper = styled(wrapper)`
  padding: 0 40px;
  height: 100%;
  width: 100%;
  border-radius: 15px;
  background: ${props => props.theme.colors.pale};
  color: ${props => props.theme.colors.dark};
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  margin-bottom: 16px;
`;

const LogoImage = styled.img`
`;

const ReviewText = styled.p`
  text-align: center;
  font-size: 1.6em;
  font-weight: lighter;
`;

function ReviewCard(props) {
  return (
    <Wrapper>
      <ReviewText>
        "{props.review.content}"
      </ReviewText>
    </Wrapper>
  )
}

export default ReviewCard;
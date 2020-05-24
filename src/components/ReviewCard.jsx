import React from 'react';
import styled from 'styled-components';
import wrapper from './shared/Wrapper';

const Wrapper = styled(wrapper)`
  padding: 0 40px;
  height: 100%;
  width: 100%;
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
`;

function ReviewCard(props) {
  return (
    <Wrapper>
      <LogoContainer>
        <LogoImage src={props.review.imgUrl} alt={`${props.review.author} logo`} />
      </LogoContainer>
      <ReviewText>
        "{props.review.content}"
      </ReviewText>
    </Wrapper>
  )
}

export default ReviewCard;
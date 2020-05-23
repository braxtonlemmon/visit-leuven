import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`;

const LogoContainer = styled.div`

  height: 24px;
  width: 100px;
`;

const LogoImage = styled.img`
  height: 24px;
  width: 100px;
`;

const ReviewText = styled.p`
  text-align: center;
`;

function ReviewCard(props) {

  return (
    <Wrapper>
      <LogoContainer>
        ok
        <LogoImage src={props.review.imgUrl} alt=""></LogoImage>
      </LogoContainer>
      <ReviewText>
        {props.review.content}
      </ReviewText>
    </Wrapper>
  )
}

export default ReviewCard;
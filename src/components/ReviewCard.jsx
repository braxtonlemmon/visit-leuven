import React from 'react';
import styled from 'styled-components';
import wrapper from './shared/Wrapper';

const Wrapper = styled(wrapper)`
  position: relative;
  padding: 0 30px;
  height: 100%;
  width: 100%;
  border-radius: 15px;
  background: ${props => props.theme.colors.light};
  color: ${props => props.theme.colors.dark};
  box-shadow: 0 0 8px rgba(0,0,0,0.3);
`;

const ReviewText = styled.p`
  text-align: center;
  font-size: 1.6em;
  font-weight: lighter;
`;

const Author = styled.p`
  position: absolute;
  bottom: 10px;
  right: 15px;
  font-style: italic;
`;
function ReviewCard(props) {
  return (
    <Wrapper>
      <ReviewText>
        "{props.review.content}"
      </ReviewText>
      <Author>
        {props.review.author}
      </Author>
    </Wrapper>
  )
}

export default ReviewCard;
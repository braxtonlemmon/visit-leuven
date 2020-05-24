import React, { useState } from "react";
import styled from "styled-components";
import ReviewCard from './ReviewCard';
import REVIEWS from '../data/ReviewData';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  gap: 12px;
  justify-content: center;
  align-items: center;
  padding-top: 24px;
  padding-bottom: 24px;
  width: 100%;
  background: #F4F5F7;
  overflow: hidden;
  p {
    text-align: center;
  }
`;

const Box = styled.div`
  background: #FFF;
  height: 184px;
  min-width: 320px;
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(46, 49, 52, 0.4);
  margin: 0 6px;
  @media (min-width: 1200px) {
    min-width: 480px;
  }
  transition: all 0.6s linear;
  transform: translateX(0);
  transform: scaleX(100%);
  ${props => {
    if (props.isGoingRight) {
      return `
        transform: translateX(0);
      `
    }
  }}

  ${props => {
    if (props.isGoingLeft) {
      return `
        transform: translateX(-100%);
      `;
    }
  }}
`;

const SlideButton = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  border: 2px solid #8B919E; 
  background: rgba(0,12,40,0.79);
  cursor: pointer;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    transform: scale(1.05);
  }
  z-index: 20;
`;

const LeftButton = styled(SlideButton)`
  left: 16px;
`

const RightButton = styled(SlideButton)`
  right: 16px;
`;

function ReviewSlider() {
  const [startIndex, setStartIndex] = useState(0);
  const [isGoingRight, setGoingRight] = useState(false);
  const [isGoingLeft, setGoingLeft] = useState(false);
  // Helper function to shift index based on direction and length of REVIEWS array
  const shiftIndex = (index, direction) => {
    if (direction === "left") {
      return index > 0 ? index - 1 : REVIEWS.length - 1;
    } else if (direction === "right") {
      return index < REVIEWS.length - 1 ? index + 1 : 0;
    }
  };

  const handleRight = () => {
    console.log('moving right');
    setStartIndex(shiftIndex(startIndex, 'right'));
    setGoingRight(true);
  }
  
  const handleRightOver = () => {
    console.log('doneright');
    setGoingRight(false);
  }
  
  const handleLeft = () => {
    setGoingLeft(true);
    setStartIndex(shiftIndex(startIndex, 'left'));
  }
  
  const handleLeftOver = () => {
    console.log('done left')
    setGoingLeft(false);
  }

  // Generates ReviewCard components based on shifted starting index
  const generateCards = (startIndex) => {
    const firstHalf = REVIEWS.slice(startIndex);
    const secondHalf = REVIEWS.slice(0, startIndex);
    const completeList = firstHalf.concat(secondHalf);
    const reviews = [];
    completeList.forEach(review => reviews.push(
      <Box 
        key={`review~${review.id}`}
        isGoingRight={isGoingRight}
        isGoingLeft={isGoingLeft}
      >
        <ReviewCard review={review} />
      </Box>
    ));
    return reviews;
  }

  return (
    <Wrapper>
      <LeftButton onMouseDown={() => handleLeft()} onMouseUp={() => handleLeftOver()}>
        <img src={`${process.env.PUBLIC_URL}/icons/chevron_left.png`} alt="left icon" />
      </LeftButton>
      <RightButton onMouseDown={() => handleRight()} onMouseUp={() => handleRightOver()}>
        <img src={`${process.env.PUBLIC_URL}/icons/chevron_right.png`} alt="right icon" />
      </RightButton>
      {generateCards(startIndex)}
    </Wrapper>
  );
}

export default ReviewSlider;

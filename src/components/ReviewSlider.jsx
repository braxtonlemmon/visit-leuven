import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Responsive, Segment } from 'semantic-ui-react';

import ReviewCard from './ReviewCard';
import REVIEWS from '../data/ReviewData';

const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 12px 1fr 12px;
  /* grid-template-columns: 12px 1fr 1fr 1fr 12px; */
  gap: 12px;
  justify-content: center;
  align-items: center;
  padding-top: 24px;
  padding-bottom: 24px;
  width: 100%;
  background: #F4F5F7;
  p {
    text-align: center;
  }
  @media (min-width: 780px) {
    grid-template-columns: 12px 1fr 1fr 12px;
  }
  @media (min-width: 1200px) {
    grid-template-columns: 12px 1fr 1fr 1fr 12px;
  }
`;

const Box = styled.div`
  background: #FFF;
  height: 184px;
  width: 100%;
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(46, 49, 52, 0.4);
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
`;

const LeftButton = styled(SlideButton)`
  left: 16px;
`

const RightButton = styled(SlideButton)`
  right: 16px;
`;

function ReviewSlider() {
  const [reviews, setReviews] = useState({
    prev: REVIEWS.length - 1,
    A: 0,
    B: 1,
    C: 2,
    next: 1
  });

  // useEffect(() => {
  //   const max = REVIEWS.length - 1;
  //   const currentReviews = [];

  //   // if 2 less than max, 3 consecutive indices
  //   if (max - reviewIndex >= 2) {
  //     for (let i = reviewIndex; i < 3; i++) {
  //       currentReviews.push(REVIEWS[i]);
  //     }
  //   // if 1 less than max, 2 consecutive and 0
  //   } else if (max - reviewIndex === 1) {
  //     currentReviews.push(REVIEWS[reviewIndex]);
  //     currentReviews.push(REVIEWS[reviewIndex + 1]);
  //     currentReviews.push(REVIEWS[0]);
  //   // if max, max and 0 1
  //   } else if (reviewIndex === max) {
  //     currentReviews.push(REVIEWS[reviewIndex]);
  //     currentReviews.push(REVIEWS[0]);
  //     currentReviews.push(REVIEWS[1]);
  //   }
  //   setReviews(currentReviews);
  // }, [reviewIndex])

  // useEffect(() => {
  //   const currentReviews = [];
  //   const indices = [0, 1, 2];
  //   indices.forEach(index => currentReviews.push(REVIEWS[index]));
    
  // })
  // reviews.forEach(review => reviews.push(
  //     <ReviewCard key={`review~${review.id}`} review={review} />
  //   ));
  
  // Helper function to shift index based on direction and length of REVIEWS array
  
  const shiftIndex = (index, direction) => {
    if (direction === 'left') {
      return index > 0 ? index - 1 : REVIEWS.length - 1;
    } 
    else if (direction === 'right') {
      return index < REVIEWS.length - 1 ? index + 1 : 0;
    }
  }
  
  return (
    <Wrapper>
      <LeftButton>
        <img src={`${process.env.PUBLIC_URL}/icons/chevron_left.png`} alt="" />
      </LeftButton>
      <RightButton>
        <img src={`${process.env.PUBLIC_URL}/icons/chevron_right.png`} alt="" />
      </RightButton>

      <Box></Box>
      <Box><ReviewCard review={REVIEWS[reviews.A]} /></Box>
      <Responsive as={Segment} minWidth={780}>
        <Box><ReviewCard review={REVIEWS[reviews.B]} /></Box>
      </Responsive>
      <Responsive as={Segment} minWidth={1200}>
        <Box><ReviewCard review={REVIEWS[reviews.C]} /></Box>
      </Responsive>
      <Box></Box>
    </Wrapper>
  );
}

export default ReviewSlider;

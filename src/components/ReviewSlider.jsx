import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ReviewCard from './ReviewCard';
import REVIEWS from '../data/ReviewData';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 100%;
  background: pink;
`;

function ReviewSlider() {
  const [reviews, setReviews] = useState([]);
  const [reviewIndex, setReviewIndex] = useState(0);

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

  
  return (
    <Wrapper>
      reviews
    </Wrapper>
  );
}

export default ReviewSlider;

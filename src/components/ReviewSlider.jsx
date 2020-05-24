import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ReviewCard from "./ReviewCard";
import REVIEWS from "../data/ReviewData";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  gap: 12px;
  justify-content: center;
  align-items: center;
  padding-top: 24px;
  padding-bottom: 24px;
  width: 100%;
  background: #f4f5f7;
  overflow: hidden;
  p {
    text-align: center;
  }
`;

const Box = styled.div`
  background: #fff;
  height: 184px;
  min-width: 320px;
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(46, 49, 52, 0.4);
  margin: 0 6px;
  @media (min-width: 780px) {
    min-width: 400px;
  }
  @media (min-width: 1200px) {
    min-width: 480px;
  }
`;

const SlideButton = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  border: 2px solid #8b919e;
  background: rgba(0, 12, 40, 0.79);
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
`;

const RightButton = styled(SlideButton)`
  right: 16px;
`;

function ReviewSlider() {
  const [startIndex, setStartIndex] = useState(0);
  const [cards, setCards] = useState();
  
  // Helper function to shift index based on direction and length of REVIEWS array
  const shiftIndex = (index, direction) => {
    if (direction === "left") {
      return index > 0 ? index - 1 : REVIEWS.length - 1;
    } else if (direction === "right") {
      return index < REVIEWS.length - 1 ? index + 1 : 0;
    }
  };

  const handleRightClick = () => {
    const index = shiftIndex(startIndex, 'right');
    setStartIndex(index);
  }

  const handleLeftClick = () => {
    const index = shiftIndex(startIndex, 'left');
    setStartIndex(index);
  }

  // Generates ReviewCard components based on shifted starting index
  const generateCards = (startIndex) => {
    const firstHalf = REVIEWS.slice(startIndex);
    const secondHalf = REVIEWS.slice(0, startIndex);
    const completeList = firstHalf.concat(secondHalf);
    console.log(completeList);
    const reviews = [];
    completeList.forEach((review) =>
      reviews.push(
        <Box
          key={`review~${review.id}`}
        >
          <ReviewCard 
            key={`reviewcard~${review.id}`}
            review={review} />
        </Box>
      )
    );
    return reviews;
  };

  useEffect(() => {
    const theCards = generateCards(startIndex);
    setCards(theCards);
  }, [startIndex])

  return (
    <Wrapper>
      <LeftButton
        onClick={() => handleLeftClick()}
      >
        <img
          src={`${process.env.PUBLIC_URL}/icons/chevron_left.png`}
          alt="left icon"
        />
      </LeftButton>
      <RightButton
        onClick={() => handleRightClick()}
      >
        <img
          src={`${process.env.PUBLIC_URL}/icons/chevron_right.png`}
          alt="right icon"
        />
      </RightButton>
      {cards}
    </Wrapper>
  );
}

export default ReviewSlider;


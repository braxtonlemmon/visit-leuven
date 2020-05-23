import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1.16fr 1fr;
  height: 280px;
  width: 288px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);  
  border-radius: 4px;
`;

const ImageBox = styled.div`
  width: 100%;
  height: 164px;
`;

const InfoBox = styled.div`
  width: 100%;
  display: flex;
  padding: 16px;
  justify-content: space-between;
  align-content: flex-start;
`;

const InfoText = styled.div`
  display: flex;
  flex-direction: column;
`;

const Thumbnail = styled.img`
  height: 28px;
  width: 28px;
`;

function DesktopCard() {
  return (
    <Wrapper>
      <ImageBox></ImageBox>
      <InfoBox>
        <InfoText>
          <h3>title</h3>
          <div className="statistic-box">
            <p>time</p>
            <p>distance</p>
          </div>
          <p>view details</p>
        </InfoText>
        <Thumbnail></Thumbnail>
      </InfoBox>
    </Wrapper>
  )
}

export default DesktopCard;
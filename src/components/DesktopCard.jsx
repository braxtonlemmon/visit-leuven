import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1.16fr 1fr;
  height: 280px;
  width: 288px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);  
  border-radius: 4px;
  margin: 8px;
`;

const ImageBox = styled.div`
  width: 100%;
  height: 164px;
  position: relative;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

const WorkoutLayer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 112px;
  background: rgba(0,12,40,0.53);
  border-top-right-radius: 4px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .number {
    font-size: 28px;
    margin-bottom: 8px;
  }
  .workouts {
    text-transform: uppercase;
    font-size: 10px;
    margin-bottom: 8px;
  }
  .videos {
    border: 1px solid white;
    height: 24px;
    width: 24px;
  }
`;

const InfoBox = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 4fr 1fr;
  padding: 16px;
  justify-content: space-between;
  align-content: flex-start;
`;

const InfoText = styled.div`
  display: flex;
  flex-direction: column;
  &>* {
    margin-bottom: 12px;
  }
  .statistic-box {
    display: flex;
    line-height: 12px;
    font-size: 10px;
  }
  h3 {
    font-size: 16px;
    letter-spacing: 0.3;
    line-height: 18px;
  }
  .stat-icon {
    height: 12px;
    width: 12px;
    margin-right: 4px;
  }
  p {
    margin-right: 8px;
  }
  /* p {
    line-height: 16px;
    font-size: 14px;
    text-transform: uppercase;
    color: #0069D2;
    letter-spacing: 0.5;
  } */
`;

const Thumbnail = styled.img`
  height: 28px;
  width: 28px;
  align-self: baseline;
  justify-self: end; 
  border-radius: 4px;
`;

function DesktopCard(props) {
  return (
    <Wrapper>
      <ImageBox>
        <Image src={props.item.imgUrl} alt="" />
        {
          props.item.workouts &&
          <WorkoutLayer>
            <p className="number">{props.item.workouts}</p>
            <p className="workouts">Workouts</p>
            <img src={`${process.env.PUBLIC_URL}/icons/icn_playlist copy 3.png`} alt=""/>
          </WorkoutLayer>
        }
      </ImageBox>
      <InfoBox>
        <InfoText>
          <h3>{props.item.title}</h3>
          <div className="statistic-box">
            {props.item.time && 
              <>
                <img className="stat-icon" src={`${process.env.PUBLIC_URL}/icons/icn_timer_line.png`} alt="" />
                <p>{props.item.time}</p>
              </>  
            }
            {props.item.amount &&
             <>
               <img className="stat-icon" src={`${process.env.PUBLIC_URL}/icons/icn_distance_line.png`} alt="" />
               <p>{props.item.amount}</p>
             </>
            }       
          </div>
        </InfoText>
        <Thumbnail src={props.item.thumbUrl} />
      </InfoBox>
    </Wrapper>
  )
}

export default DesktopCard;
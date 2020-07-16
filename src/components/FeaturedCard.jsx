import React from 'react';
import styled from 'styled-components';

// const Wrapper = styled.div`
//   display: grid;
//   grid-template-rows: 1.16fr 1fr;
//   height: 280px;
//   width: 288px;
//   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.35);  
//   border-radius: 4px;
//   margin: 8px;
//   cursor: pointer;
//   background: ${props => props.theme.colors.pale};
//   background: rgba(255,255,255,0.5);
//   transition: box-shadow 0.5s ease;
//   &:hover {
//     transform: translateY(-0.6px);
//     box-shadow: 2px 5px 4px rgba(0, 0, 0, 0.33), -2px 5px 4px rgba(0, 0, 0, 0.33);
//   }
// `;

const Wrapper = styled.div`
  position: relative;
  height: 280px;
  width: 288px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.35);  
  border-radius: 4px;
  margin: 15px;
  cursor: pointer;
  background: ${props => props.theme.colors.pale};
  background: rgba(255,255,255,0.5);
  transition: box-shadow 0.5s ease;
  &:hover {
    transform: translateY(-0.6px);
    box-shadow: 2px 5px 4px rgba(0, 0, 0, 0.33), -2px 5px 4px rgba(0, 0, 0, 0.33);
  }
  h3 {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    padding: 15px 5px;
    width: 100%;
    text-align: center;
    font-size: 2em;
    background: rgba(0,0,0,0.35);
    color: ${props => props.theme.colors.light};
  }

`;

const ImageBox = styled.div`
  width: 100%;
  height: 164px;
  position: relative;
`;

// const Image = styled.img`
//   height: 100%;
//   width: 100%;
//   object-fit: cover;
//   object-position: center;
//   border-top-left-radius: 4px;
//   border-top-right-radius: 4px;
// `;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;



const InfoBox = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  padding: 16px;
  justify-content: center;
  align-content: center;
  h3 {
    margin: 0 auto;
    width: 60%;
    text-align: center;
    font-size: 2em;
  }
`;

function FeaturedCard(props) {
  return (
    <Wrapper>
      <Image src={props.item.imgUrl} alt={props.item.alt} />
      <h3>{props.item.title}</h3>
    </Wrapper>
  )
  // return (
  //   <Wrapper>
  //     <ImageBox>
  //       <Image src={props.item.imgUrl} alt={props.item.alt} />
  //     </ImageBox>
  //     <InfoBox>
  //       <h3>{props.item.title}</h3>
  //     </InfoBox>
  //   </Wrapper>
  // )
}

export default FeaturedCard;
import React, { lazy, Suspense} from 'react';
import styled, {keyframes} from 'styled-components';
import { Link } from 'react-router-dom';
import wrapper from './shared/Wrapper';
const LeuvenCardImage = lazy(() => import('./LeuvenCardImage')); 

const wobble = keyframes`
  0% { transform: rotate(0deg)}
  33% {transform: rotate(3deg)}
  66% {transform: rotate(-3deg)}
  100% {transform: rotate(0deg)}
`;

const Wrapper = styled(wrapper)`
  height: 330px;
  width: 330px;
  margin: 12px;
  &:hover .leuven-image {
    animation: ${wobble} 350ms linear;
  }
`;

const ImageHolder = styled.div`
  height: 260px;
  width: 260px;
`;

const Title = styled.h3`
  font-size: 24px;
  line-height: 28px;
  color: #2E3134;
  text-align: center;
  margin-top: 15px;
`;

const Placeholder = styled.div`
  border-radius: 50%;
  height: 100%;
  width: 100%;
  color: lightgrey;
  box-shadow: 0 0 9px rgba(0, 0, 0, 0.4);
`;

function LeuvenCard(props) {
  return (
    <Wrapper>
      <Link to='#'>
        <ImageHolder>
          <Suspense fallback={<Placeholder></Placeholder>}>
            <LeuvenCardImage item={props.item} />
          </Suspense>
        </ImageHolder>
        <Title>{props.item.name}</Title> 
    </Link>
    </Wrapper>
  )
}

export default LeuvenCard;
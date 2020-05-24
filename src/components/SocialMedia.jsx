import React from 'react';
import styled from 'styled-components';

const SocialWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 2px solid #585a5d;
  border-bottom: 2px solid #585a5d;
  ul {
    display: flex;
  }
  li {
    height: 44px;
    width: 44px;
    margin: 16px;
    background-image: linear-gradient(to bottom right, #0069d2, #28e1a5);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      opacity: 0.8;
    }
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    margin: 2px;
    padding: 7px;
    background-color: #2e3134;
    border-radius: 50%;
  }
`;

function SocialMedia() {
  return (

    <SocialWrapper>
    <ul>
      <li>
        <a href="https://www.youtube.com/user/iFitLive">
          <img
            src={`${process.env.PUBLIC_URL}/icons/social_media/youtube.png`}
            alt="youtube icon"
            />
        </a>
      </li>
      <li>
        <a href="https://pinterest.com/ifit">
          <img
            src={`${process.env.PUBLIC_URL}/icons/social_media/pinterest.png`}
            alt="pinterest icon"
            />
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com/ifit">
          <img
            src={`${process.env.PUBLIC_URL}/icons/social_media/facebook.png`}
            alt="facebook icon"
            />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/ifit">
          <img
            src={`${process.env.PUBLIC_URL}/icons/social_media/twitter.png`}
            alt="twitter icon"
            />
        </a>
      </li>
      <li>
        <a href="https://instagram.com/ifit">
          <img
            src={`${process.env.PUBLIC_URL}/icons/social_media/instagram.png`}
            alt="instagram icon"
            />
        </a>
      </li>
    </ul>
  </SocialWrapper>
  )
}

export default SocialMedia;
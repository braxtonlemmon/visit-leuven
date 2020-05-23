import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom'; 

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #2E3134;
  padding-top: 48px;
  color: #FFF;
`;

const SiteLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 80px;
`;

const SiteLinksCol = styled.div`
  h4 {
    margin-bottom: 16px;
    letter-spacing: 0.5;
  }
  li {
    margin-bottom: 16px;
    color: rgba(255,255,255,0.73);
    letter-spacing: 0.3;
    &:hover {
      color: #FFF;
    }
  }

`;

const SocialMedia = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 2px solid #585A5D;
  border-bottom: 2px solid #585A5D;
  ul {
    display: flex;
  }
  li {
    height: 44px;
    width: 44px;
    margin: 16px;
    /* border: 2px solid linear-gradient(red, yellow); */
    background-image: linear-gradient(to bottom right, #0069D2, #28E1A5);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    margin: 2px;
    padding: 7px;
    background-color: #2E3134;
    border-radius: 50%;
  }
`;

const Legal = styled.div`

`;

const Language = styled.div`

`;

function Footer() {
  return (
    <Wrapper>
      <SiteLinks>
        <SiteLinksCol>
          <h4>Company</h4>
          <ul>
            <Link to='#'>
              <li>About</li>
            </Link>
            <Link to='#'>
              <li>Contact Us</li>
            </Link>
            <Link to='#'>
              <li>Careers</li>
            </Link>
          </ul>
        </SiteLinksCol>
        <SiteLinksCol>
          <h4>Account</h4>
          <ul>
            <Link to='#'>
              <li>Log In</li>
            </Link>
            <Link to='#'>
              <li>Create Account</li>
            </Link>
          </ul>
        </SiteLinksCol>
        <SiteLinksCol>
          <h4>Support</h4>
          <ul>
            <Link to='#'>
              <li>Help Center</li>
            </Link>
            <Link to='#'>
              <li>Accessibility</li>
            </Link>
              
          </ul>
        </SiteLinksCol>
      </SiteLinks>
      <SocialMedia>
        <ul>
          <li>
            <a href="https://www.youtube.com/user/iFitLive">
              <img src={`${process.env.PUBLIC_URL}/icons/social_media/youtube.png`} alt="" />
            </a>
          </li>
          <li>
            <a href="https://pinterest.com/ifit">
              <img src={`${process.env.PUBLIC_URL}/icons/social_media/pinterest.png`} alt="" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/ifit">
              <img src={`${process.env.PUBLIC_URL}/icons/social_media/facebook.png`} alt="" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/ifit">
              <img src={`${process.env.PUBLIC_URL}/icons/social_media/twitter.png`} alt="" />
            </a>
          </li>
          <li>
            <a href="https://instagram.com/ifit">
              <img src={`${process.env.PUBLIC_URL}/icons/social_media/instagram.png`} alt="" />
            </a>
          </li>
        </ul>
        
        
        
        
       
      </SocialMedia>
      <Legal></Legal>
    </Wrapper>
  );
}

export default Footer;

import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom'; 
import {
  SiteLinks,
  SiteLinksCol,
  SocialMedia,
  Language,
  Legal
} from './FooterStyling';

const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #2E3134;
  padding-top: 48px;
  color: #FFF;
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
              <img src={`${process.env.PUBLIC_URL}/icons/social_media/youtube.png`} alt="youtube icon" />
            </a>
          </li>
          <li>
            <a href="https://pinterest.com/ifit">
              <img src={`${process.env.PUBLIC_URL}/icons/social_media/pinterest.png`} alt="pinterest icon" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/ifit">
              <img src={`${process.env.PUBLIC_URL}/icons/social_media/facebook.png`} alt="facebook icon" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/ifit">
              <img src={`${process.env.PUBLIC_URL}/icons/social_media/twitter.png`} alt="twitter icon" />
            </a>
          </li>
          <li>
            <a href="https://instagram.com/ifit">
              <img src={`${process.env.PUBLIC_URL}/icons/social_media/instagram.png`} alt="instagram icon" />
            </a>
          </li>
        </ul>
      </SocialMedia>
      <Language>
        <select name="language" id="language">
          <option value="english">English</option>
          <option value="french">French</option>
          <option value="spanish">Spanish</option>
          <option value="german">German</option>
          <option value="dutch">Dutch</option>
          <option value="polish">Polish</option> 
        </select>
      </Language>
      <Legal>
        <div className="legal-links">
          <Link to='#'>
            <p>Privacy Policy</p>
          </Link>
          <Link to='#'>
            <p>Terms of Use</p>
          </Link>
        </div>
        <p>© iFit.com. All Rights Reserved.</p>
      </Legal>
    </Wrapper>
  );
}

export default Footer;

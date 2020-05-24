import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const SiteLinksWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  padding: 10px 15px;
  @media (min-width: 780px) {
    gap: 60px;
  }
  @media (min-width: 1200px) {
    gap: 85px;
  }
`;

const SiteLinksCol = styled.div`
  h4 {
    margin-bottom: 16px;
    letter-spacing: 0.5;
  }
  li {
    margin-bottom: 16px;
    color: rgba(255, 255, 255, 0.73);
    letter-spacing: 0.3;
    &:hover {
      color: #fff;
    }
  }
`;

function SiteLinks() {
  return (
    <SiteLinksWrapper>
      <SiteLinksCol>
        <h4>Company</h4>
        <ul>
          <Link to="#">
            <li>About</li>
          </Link>
          <Link to="#">
            <li>Contact Us</li>
          </Link>
          <Link to="#">
            <li>Careers</li>
          </Link>
        </ul>
      </SiteLinksCol>
      <SiteLinksCol>
        <h4>Account</h4>
        <ul>
          <Link to="#">
            <li>Log In</li>
          </Link>
          <Link to="#">
            <li>Create Account</li>
          </Link>
        </ul>
      </SiteLinksCol>
      <SiteLinksCol>
        <h4>Support</h4>
        <ul>
          <Link to="#">
            <li>Help Center</li>
          </Link>
          <Link to="#">
            <li>Accessibility</li>
          </Link>
        </ul>
      </SiteLinksCol>
    </SiteLinksWrapper>
  );
}

export default SiteLinks;
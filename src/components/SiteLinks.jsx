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
    color: ${props => props.theme.colors.pale};
    letter-spacing: 0.3;
    &:hover {
      color: ${props => props.theme.colors.light};
    }
  }
`;

function SiteLinks() {
  return (
    <SiteLinksWrapper>
      <SiteLinksCol>
        <h4>Organization</h4>
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
        <h4>Site</h4>
        <ul>
          <Link to="#">
            <li>City</li>
          </Link>
          <Link to="#">
            <li>Nature</li>
          </Link>
          <Link to="#">
            <li>Eat & Drink</li>
          </Link>
          <Link to="#">
            <li>Entertainment</li>
          </Link>
        </ul>
      </SiteLinksCol>
    </SiteLinksWrapper>
  );
}

export default SiteLinks;
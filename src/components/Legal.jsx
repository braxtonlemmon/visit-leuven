import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LegalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  .legal-links {
    display: flex;
    padding: 5px;
    a {
      margin: 5px 10px;
    }
    p:hover {
      text-decoration: underline;
    }
  }
  p {
    color: ${props => props.theme.colors.light};
  }
  @media (min-width: 900px) {
    flex-direction: row-reverse;
  }
`;

function Legal() {
  return (
    <LegalWrapper>
      <div className="legal-links">
        <Link to="#">
          <p>Privacy Policy</p>
        </Link>
        <Link to="#">
          <p>Terms of Use</p>
        </Link>
      </div>
      <p>© iFit.com. All Rights Reserved.</p>
    </LegalWrapper>
  );
}

export default Legal;
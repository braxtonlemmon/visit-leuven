import React from "react";
import styled from "styled-components";
import wrapper from './shared/Wrapper';
import SocialMedia from './SocialMedia';
import SiteLinks from './SiteLinks';
import Language from './Language';
import Legal from './Legal';

const Wrapper = styled(wrapper)`
  position: relative;
  width: 100%;
  background-color: #2E3134;
  padding-top: 48px;
  color: #FFF;
`;

function Footer() {
  return (
    <Wrapper>
      <SiteLinks />
      <SocialMedia />
      <Language />
      <Legal />
    </Wrapper>
  );
}

export default Footer;

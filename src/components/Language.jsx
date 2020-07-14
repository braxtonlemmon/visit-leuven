import React from 'react';
import styled from 'styled-components';

const LanguageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border-bottom: 2px solid ${props => props.theme.colors.pale};
  padding: 20px;
  select {
    position: relative;
    background: ${props => props.theme.colors.dark};
    padding: 5px;
    border: none;
    outline: none;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.5;
    color: ${props => props.theme.colors.light};
    cursor: pointer;
  }
  option {
    background: white;
    color: black;
    padding: 5px;
  }
  @media (min-width: 900px) {
    position: absolute;
    width: 200px;
    left: 40px;
    border: none;
    bottom: 5px;
}
`;

function Language() {
  return (
    <LanguageWrapper>
      <select name="language" id="language">
        <option value="english">English</option>
        <option value="french">French</option>
        <option value="spanish">Spanish</option>
        <option value="german">German</option>
        <option value="dutch">Dutch</option>
        <option value="polish">Polish</option>
      </select>
    </LanguageWrapper>
  );
}

export default Language;
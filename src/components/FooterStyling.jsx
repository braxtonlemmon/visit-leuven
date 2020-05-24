import styled from "styled-components";

const SiteLinks = styled.div`
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

const SocialMedia = styled.div`
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

const Language = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border-bottom: 2px solid #585a5d;
  padding: 20px;
  select {
    position: relative;
    background: #2e3134;
    padding: 5px;
    border: none;
    outline: none;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.5;
    color: #fff;
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

const Legal = styled.div`
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
    color: #fff;
  }
  @media (min-width: 900px) {
    flex-direction: row-reverse;
  }
`;

export {
  SiteLinks,
  SiteLinksCol,
  SocialMedia,
  Language,
  Legal
}
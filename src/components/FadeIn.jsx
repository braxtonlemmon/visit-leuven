import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const FadeSection = styled.div`
  opacity: 0;
  transition: opacity 1.8s ease-in;
  will-change: opacity;
  ${props => {
    if (props.isVisible) {
      return `
        opacity: 1;
      `;
    }
  }}
`;

function FadeIn(props) {
  const [isVisible, setVisible] = useState(true);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        console.log(entry);
        setVisible(entry.isIntersecting)
      });
    });
    observer.observe(domRef.current);
    const current = domRef.current;
    return () => observer.unobserve(current);
  }, []);

  return (
    <FadeSection
      isVisible={isVisible}
      ref={domRef}
    >
      {props.children}
    </FadeSection>
  )
}

export default FadeIn;

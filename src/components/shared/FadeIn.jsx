import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const FadeSection = styled.div`
  opacity: 0;
  transition: opacity 2s ease-in;
  will-change: opacity;
  ${props => {
    if (props.isVisible) {
      return `
        opacity: 1;
      `;
    }
  }}
`;

// Component wrapper that fades in child component when in view after scroll or load
function FadeIn(props) {
  const [isVisible, setVisible] = useState(true);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
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

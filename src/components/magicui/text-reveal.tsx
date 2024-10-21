// components/magicui/text-reveal.js
import React from 'react';
import styled from 'styled-components';

const TextReveal = ({ text }) => {
  return (
    <StyledText>
      {text.split('').map((char, index) => (
        <span key={index} className="char" style={{ transitionDelay: `${index * 50}ms` }}>
          {char}
        </span>
      ))}
    </StyledText>
  );
};

const StyledText = styled.div`
  display: inline-block;
  .char {
    opacity: 0;
    transform: translateY(20px);
    animation: reveal 2s forwards;
  }
  
  @keyframes reveal {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export default TextReveal;

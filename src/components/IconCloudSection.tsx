import React from 'react';
import styled from 'styled-components';

const Card = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="card2">
           <h3>Get your</h3>
           <h2>Custom Software</h2>
        </div>
      </div>
      <div className="card">
        <div className="card2">
           <h3>Get your</h3>
           <h2>Custom Software</h2>
        </div>
      </div>
      <div className="card">
        <div className="card2">
           <h3>Get your</h3>
           <h2>Custom Software</h2>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex; 
  justify-content:center;

  .card {
    display: flex;
    width: 190px;
    height: 254px;
    background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
    border-radius: 20px;
    transition: all 0.3s;
    margin: 20px; 
  }

  .card2 {
    width: 190px;
    height: 254px;
    background-color: #1a1a1a;
    border-radius: 2px; 
    transition: all 0.2s;
  }

  .card2:hover {
    transform: scale(0.98);
    border-radius: 20px; 
  }

  .card:hover {
    box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.3);
  }
`;

export default Card;

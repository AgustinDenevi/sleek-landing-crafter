import React from "react";
import styled from "styled-components";
import HyperText from "@/components/magicui/hyper-text";


const PCard = () => {
  return (
    <StyledWrapper style={{
      background: 'radial-gradient(ellipse -20% 50% at 50% 80%, rgba(120, 119, 198, 0.3), transparent)',
       paddingBottom: '10px'
    }} >

    <HyperText text="The Future is AI." className='md:p-8 md:text-3xl lg:p-10 lg:text-4xl xl:text-5xl'style={{color:'#F0F0F0', fontSize: '45px', margin:'60px', fontWeight:'600',fontFamily: 'Poppins',}} />


      <div className="pcard" >
        <div className="border" />
        <div className="content">
          <div className="logo">
      
            <div className="logo1">
                  <svg
                    viewBox="0 0 150 40"
                    xmlns="http://www.w3.org/2000/svg"
                    id="logo-main"
                  >
                    <text
                      x="5"
                      y="30"
                      font-family="Verdana"
                      font-size="34"
                      font-weight="900"
                      fill="#B08EBF"
                    >
                      AI
                    </text>
                  </svg>
            </div>


            <div className="logo2">
  <svg
    viewBox="0 0 1000 60"
    xmlns="http://www.w3.org/2000/svg"
    id="logo-main"
  >
    <text
      x="15"
      y="44"
      font-family="Verdana"
      font-size="50"
      fill="none"               
      stroke="#B08EBF"        
      stroke-width="1"   
    >
      sCoders
    </text>
  </svg>
</div>

            
            <span className="trail" />
          </div>
          <span className="logo-bottom-text">IsCoders S.A.</span>
        </div>
        <span className="bottom-text">software company</span>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
display: flex; 
  flex-direction: column; /* Alinea verticalmente el título y las tarjetas */
  align-items: center; /* Centra el contenido horizontalmente */
  
  .pcard {
  width: 300px;
  height: 200px;
  background: #262624;
  position: relative;
  display: grid;
  place-content: center;
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
}

#logo-main, #logo-second {
  height: 100%;
}

#logo-main {
  fill: #B08EBF;
}

#logo-second {
  padding-bottom: 10px;
  fill: none;
  stroke: #B08EBF;
  stroke-width: 1px;
}

.border {
  position: absolute;
  inset: 0px;
  border: 2px solid #B08EBF;
  opacity: 0;
  transform: rotate(10deg);
  transition: all 0.5s ease-in-out;
}

.bottom-text {
  position: absolute;
  left: 50%;
  bottom: 13px;
  transform: translateX(-50%);
  font-size: 6px;
  text-transform: uppercase;
  padding: 0px 5px 0px 8px;
  color: #B08EBF;
  background: #262624;
  opacity: 0;
  letter-spacing: 2px;
  transition: all 0.5s ease-in-out;
}

.content {
  transition: all 0.5s ease-in-out;
}

.content .logo {
  height: 35px;
  position: relative;
  width: 40px;
  overflow: hidden;
  transition: all 1s ease-in-out;
}

.content .logo .logo1 {
  height: 33px;
  position: absolute;
  left: 0;
}

.content .logo .logo2 {
  height: 33px;
  position: absolute;
  left: 33px;
}

.content .logo .trail {
  position: absolute;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
}

.content .logo-bottom-text {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  margin-top: 30px;
  color: #B08EBF;
  padding-left: 8px;
  font-size: 11px;
  opacity: 0;
  letter-spacing: none;
  transition: all 0.5s ease-in-out 0.5s;
}

.pcard:hover {
  border-radius: 0;
  transform: scale(1.1);
}

.pcard:hover .logo {
  width: 150px;
  animation: opacity 1s ease-in-out;
}

.pcard:hover .border {
  inset: 15px;
  opacity: 1;
  transform: rotate(0);
}

.pcard:hover .bottom-text {
  letter-spacing: 1px;
  opacity: 1;
  transform: translateX(-50%);
}

.pcard:hover .content .logo-bottom-text {
  opacity: 1;
  letter-spacing: 3px;
}

.pcard:hover .trail {
  animation: trail 1s ease-in-out;
}

@keyframes opacity {
  0% {
    border-right: 1px solid transparent;
  }

  10% {
    border-right: 1px solid #B08EBF;
  }

  80% {
    border-right: 1px solid #B08EBF;
  }

  100% {
    border-right: 1px solid transparent;
  }
}


@keyframes trail {
  0% {
    background: linear-gradient(90deg, rgba(176, 142, 191, 0) 90%, #B08EBF 100%);
    opacity: 0;
  }

  30% {
    background: linear-gradient(90deg, rgba(176, 142, 191, 0) 70%, #B08EBF 100%);
    opacity: 1;
  }

  70% {
    background: linear-gradient(90deg, rgba(176, 142, 191, 0) 70%, #B08EBF 100%);
    opacity: 1;
  }

  95% {
    background: linear-gradient(90deg, rgba(176, 142, 191, 0) 90%, #B08EBF 100%);
    opacity: 0;
  }
}

`;

export default PCard;

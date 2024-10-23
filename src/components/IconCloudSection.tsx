import React from 'react';
import styled from 'styled-components';
import { FaCode, FaMobileAlt, FaGlobe } from 'react-icons/fa';
import TextReveal from "@/components/magicui/text-reveal";

const Card = () => {
  return (
    <StyledWrapper>  
      <div className="relative">
        <div className="sticky top-[50px] mx-auto flex h-[50%] max-w-4xl items-center bg-transparent px-[1rem] py-[2rem] mb-[120px] z-50" style={{ fontFamily: 'Poppins, sans-serif' }}>
          <TextReveal text="Tailored Tech Solutions."/>
        </div>    
        <div className="cards-container relative z-40"> 
          <div className="card">
            <div className="card2">
              <h3>Get your</h3>
              <h2 className="service-title">Custom Software</h2>
              <div className="icon">
                <FaCode />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card2">
              <h3>Get your</h3>
              <h2 className="service-title">Mobile App</h2>
              <div className="icon">
                <FaMobileAlt />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card2">
              <h3>Get your</h3>
              <h2 className="service-title">Web Site</h2>
              <div className="icon">
                <FaGlobe />
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex; 
  flex-direction: column;
  align-items: center;
  position: relative;

  .title {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: clamp(24px, 5vw, 30px);
    margin-bottom: 20px;
    color: white;
  }

  .cards-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 2rem;
  }

  .card {
    display: flex;
    width: 250px;
    height: 310px;
    background-image: linear-gradient(90deg, #202BFA 0%, #20B5FA 100%);
    border-radius: 20px;
    transition: all 0.3s;
    margin: 50px; 
  }

  .card2 {
    width: 250px;
    height: 310px;
    background-color: #1a1a1a;
    border-radius: 16px; 
    transition: all 0.5s;
    display: flex; /* Para centrar el contenido */
    flex-direction: column; /* Organiza el contenido en columna */
    align-items: center; /* Alinea los elementos horizontalmente */
    justify-content: center; /* Alinea los elementos verticalmente */
    color: white; /* Cambia el color del texto a blanco */
    text-align: center; /* Centra el texto */
  }

  .icon {
    font-size: 35px; /* Tamaño del ícono */
    margin-top: 10px;
    margin-bottom: 10px; /* Espacio entre el ícono y el texto */
  }
  
  h3 {
    font-family: 'Poppins', sans-serif; /* Asegúrate de que h3 use Poppins */
    font-weight: 400; /* Peso normal para h3 */
    margin: 0; /* Elimina margen */
  }

  .service-title {
    font-family: 'Poppins', sans-serif; /* Asegúrate de que los h2 usen Poppins */
    font-weight: 600; /* Peso semi-negrita para el h2 */
    font-size: 1.2rem; /* Aumenta el tamaño del h2 */
    margin: 0; /* Elimina margen */
  }

  .card2:hover {
    transform: scale(0.98);
    border-radius: 20px; 
  }

  .card:hover {
    box-shadow: 0px 0px 30px 1px rgba(32, 43, 250, 0.3);
  }

  .textoTitle{
  z-index:11!important;
  }
`;

export default Card;

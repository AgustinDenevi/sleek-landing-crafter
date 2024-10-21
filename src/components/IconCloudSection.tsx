import React from 'react';
import styled from 'styled-components';
import { FaCode, FaMobileAlt, FaGlobe } from 'react-icons/fa'; // Importa íconos de react-icons

const Card = () => {
  return (
    <StyledWrapper>
      <h2 className="title">Tailored Tech Solutions</h2> {/* Título agregado */}
      <div className="cards-container"> {/* Contenedor para las tarjetas */}
        <div className="card">
          <div className="card2">
            <div className="icon">
              <FaCode />
            </div>
            <h3>Get your</h3>
            <h2>Custom Software</h2>
          </div>
        </div>
        <div className="card">
          <div className="card2">
            <div className="icon">
              <FaMobileAlt />
            </div>
            <h3>Get your</h3>
            <h2>Mobile App</h2>
          </div>
        </div>
        <div className="card">
          <div className="card2">
            <div className="icon">
              <FaGlobe />
            </div>
            <h3>Get your</h3>
            <h2>Web Site</h2>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex; 
  flex-direction: column; /* Alinea verticalmente el título y las tarjetas */
  align-items: center; /* Centra el contenido horizontalmente */

  .title {
    font-size: 24px; /* Tamaño del título */
    margin-bottom: 20px; /* Espacio debajo del título */
    color: white; /* Color del texto del título */
  }

  .cards-container {
    display: flex; /* Alinea las tarjetas en fila */
    justify-content: center; /* Centra las tarjetas en el contenedor */
    flex-wrap: wrap; /* Permite que las tarjetas se envuelvan en la siguiente línea si no hay suficiente espacio */
  }

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
    display: flex; /* Para centrar el contenido */
    flex-direction: column; /* Organiza el contenido en columna */
    align-items: center; /* Alinea los elementos horizontalmente */
    justify-content: center; /* Alinea los elementos verticalmente */
    color: white; /* Cambia el color del texto a blanco */
    text-align: center; /* Centra el texto */
  }

  .icon {
    font-size: 40px; /* Tamaño del ícono */
    margin-bottom: 10px; /* Espacio entre el ícono y el texto */
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

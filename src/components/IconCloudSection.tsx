import React from 'react';
import styled from 'styled-components';
import { FaCode, FaMobileAlt, FaGlobe } from 'react-icons/fa'; // Importa íconos de react-icons
import TextReveal from "@/components/magicui/text-reveal";
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Card = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <StyledWrapper className="pt-2 sm:pt-6 md:pt-10">  
      <div className={"title sticky top-0 mx-auto "} style={{ fontFamily: 'Poppins, sans-serif' }}>
            <TextReveal text="Tailored Tech Solutions." />
      </div>    
      <div className="cards-container" ref={ref}> {/* Contenedor para las tarjetas */}
        <motion.div 
          className="card"
          initial={{ x: 200, opacity: 0 }} // Comienza en el centro, invisible
          animate={isInView ? { x: -100, opacity: 1 } : { x: 0, opacity: 0 }} // Se mueve a la izquierda
          transition={{ duration: 2, delay: 1 }} // Animación suave
        >
          <div className="card2">
            <h3>Get your</h3>
            <h2 className="service-title">Mobile App</h2>
            <div className="icon">
              <FaMobileAlt />
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="card"
          initial={{ x: 0, opacity: 0 }} // Comienza en el centro, invisible
          animate={isInView ? { opacity: 1 } : { opacity: 0 }} // Se vuelve visible
          transition={{ duration: 0.5, delay: 0.5 }} // Animación suave
        >
          <div className="card2">
            <h3>Get your</h3>
            <h2 className="service-title">Custom Software</h2>
            <div className="icon">
              <FaCode />
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="card"
          initial={{ x: -200, opacity: 0 }} // Comienza en el centro, invisible
          animate={isInView ? { x: 100, opacity: 1 } : { x: 0, opacity: 0 }} // Se mueve a la derecha
          transition={{ duration: 2, delay: 1 }} // Animación suave
        >
          <div className="card2">
            <h3>Get your</h3>
            <h2 className="service-title">Web Site</h2>
            <div className="icon">
              <FaGlobe />
            </div>
          </div>
        </motion.div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex; 
  flex-direction: column; /* Alinea verticalmente el título y las tarjetas */
  align-items: center; /* Centra el contenido horizontalmente */

  .title {
 font-size:65px;
  margin-top:-650px;
  margin-bottom: 200px;
}

/* Para pantallas pequeñas, como celulares */
@media (max-width: 768px) {
  .title {
    margin-top:-650px;
    margin-bottom: 980px;
  }
}


  .cards-container {
    z-index:3;
    display: flex; /* Alinea las tarjetas en fila */
    justify-content: center; /* Centra las tarjetas en el contenedor */
    flex-wrap: wrap; /* Permite que las tarjetas se envuelvan en la siguiente línea si no hay suficiente espacio */
    
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

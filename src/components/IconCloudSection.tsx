import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { FaCode, FaMobileAlt, FaGlobe } from 'react-icons/fa'; // Importa íconos de react-icons
import TextReveal from "@/components/magicui/text-reveal";
import { motion, useScroll, useTransform } from 'framer-motion';
import Iphone15Pro from "@/components/ui/iphone-15-pro";
import imagen1 from "../../public/imagen1.jpeg";
import imagen2 from "../../public/imagen2.jpeg";
import imagen3 from "../../public/imagen3.jpeg";

const Card = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const [isMobile, setIsMobile] = useState(false);
  const [showIphone, setShowIphone] = useState(false); // Estado para controlar la visibilidad
  const [iphoneSrc, setIphoneSrc] = useState("https://via.placeholder.com/430x880"); // Estado para el src

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Ajusta el tamaño según tus necesidades
    };

    handleResize(); // Verifica el tamaño inicial
    window.addEventListener('resize', handleResize); // Escucha cambios de tamaño

    return () => {
      window.removeEventListener('resize', handleResize); // Limpia el evento al desmontar
    };
  }, []);

  // Transformaciones para las animaciones
  const mobileAppX = useTransform(scrollYProgress, [0, 1], [300, 0]); // Mueve hacia la izquierda
  const webSiteX = useTransform(scrollYProgress, [0, 1], [-300, 0]); // Mueve hacia la derecha
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]); // Cambia la opacidad

  const handleCardClick = (src: string) => {
    setIphoneSrc(src); // Actualiza el src según la tarjeta clickeada
    setShowIphone(true); // Muestra el div
  };

  return (
    <StyledWrapper >  
    <div className="pt-2 sm:pt-6 md:pt-10  sticky  mx-auto"  ref={ref}>
      <div className={"title sticky top-0 mx-auto "} style={{ fontFamily: 'Poppins, sans-serif' }} >
            <TextReveal text="Tailored Tech Solutions." />
            
      </div> 
         
      <div className="cards-container relative    " > {/* Contenedor para las tarjetas */}
        <motion.div 
          className="card"
          style={{
            x: isMobile ? 0 : mobileAppX, // Sin animación en móvil
            opacity: isMobile ? 1 : opacity // Sin animación en móvil
          }} 
          transition={{ duration: 0.5, delay: 0 }} // Animación suave con retraso
          onClick={() => handleCardClick(imagen1)} // Cambia el src según la tarjeta
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
          style={{
            opacity: isMobile ? 1 : opacity // Sin animación en móvil
          }} 
          transition={{ duration: 0.5, delay: 0 }} // Animación suave con retraso
          onClick={() => handleCardClick(imagen2)} // Cambia el src según la tarjeta
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
          style={{
            x: isMobile ? 0 : webSiteX, // Sin animación en móvil
            opacity: isMobile ? 1 : opacity // Sin animación en móvil
          }} 
          transition={{ duration: 0.5, delay: 0 }} // Animación suave con retraso
          onClick={() => handleCardClick(imagen3)} // Cambia el src según la tarjeta
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
      </div>
      <div className={`relative flex justify-center ${showIphone ? '' : 'hidden'}`}> {/* Controla la visibilidad */}
        <Iphone15Pro
          className="size-2/12"
          src={iphoneSrc} // Usa el src del estado
        />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`

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
.divContainAll{
  display: flex; 
  flex-direction: column; /* Alinea verticalmente el título y las tarjetas */
  align-items: center; /* Centra el contenido horizontalmente */

}

.cards-container {
    z-index: 3;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
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

  @media (min-width: 768px) {
    .cards-container {
      flex-direction: row; /* Asegúrate de que las tarjetas estén en fila en pantallas más grandes */
    }
  }

  @media (max-width: 767px) {
    .cards-container {
      flex-direction: column; /* Asegúrate de que las tarjetas estén en columna en pantallas pequeñas */
    }
  }
`;

export default Card;

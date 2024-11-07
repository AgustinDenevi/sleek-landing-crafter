import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { FaCode, FaMobileAlt, FaGlobe, FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Importa íconos de react-icons
import TextReveal from "@/components/magicui/text-reveal";
import { motion, useScroll, useTransform } from 'framer-motion';
import Iphone15Pro from "@/components/ui/iphone-15-pro";
import Ipad from './ui/Ipad';
import MacBook from './ui/mcbook';
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
  const [currentImage, setCurrentImage] = useState(0); // Estado para la imagen actual
  const images = [imagen1, imagen2, imagen3]; // Array de imágenes

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

  const handleCardClick = (imageIndex: number) => {
    setCurrentImage(imageIndex); // Actualiza la imagen actual según la tarjeta clickeada
    setShowIphone(true); // Muestra el modal
  };

  const handleExit = () => {
    setShowIphone(false); // Oculta el div al salir
  };

  const handleNext = () => {
    setCurrentImage((prev) => (prev + 1) % images.length); // Navegar a la siguiente imagen
  };

  const handlePrev = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length); // Navegar a la imagen anterior
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    const touchStartX = e.touches[0].clientX;

    const handleTouchMove = (e: TouchEvent) => {
      const touchEndX = e.touches[0].clientX;
      if (touchStartX - touchEndX > 50) {
        handleNext(); // Desplazar a la siguiente imagen
        document.removeEventListener('touchmove', handleTouchMove);
      } else if (touchEndX - touchStartX > 50) {
        handlePrev(); // Desplazar a la imagen anterior
        document.removeEventListener('touchmove', handleTouchMove);
      }
    };

    document.addEventListener('touchmove', handleTouchMove);
  };

  return (
    <StyledWrapper >  
    <div className="pt-2 sm:pt-6 md:pt-10  sticky  mx-auto"  ref={ref}>
      <div className={"title sticky top-0 mx-auto sm:ml-[150px] "} style={{ fontFamily: 'Poppins, sans-serif' }} >
            <TextReveal text="Tailored Tech Solutions." />
            
      </div> 
         
      <div className="cards-container flex flex-col items-center relative " > {/* Contenedor para las tarjetas */}
        <motion.div 
          className="card"
          style={{
            x: isMobile ? 0 : mobileAppX, // Sin animación en móvil
            opacity: isMobile ? 1 : opacity // Sin animación en móvil
          }} 
          transition={{ duration: 0.5, delay: 0 }} // Animación suave con retraso
          onClick={() => handleCardClick(0)} // Cambia el índice según la tarjeta
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
          onClick={() => handleCardClick(1)} // Cambia el índice según la tarjeta
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
          onClick={() => handleCardClick(2)} // Cambia el índice según la tarjeta
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
      <div className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-300 ${showIphone ? 'opacity-100 pointer-events-auto backdrop-blur-sm' : 'opacity-0 pointer-events-none'}`} style={{ zIndex: 1000, overflow: 'hidden' }} onTouchStart={handleTouchStart}>
        <div className="relative flex flex-col justify-center items-center rounded-lg p-1 shadow-lg" style={{ maxHeight: '80vh', width: '80%', maxWidth: '100%', overflow: 'hidden' }}>
          {currentImage === 1 ? ( // Verifica si la imagen actual es la de Custom Software
            <Ipad // Cambia a Ipad para Custom Software
              className={`size-${isMobile ? '1/3' : '1/10'}`} // Cambiado a '1/3' para móvil y '1/10' para escritorio
              src={images[currentImage]} // Usa el src de la imagen actual
              onClick={handleExit} // Desplaza al hacer clic en el iPad
            />
          ) : currentImage === 2 ? ( // Verifica si la imagen actual es la de Web Site
            <MacBook // Cambia a MacBook para Web Site
              className={`size-${isMobile ? '1/3' : '1/10'}`} // Cambiado a '1/3' para móvil y '1/10' para escritorio
              src={images[currentImage]} // Usa el src de la imagen actual
              onClick={handleExit} // Desplaza al hacer clic en el Mac
            />
          ) : (
            <Iphone15Pro // Mantiene Iphone15Pro para otras imágenes
              className={`size-${isMobile ? '1/3' : '1/10'}`} // Cambiado a '1/3' para móvil y '1/10' para escritorio
              src={images[currentImage]} // Usa el src de la imagen actual
              onClick={handleExit} // Desplaza al hacer clic en el teléfono
            />
          )}
          
          {/* Botones de navegación */}
          <div className="flex justify-center w-full mt-4 items-center hidden md:flex"> {/* Oculta en móvil y muestra en pantallas medianas y grandes */}
            <button onClick={handlePrev} className="bg-white text-black p-1 mr-5 rounded-lg">
              <FaArrowLeft />
            </button>
            <button onClick={handleNext} className="bg-white text-black p-1 ml-5 rounded-lg">
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div> {/* Asegúrate de que este div tenga un estilo adecuado para centrar los botones */}
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
overflow: hidden; 
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

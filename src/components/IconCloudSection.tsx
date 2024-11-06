import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaCode, FaMobileAlt, FaGlobe } from 'react-icons/fa';
import TextReveal from "@/components/magicui/text-reveal";
import { useScroll, useTransform } from 'framer-motion';
import imagen1 from "../../public/imagen1.jpeg";
import imagen2 from "../../public/imagen2.jpeg";
import imagen3 from "../../public/imagen3.jpeg";
import ServiceCard from './cards/ServiceCard';
import IphonePreviewModal from './modals/IphonePreviewModal';

const IconCloudSection = () => {
  const { scrollYProgress } = useScroll();
  const [isMobile, setIsMobile] = useState(false);
  const [showIphone, setShowIphone] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const images = [imagen1, imagen2, imagen3];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const mobileAppX = useTransform(scrollYProgress, [0, 1], [300, 0]);
  const webSiteX = useTransform(scrollYProgress, [0, 1], [-300, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const handleCardClick = (imageIndex: number) => {
    setCurrentImage(imageIndex);
    setShowIphone(true);
  };

  const handleExit = () => setShowIphone(false);
  const handleNext = () => setCurrentImage((prev) => (prev + 1) % images.length);
  const handlePrev = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

  const handleTouchStart = (e: React.TouchEvent) => {
    const touchStartX = e.touches[0].clientX;
    const handleTouchMove = (e: TouchEvent) => {
      const touchEndX = e.touches[0].clientX;
      if (touchStartX - touchEndX > 50) {
        handleNext();
        document.removeEventListener('touchmove', handleTouchMove);
      } else if (touchEndX - touchStartX > 50) {
        handlePrev();
        document.removeEventListener('touchmove', handleTouchMove);
      }
    };
    document.addEventListener('touchmove', handleTouchMove);
  };

  return (
    <StyledWrapper>
      <div className="w-full max-w-7xl mx-auto overflow-x-hidden">
        <div className="pt-2 sm:pt-6 md:pt-10 sticky mx-auto">
          <div className="title sticky top-0 mx-auto sm:ml-[150px]" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <TextReveal text="Tailored Tech Solutions." />
          </div>

          <div className="cards-container flex flex-col items-center relative">
            <ServiceCard
              title="Mobile App"
              Icon={FaMobileAlt}
              onClick={() => handleCardClick(0)}
              x={isMobile ? 0 : mobileAppX}
              opacity={isMobile ? 1 : opacity}
            />
            <ServiceCard
              title="Custom Software"
              Icon={FaCode}
              onClick={() => handleCardClick(1)}
              opacity={isMobile ? 1 : opacity}
            />
            <ServiceCard
              title="Web Site"
              Icon={FaGlobe}
              onClick={() => handleCardClick(2)}
              x={isMobile ? 0 : webSiteX}
              opacity={isMobile ? 1 : opacity}
            />
          </div>
        </div>
      </div>

      <IphonePreviewModal
        showIphone={showIphone}
        currentImage={currentImage}
        images={images}
        isMobile={isMobile}
        handleExit={handleExit}
        handleNext={handleNext}
        handlePrev={handlePrev}
        handleTouchStart={handleTouchStart}
      />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .title {
    font-size: 65px;
    margin-top: -650px;
    margin-bottom: 200px;
  }

  @media (max-width: 768px) {
    .title {
      margin-top: -650px;
      margin-bottom: 980px;
    }
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    text-align: center;
  }

  .icon {
    font-size: 35px;
    margin: 10px 0;
  }

  h3 {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    margin: 0;
  }

  .service-title {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 1.2rem;
    margin: 0;
  }

  .card2:hover {
    transform: scale(0.98);
    border-radius: 20px;
  }

  .card:hover {
    box-shadow: 0px 0px 30px 1px rgba(32, 43, 250, 0.3);
  }

  @media (min-width: 768px) {
    .cards-container {
      flex-direction: row;
    }
  }

  @media (max-width: 767px) {
    .cards-container {
      flex-direction: column;
    }
  }
`;

export default IconCloudSection;
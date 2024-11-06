import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Iphone15Pro from "@/components/ui/iphone-15-pro";

interface IphonePreviewModalProps {
  showIphone: boolean;
  currentImage: number;
  images: string[];
  isMobile: boolean;
  handleExit: () => void;
  handleNext: () => void;
  handlePrev: () => void;
  handleTouchStart: (e: React.TouchEvent) => void;
}

const IphonePreviewModal = ({
  showIphone,
  currentImage,
  images,
  isMobile,
  handleExit,
  handleNext,
  handlePrev,
  handleTouchStart
}: IphonePreviewModalProps) => {
  return (
    <div 
      className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-300 ${
        showIphone ? 'opacity-100 pointer-events-auto backdrop-blur-sm' : 'opacity-0 pointer-events-none'
      }`} 
      style={{ zIndex: 1000, overflow: 'hidden' }} 
      onTouchStart={handleTouchStart}
    >
      <div className="relative flex flex-col justify-center items-center rounded-lg p-1 shadow-lg" style={{ maxHeight: '80vh', width: '80%', maxWidth: '100%', overflow: 'hidden' }}>
        <Iphone15Pro
          className={`size-${isMobile ? '1/3' : '1/10'}`}
          src={images[currentImage]}
          onClick={handleExit}
        />
        
        <div className="flex justify-between w-full mt-4 items-center hidden md:flex">
          <button onClick={handlePrev} className="bg-white text-black p-1 rounded-lg">
            <FaArrowLeft />
          </button>
          <button onClick={handleNext} className="bg-white text-black p-1 rounded-lg">
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default IphonePreviewModal;
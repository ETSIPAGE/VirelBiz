import React, { useState, useEffect } from 'react';

const slideImages = [
  {
    url: 'https://virelbizlandingpage.s3.ap-south-1.amazonaws.com/WhatsApp+Image+2025-10-18+at+3.49.49+PM+(1).jpeg',
  },
  {
    url: 'https://virelbizlandingpage.s3.ap-south-1.amazonaws.com/WhatsApp+Image+2025-10-18+at+3.49.49+PM+(2).jpeg',
  },
  {
    url: 'https://virelbizlandingpage.s3.ap-south-1.amazonaws.com/WhatsApp+Image+2025-10-18+at+3.49.49+PM+(3).jpeg',
  },
  {
    url: 'https://virelbizlandingpage.s3.ap-south-1.amazonaws.com/WhatsApp+Image+2025-10-18+at+3.49.49+PM+(5).jpeg',
  },
];

const ImageSlideshow: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slideImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="h-[30rem] lg:h-[45rem] w-full relative group rounded-lg overflow-hidden shadow-lg">
      <div className="w-full h-full relative">
        {slideImages.map((slide, index) => (
            <div
                key={index}
                className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
            >
                <img src={slide.url} className="w-full h-full object-cover" alt={`Slide ${index + 1}`}/>
            </div>
        ))}
      </div>
      
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slideImages.map((_, slideIndex) => (
          <button
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
              currentIndex === slideIndex ? 'bg-amber-500 w-6' : 'bg-yellow-200/70 hover:bg-yellow-200'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlideshow;
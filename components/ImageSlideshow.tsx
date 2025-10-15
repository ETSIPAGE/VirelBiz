import React, { useState, useEffect } from 'react';

const slideImages = [
  {
    url: 'https://i.ibb.co/3kC7D5s/trade-show-crowd.jpg',
    content: (
      <div className="absolute inset-0 bg-stone-800 bg-opacity-60 flex flex-col justify-center p-12 text-white">
        <p className="text-lg font-semibold">Introducing VirelBiz</p>
        <h2 className="text-4xl font-bold my-2 leading-tight">Connect. Collaborate. Grow.</h2>
        <div className="bg-yellow-50 text-stone-800 text-sm font-bold inline-flex self-start my-2">
            <span className="bg-amber-500 text-white p-2">Global Launch: October 2025</span>
            <span className="p-2">The Global Business Acceleration Platform</span>
        </div>
        <p className="my-2 max-w-lg">A new-age platform designed to connect businesses, innovators, and professionals from across the world.</p>
        <button className="bg-yellow-50 text-amber-800 font-bold py-2 px-6 rounded-md mt-4 self-start hover:bg-yellow-100 transition-colors">
          Learn More
        </button>
      </div>
    )
  },
  { url: 'https://i.ibb.co/L5BfKcm/ai-vision-system.jpg' },
  { url: 'https://i.ibb.co/yqVqFbf/long-range-drone.jpg' },
  { url: 'https://i.ibb.co/qYn02zM/drone-swarm.jpg' },
  { url: 'https://i.ibb.co/M8P5b5q/ai-chipset.jpg' },
  { url: 'https://i.ibb.co/tZ7XgW9/drone-frame.jpg' },
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
    <div className="h-[30rem] w-full relative group rounded-lg overflow-hidden shadow-lg">
      <div className="w-full h-full relative">
        {slideImages.map((slide, index) => (
            <div
                key={index}
                className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
            >
                <img src={slide.url} className="w-full h-full object-cover" alt={`Slide ${index + 1}`}/>
                {slide.content && index === currentIndex && slide.content}
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
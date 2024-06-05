import React, { useState,useEffect } from 'react';

const ImageGallery = () => {
  const [currentImage, setCurrentImage] = useState(1);

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage % 3) + 1);
  };

  const prevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 2 + 3) % 3 + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000); // Change the interval time (in milliseconds) here

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full mx-auto mt-1">
      <div className="flex">
        <div className="w-1/3">
          <img src={`https://source.unsplash.com/random/800x300?sig=${currentImage}`} alt={`Image ${currentImage}`} className="w-full object-cover h-300px" />
        </div>
        <div className="w-1/3">
          <img src={`https://source.unsplash.com/random/800x300?sig=${currentImage + 1}`} alt={`Image ${currentImage + 1}`} className="w-full object-cover h-300px" />
        </div>
        <div className="w-1/3">
          <img src={`https://source.unsplash.com/random/800x300?sig=${currentImage + 2}`} alt={`Image ${currentImage + 2}`} className="w-full object-cover h-300px" />
        </div>
      </div>
  
    </div>
  );
};

export default ImageGallery;

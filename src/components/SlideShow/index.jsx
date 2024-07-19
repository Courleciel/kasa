import { useState } from 'react';
import arrow from '../../assets/arrow.png';

function Slideshow({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalPictures = pictures.length;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalPictures - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalPictures - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="slideshow">
      {totalPictures > 1 && (
        <button className="slideshow-btn prev" onClick={handlePrev}>
          <img src={arrow} alt="Previous" className="arrow-img" />
        </button>
      )}
      <div className="slideshow-image-container">
        <img src={pictures[currentIndex]} alt="Slideshow" className="slideshow-img" />
        {totalPictures > 1 && (
          <div className="slideshow-counter">
            {currentIndex + 1}/{totalPictures}
          </div>
        )}
      </div>
      {totalPictures > 1 && (
        <button className="slideshow-btn next" onClick={handleNext}>
          <img src={arrow} alt="Previous" className="arrow-img" />
        </button>
      )}
    </div>
  );
}

export default Slideshow;

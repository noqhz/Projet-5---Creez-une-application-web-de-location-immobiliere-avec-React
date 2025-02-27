import { useState } from 'react';
import PropTypes from 'prop-types';
import '../App.scss';
import Left from '../assets/slideshow_left.png';
import Right from '../assets/slideshow_right.png';

function Slideshow({ pictures }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
    };

    return (
        <div className="slideshow">

            {pictures.length > 1 && (
            <button className="slideshow-button prev" onClick={prevSlide}><img src={Left} alt="previous" /></button>
            )}

            <img src={pictures[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slideshow-image" />
            
            {pictures.length > 1 && (
            <button className="slideshow-button next" onClick={nextSlide}><img src={Right} alt="next" /></button>
            )}

            {pictures.length > 1 && (
            <div className="slideshow-indicator">
                {currentIndex + 1} / {pictures.length}
            </div>
            )}
        </div>
    );
}

Slideshow.propTypes = {
    pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Slideshow;
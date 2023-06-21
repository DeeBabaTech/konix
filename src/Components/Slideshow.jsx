import React, { useState, useEffect } from 'react'
import './../App.css'
import iPhone from './../assets/Slider1.jpg'
import iPhone12 from './../assets/Slider2.jpg'
import iPhone13 from './../assets/Slider3.jpg'

function Slideshow() {
    const images = [
        iPhone,
        iPhone12,
        iPhone13
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 4000);

        return () => {
            clearInterval(interval);
        };
    }, [images]);


    return (
        <div className="slideshow-container">
            <div className="slideshow-image-container">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Slideshow ${index + 1}`}
                        className={`slideshow-image ${index === currentImageIndex ? 'active' : ''
                            }`}
                    />
                ))}
            </div>
        </div>
    )
}

export default Slideshow
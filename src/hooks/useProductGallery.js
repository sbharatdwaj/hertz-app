import { useState, useEffect } from 'react';

const useProductGallery = (initialImages) => {
    const [images, setImages] = useState(initialImages);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        setImages(initialImages);
    }, [initialImages]);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const previousImage = () => {
        setCurrentIndex((prevIndex) => 
            (prevIndex - 1 + images.length) % images.length
        );
    };

    const goToImage = (index) => {
        if (index >= 0 && index < images.length) {
            setCurrentIndex(index);
        }
    };

    return {
        images,
        currentImage: images[currentIndex],
        nextImage,
        previousImage,
        goToImage,
    };
};

export default useProductGallery;
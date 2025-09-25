// src/hooks/useAnimation.js

import { useEffect, useRef } from 'react';

const useAnimation = (animationClass) => {
    const elementRef = useRef(null);

    useEffect(() => {
        const element = elementRef.current;

        if (element) {
            element.classList.add(animationClass);

            const handleAnimationEnd = () => {
                element.classList.remove(animationClass);
            };

            element.addEventListener('animationend', handleAnimationEnd);

            return () => {
                element.removeEventListener('animationend', handleAnimationEnd);
            };
        }
    }, [animationClass]);

    return elementRef;
};

export default useAnimation;
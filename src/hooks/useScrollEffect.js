import { useEffect } from 'react';

const useScrollEffect = (callback) => {
    useEffect(() => {
        const handleScroll = () => {
            callback();
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [callback]);
};

export default useScrollEffect;
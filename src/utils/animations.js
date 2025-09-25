// animations.js

export const fadeIn = (element, duration = 500) => {
    element.style.opacity = 0;
    element.style.transition = `opacity ${duration}ms`;
    element.style.opacity = 1;
};

export const slideIn = (element, direction = 'left', duration = 500) => {
    const initialPosition = direction === 'left' ? '-100%' : '100%';
    element.style.transform = `translateX(${initialPosition})`;
    element.style.transition = `transform ${duration}ms`;
    requestAnimationFrame(() => {
        element.style.transform = 'translateX(0)';
    });
};

export const bounce = (element, duration = 500) => {
    element.style.transition = `transform ${duration}ms`;
    element.style.transform = 'translateY(-10px)';
    setTimeout(() => {
        element.style.transform = 'translateY(0)';
    }, duration);
};

export const rotate = (element, duration = 500) => {
    element.style.transition = `transform ${duration}ms`;
    element.style.transform = 'rotate(360deg)';
    setTimeout(() => {
        element.style.transform = 'rotate(0deg)';
    }, duration);
};
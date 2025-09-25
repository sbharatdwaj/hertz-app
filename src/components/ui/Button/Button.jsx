import React from 'react';
import styles from './Button.module.css';

const Button = ({ children, onClick, type = 'button', className = '', disabled = false }) => {
    return (
        <button
            className={`${styles.button} ${className}`}
            onClick={onClick}
            type={type}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;
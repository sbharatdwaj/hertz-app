import React from 'react';
import styles from './Card.module.css';

const Card = ({ title, description, image, onClick }) => {
    return (
        <div className={styles.card} onClick={onClick}>
            {image && <img src={image} alt={title} className={styles.cardImage} />}
            <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardDescription}>{description}</p>
            </div>
        </div>
    );
};

export default Card;
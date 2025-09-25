import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

const Hero = ({ title, subtitle, backgroundImage }) => {
  // If backgroundImage is a string, use it directly; if it's an imported module, access its default property
  const imageUrl = typeof backgroundImage === 'string' ? backgroundImage : backgroundImage;
  
  const heroStyle = backgroundImage ? {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${imageUrl})`
  } : {};

  // Animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, delay: 0.3, ease: "easeOut" }
    }
  };

  // Particle animation (decorative floating elements)
  useEffect(() => {
    const createParticle = () => {
      const heroElement = document.querySelector(`.${styles.heroContainer}`);
      if (!heroElement) return;
      
      const particle = document.createElement('div');
      particle.classList.add(styles.particle);
      
      // Random position, size and duration
      const size = Math.random() * 8 + 4; // 4-12px
      const posX = Math.random() * 100; // 0-100%
      const posY = Math.random() * 100; // 0-100%
      const duration = Math.random() * 10 + 10; // 10-20s
      const delay = Math.random() * 5; // 0-5s
      
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${posX}%`;
      particle.style.top = `${posY}%`;
      particle.style.animationDuration = `${duration}s`;
      particle.style.animationDelay = `${delay}s`;
      
      heroElement.appendChild(particle);
      
      // Remove particle after animation completes
      setTimeout(() => {
        if (particle.parentNode === heroElement) {
          heroElement.removeChild(particle);
        }
      }, (duration + delay) * 1000);
    };
    
    // Create initial particles
    for (let i = 0; i < 15; i++) {
      createParticle();
    }
    
    // Create new particles periodically
    const interval = setInterval(createParticle, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.heroContainer} style={heroStyle}>
      <div className={styles.heroContent}>
        <motion.h1 
          className={styles.heroTitle}
          initial="hidden"
          animate="visible"
          variants={titleVariants}
        >
          {title}
        </motion.h1>
        <motion.p 
          className={styles.heroSubtitle}
          initial="hidden"
          animate="visible"
          variants={subtitleVariants}
        >
          {subtitle}
        </motion.p>
      </div>
      
      {/* Animated shapes for visual interest */}
      <div className={styles.shapeContainer}>
        <div className={`${styles.shape} ${styles.shape1}`}></div>
        <div className={`${styles.shape} ${styles.shape2}`}></div>
        <div className={`${styles.shape} ${styles.shape3}`}></div>
      </div>
    </div>
  );
};

export default Hero;
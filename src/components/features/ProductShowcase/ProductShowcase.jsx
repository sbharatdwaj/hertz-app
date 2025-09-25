import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './ProductShowcase.module.css';

const ProductShowcase = ({ product }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, x: -50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  if (!product) {
    return <div className={styles.loading}>Loading product information...</div>;
  }

  // Get the image URL, handling both string paths and imported images
  const imageUrl = typeof product.image === 'string' ? product.image : product.image;

  return (
    <div className={styles.productShowcase} ref={ref}>
      <div className={styles.productGrid}>
        <motion.div 
          className={styles.productImage}
          initial="hidden"
          animate={controls}
          variants={imageVariants}
        >
          <div className={styles.imageWrapper}>
            <img src={imageUrl} alt={product.name} />
            <div className={styles.imageBg}></div>
            
            {/* Animated elements */}
            <div className={`${styles.orbitRing} ${styles.ring1}`}></div>
            <div className={`${styles.orbitRing} ${styles.ring2}`}></div>
            <div className={`${styles.orbitDot} ${styles.dot1}`}></div>
            <div className={`${styles.orbitDot} ${styles.dot2}`}></div>
          </div>
        </motion.div>
        
        <motion.div 
          className={styles.productInfo}
          initial="hidden"
          animate={controls}
          variants={contentVariants}
        >
          <motion.h2 className={styles.productName} variants={itemVariants}>
            {product.name}
          </motion.h2>
          <motion.p className={styles.productTagline} variants={itemVariants}>
            {product.tagline}
          </motion.p>
          <motion.div className={styles.productDescription} variants={itemVariants}>
            <p>{product.description}</p>
          </motion.div>
          <motion.div className={styles.productActions} variants={itemVariants}>
            <button className={styles.primaryBtn}>Request Information</button>
            <button className={styles.secondaryBtn}>Download Datasheet</button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductShowcase;
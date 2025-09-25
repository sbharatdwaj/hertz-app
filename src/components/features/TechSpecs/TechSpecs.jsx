import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './TechSpecs.module.css';

const TechSpecs = ({ specifications }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
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

  if (!specifications || specifications.length === 0) {
    return <div className={styles.loading}>No specifications available at this time.</div>;
  }

  return (
    <motion.div 
      className={styles.techSpecs}
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <motion.div className={styles.specsList}>
        {specifications.map((spec, index) => (
          <motion.div 
            key={index} 
            className={styles.specItem}
            variants={itemVariants}
          >
            <div className={styles.specName}>{spec.name}</div>
            <div className={styles.specValue}>{spec.value}</div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default TechSpecs;
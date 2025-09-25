import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Layout from '../../../components/common/Layout/Layout';
import styles from './Satellite.module.css';

// Importing components
import ProductShowcase from '../../../components/features/ProductShowcase/ProductShowcase';
import TechSpecs from '../../../components/features/TechSpecs/TechSpecs';
import Hero from '../../../components/features/Hero/Hero';

// Import images directly from src/assets
import satelliteImage from '../../../assets/images/products/satellite.png';
import satelliteHeroImage from '../../../assets/images/hero/satellite-hero.png';

// Sample satellite data - later we can move this to a data file
const satelliteProduct = {
  id: 2,
  type: 'satellite',
  name: 'HertZ Satellite Platform',
  tagline: 'Next-generation satellite platform for global connectivity',
  description: 'Our flagship satellite platform combines cutting-edge technology with robust design to deliver reliable performance in the harsh environment of space. Equipped with advanced sensors and communication systems, the HertZ Satellite provides global coverage for IoT applications, scientific research, and communication needs.',
  image: satelliteImage,
  specifications: [
    { name: "Dimensions", value: "30cm x 30cm x 10cm" },
    { name: "Weight", value: "3kg" },
    { name: "Power", value: "Solar panels + Battery backup" },
    { name: "Communication", value: "Dual-band RF, optical link capability" },
    { name: "Orbit", value: "Low Earth Orbit (LEO)" },
    { name: "Lifespan", value: "5+ years" },
    { name: "Onboard Computing", value: "Dual-core processor, 4GB RAM" },
    { name: "Sensors", value: "Multiple environmental & positioning sensors" }
  ],
  features: [
    "Advanced positioning system with sub-meter accuracy",
    "Real-time data transmission capabilities",
    "Solar-powered with battery backup",
    "Multiple communication protocols support",
    "Modular design for payload customization",
    "Radiation-hardened electronics",
    "Automated collision avoidance system",
    "Secure data encryption and transmission"
  ]
};

const Satellite = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // For features section animation
  const [featuresRef, featuresInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const featureVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <Layout>
      <div className={styles.satellitePage}>
        <Hero 
          title={satelliteProduct.name} 
          subtitle={satelliteProduct.tagline} 
          backgroundImage={satelliteHeroImage}
        />
        
        <section className={styles.productOverview}>
          <div className="container mx-auto px-4 py-16">
            <motion.h2 
              className={styles.sectionTitle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Product Overview
            </motion.h2>
            <ProductShowcase product={satelliteProduct} />
          </div>
        </section>
        
        <section className={styles.techSpecsSection}>
          <div className="container mx-auto px-4 py-16">
            <motion.h2 
              className={styles.sectionTitle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Technical Specifications
            </motion.h2>
            <TechSpecs specifications={satelliteProduct.specifications} />
          </div>
        </section>
        
        <section className={styles.featuresSection} ref={featuresRef}>
          <div className="container mx-auto px-4 py-16">
            <motion.h2 
              className={styles.sectionTitle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Key Features
            </motion.h2>
            <div className={styles.featuresList}>
              {satelliteProduct.features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className={styles.featureItem}
                  custom={index}
                  initial="hidden"
                  animate={featuresInView ? "visible" : "hidden"}
                  variants={featureVariants}
                >
                  <div className={styles.featureIcon}>✓</div>
                  <p>{feature}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        <section className={styles.ctaSection}>
          <div className="container mx-auto px-4 py-16">
            <motion.div 
              className={styles.ctaContainer}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2>Ready to explore HertZ Satellite technology?</h2>
              <p>Contact our team to learn more about implementations and custom solutions.</p>
              <motion.button 
                className={styles.ctaButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Satellite;
import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Layout from '../../components/common/Layout/Layout';
import Footer from '../../components/common/Footer/Footer';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';

// Update these import lines in your Home.jsx file
import satelliteImg from '../../assets/images/products/satellite.png';
import sensorImg from '../../assets/images/products/product4.png';
import computingImg from '../../assets/images/products/computing.svg'; 

// Add this import for the video
import heroVideo from '../../assets/videos/home_video.mp4';

// Add this import at the top with your other imports
import boardImage from '../../assets/images/backgrounds/board.jpg';

const Home = () => {
  // References for parallax effects
  const heroRef = useRef(null);
  
  // Scroll progress for parallax
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  // Transform values for parallax
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
  // Animation controls for sections
  const productsControls = useAnimation();
  const missionControls = useAnimation();
  
  // Intersection observers for triggering animations
  const [productsRef, productsInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [missionRef, missionInView] = useInView({ threshold: 0.2, triggerOnce: true });
  
  // Trigger animations when sections come into view
  useEffect(() => {
    if (productsInView) productsControls.start('visible');
    if (missionInView) missionControls.start('visible');
  }, [productsInView, missionInView, productsControls, missionControls]);
  
  // Products animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const productVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };
  
  // Mission statement animation
  const missionVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  // Smooth scroll handler
  const scrollToProducts = (e) => {
    e.preventDefault();
    document.getElementById('products')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <Layout>
      {/* Hero Section with Full-Screen Video Background */}
      <section ref={heroRef} className={styles.heroSection}>
        <div className={styles.heroVideoBackground}>
          <video 
            src={heroVideo}
            autoPlay
            muted
            loop
            playsInline
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>
        
        <div className={styles.videoOverlay}></div>
        
        <motion.div 
          className={styles.heroBackground}
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <motion.div 
            className={styles.boardImage}
            animate={{
              scale: [1, 1.05, 1.02, 1.07, 1],
              rotate: [0, 1, 0.5, -0.5, 0],
              x: [0, 10, 5, -5, 0],
              y: [0, -10, 5, -5, 0]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              repeatType: 'loop',
              ease: "easeInOut"
            }}
          >
            <div className={styles.circuitLines}></div>
            <div className={styles.circuitNodes}></div>
            <div className={styles.chipElements}></div>
          </motion.div>
          <div className={styles.overlay}></div>
          <div className={styles.gridPattern}></div>
          
          {/* Background particles */}
          <div className={styles.backgroundParticles}>
            {[...Array(20)].map((_, i) => (
              <motion.div 
                key={i}
                className={styles.bgParticle}
                initial={{ 
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  opacity: Math.random() * 0.3 + 0.1,
                  scale: Math.random() * 0.5 + 0.2
                }}
                animate={{ 
                  y: [0, Math.random() * 50 - 25],
                  x: [0, Math.random() * 50 - 25],
                  opacity: [Math.random() * 0.3 + 0.1, Math.random() * 0.5 + 0.2, Math.random() * 0.3 + 0.1]
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut'
                }}
                style={{
                  position: 'absolute',
                  width: `${Math.random() * 4 + 2}px`,
                  height: `${Math.random() * 4 + 2}px`,
                  background: i % 3 === 0 ? '#74b9ff' : i % 3 === 1 ? '#00cec9' : '#0984e3'
                }}
              />
            ))}
          </div>
        </motion.div>
        
        {/* Hero content - now centered and overlaying the video */}
        <div className={styles.heroContent}>
          <motion.div 
            className={styles.heroText}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1>
              <span className={styles.highlight}>OneHertz</span>
              <span className={styles.subtitle}>Hardware solutions for IoT, AI, Computing & Connectivity</span>
            </h1>
            
            <div className={styles.heroDescription}>
              <p>From custom sensor boards to powerful single-board computers and satellite gateways, we design the building blocks for your next big idea.</p>
            </div>
            
            <motion.div 
              className={styles.heroCta}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a href="#products" onClick={scrollToProducts} className={styles.primaryBtn}>
                Explore Platforms
              </a>
              <Link to="/about" className={styles.secondaryBtn}>
                Our Technology
              </Link>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          className={styles.scrollIndicator}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <p>Scroll to explore</p>
          <motion.div 
            className={styles.scrollIcon}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 5L12 19M12 19L19 12M12 19L5 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </motion.div>
      </section>
      
      {/* Products Section */}
      <section id="products" className={styles.productsSection} ref={productsRef}>
        <div className={styles.container}>
          <motion.h2
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our <span className={styles.highlight}>Products</span>
          </motion.h2>
          
          <motion.div 
            className={styles.productsGrid}
            variants={containerVariants}
            initial="hidden"
            animate={productsControls}
          >
            <motion.div 
              className={styles.productCard}
              variants={productVariants}
              whileHover={{ y: -10, boxShadow: "0 20px 30px rgba(0, 0, 0, 0.2)" }}
            >
              <div className={styles.productImage}>
                <motion.img 
                  src={satelliteImg} 
                  alt="Satellite" 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className={styles.productGlow}></div>
              </div>
              <h3>Satellite Platform</h3>
              <p>Next-generation satellite technology for global connectivity and monitoring</p>
              <Link to="/products/satellite" className={styles.productLink}>
                Explore
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M5 15L15 5M15 5H7.5M15 5V12.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </motion.div>
            
            <motion.div 
              className={styles.productCard}
              variants={productVariants}
              whileHover={{ y: -10, boxShadow: "0 20px 30px rgba(0, 0, 0, 0.2)" }}
            >
              <div className={styles.productImage}>
                <motion.img 
                  src={sensorImg} 
                  alt="Sensor Module" 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className={styles.productGlow}></div>
              </div>
              <h3>Sensor Modules</h3>
              <p>Advanced sensing capabilities for data collection in extreme environments</p>
              <Link to="/products/sense-array" className={styles.productLink}>
                Explore
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M5 15L15 5M15 5H7.5M15 5V12.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </motion.div>
            
            <motion.div 
              className={styles.productCard}
              variants={productVariants}
              whileHover={{ y: -10, boxShadow: "0 20px 30px rgba(0, 0, 0, 0.2)" }}
            >
              <div className={styles.productImage}>
                <motion.img 
                  src={computingImg} 
                  alt="Computing Device" 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className={styles.productGlow}></div>
              </div>
              <h3>Computing Devices</h3>
              <p>Powerful edge computing solutions optimized for space applications</p>
              <Link to="/products/computing-device" className={styles.productLink}>
                Explore
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M5 15L15 5M15 5H7.5M15 5V12.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <motion.h2
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our <span className={styles.highlight}>Services</span>
          </motion.h2>
          
          <motion.p 
            className={styles.sectionSubtitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            End-to-end hardware solutions for your innovative ideas
          </motion.p>
          
          <motion.div 
            className={styles.servicesGrid}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Custom Design Service */}
            <motion.div 
              className={styles.serviceCard}
              whileHover={{ y: -10, boxShadow: "0 20px 30px rgba(0, 0, 0, 0.2)" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className={styles.serviceCardInner}>
                <div className={styles.flagshipBadge}>
                  <span>Flagship</span>
                </div>
                <div className={styles.serviceIcon}>
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32 8L8 20L32 32L56 20L32 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 44L32 56L56 44" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 32L32 44L56 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>Custom Design</h3>
                <p>From concept to production, we create tailored hardware solutions that meet your exact specifications and requirements.</p>
                <ul className={styles.serviceFeatures}>
                  <li>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M7 10L9 12L13 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    Requirements analysis & specification
                  </li>
                  <li>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M7 10L9 12L13 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    Hardware architecture design
                  </li>
                  <li>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M7 10L9 12L13 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    Functional prototyping & validation
                  </li>
                </ul>
                <Link to="/services/custom-design" className={styles.serviceLink}>
                  Learn more
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M5 10H15M15 10L10 5M15 10L10 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
              <div className={styles.serviceGlow}></div>
            </motion.div>
            
            {/* Computing Device Service */}
            <motion.div 
              className={styles.serviceCard}
              whileHover={{ y: -10, boxShadow: "0 20px 30px rgba(0, 0, 0, 0.2)" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              viewport={{ once: true }}
            >
              <div className={styles.serviceCardInner}>
                <div className={styles.flagshipBadge}>
                  <span>Flagship</span>
                </div>
                <div className={styles.serviceIcon}>
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="12" y="12" width="40" height="30" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 36H52" stroke="currentColor" strokeWidth="2"/>
                    <path d="M32 42V48" stroke="currentColor" strokeWidth="2"/>
                    <path d="M22 48H42" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="32" cy="24" r="6" stroke="currentColor" strokeWidth="2"/>
                    <path d="M32 24V20" stroke="currentColor" strokeWidth="2"/>
                    <path d="M32 24L36 28" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h3>Computing Devices</h3>
                <p>High-performance computing solutions designed for demanding applications in resource-constrained environments.</p>
                <ul className={styles.serviceFeatures}>
                  <li>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M7 10L9 12L13 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    Edge AI processing platforms
                  </li>
                  <li>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M7 10L9 12L13 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    Low-power embedded systems
                  </li>
                  <li>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M7 10L9 12L13 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    Ruggedized industrial computers
                  </li>
                </ul>
                <Link to="/services/computing-devices" className={styles.serviceLink}>
                  Learn more
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M5 10H15M15 10L10 5M15 10L10 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
              <div className={styles.serviceGlow}></div>
            </motion.div>
            
            {/* PCB Design Service */}
            <motion.div 
              className={styles.serviceCard}
              whileHover={{ y: -10, boxShadow: "0 20px 30px rgba(0, 0, 0, 0.2)" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className={styles.serviceCardInner}>
                <div className={styles.flagshipBadge}>
                  <span>Flagship</span>
                </div>
                <div className={styles.serviceIcon}>
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="10" y="10" width="44" height="44" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="18" cy="18" r="3" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="46" cy="18" r="3" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="18" cy="46" r="3" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="46" cy="46" r="3" stroke="currentColor" strokeWidth="2"/>
                    <path d="M18 18L32 32M32 32L46 18M32 32L46 46M32 32L18 46" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="32" cy="32" r="6" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h3>PCB Design</h3>
                <p>Expert printed circuit board design services, from simple two-layer boards to complex multi-layer solutions.</p>
                <ul className={styles.serviceFeatures}>
                  <li>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M7 10L9 12L13 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    Schematic capture & component selection
                  </li>
                  <li>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M7 10L9 12L13 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    High-density & high-speed PCB layout
                  </li>
                  <li>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M7 10L9 12L13 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    Design for manufacturing & testing
                  </li>
                </ul>
                <Link to="/services/pcb-design" className={styles.serviceLink}>
                  Learn more
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M5 10H15M15 10L10 5M15 10L10 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
              <div className={styles.serviceGlow}></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <motion.div 
            className={styles.ctaCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Ready to explore the future of hardware technology?</h2>
            <p>Contact our team to learn about implementation and custom solutions</p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/contact" className={styles.ctaButton}>
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </Layout>
  );
}

export default Home;
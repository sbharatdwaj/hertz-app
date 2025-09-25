import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Layout from '../../components/common/Layout/Layout';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';

// Update these import lines in your Home.jsx file
import satelliteImg from '../../assets/images/products/satellite.png';
import sensorImg from '../../assets/images/products/Sensor.jpg';
import computingImg from '../../assets/images/products/computing.svg'; 

// Add this import for the video
import heroVideo from '../../assets/videos/home_video.mp4';

// Add this import at the top with your other imports
import boardImage from '../../assets/images/backgrounds/board.jpg';

const Home = () => {
  // References for parallax effects
  const heroRef = useRef(null);
  const techRef = useRef(null);
  
  // Scroll progress for parallax
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const { scrollYProgress: techScrollProgress } = useScroll({
    target: techRef,
    offset: ["start end", "end start"]
  });
  
  // Transform values for parallax
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const boardImageY = useTransform(techScrollProgress, [0, 1], ['0%', '30%']);
  
  // Animation controls for sections
  const productsControls = useAnimation();
  const missionControls = useAnimation();
  const featuresControls = useAnimation();
  
  // Intersection observers for triggering animations
  const [productsRef, productsInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [missionRef, missionInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [featuresRef, featuresInView] = useInView({ threshold: 0.1, triggerOnce: true });
  
  // Trigger animations when sections come into view
  useEffect(() => {
    if (productsInView) productsControls.start('visible');
    if (missionInView) missionControls.start('visible');
    if (featuresInView) featuresControls.start('visible');
  }, [productsInView, missionInView, featuresInView, productsControls, missionControls, featuresControls]);
  
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
  
  // Features animation
  const featureVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut"
      }
    })
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

  // Features data
  const features = [
    {
      icon: "🛰️",
      title: "Global Coverage",
      description: "Our satellite network provides comprehensive coverage across the entire planet."
    },
    {
      icon: "⚡",
      title: "Real-time Data",
      description: "Access critical information with minimal latency through our advanced transmission systems."
    },
    {
      icon: "🔋",
      title: "Energy Efficient",
      description: "Cutting-edge power management for optimal performance and extended operational life."
    },
    {
      icon: "🔒",
      title: "Secure Transmission",
      description: "Enterprise-grade encryption and security protocols protect your sensitive data."
    },
    {
      icon: "💾",
      title: "Edge Computing",
      description: "Powerful onboard processing capabilities reduce dependency on ground infrastructure."
    },
    {
      icon: "🔄",
      title: "Adaptable Systems",
      description: "Flexible architecture allows for customization to meet specific mission requirements."
    }
  ];

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
              <Link to="/products/satellite" className={styles.primaryBtn}>
                Explore Platforms
              </Link>
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
      <section className={styles.productsSection} ref={productsRef}>
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
              <Link to="/products/sensor-module" className={styles.productLink}>
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
      
      {/* Mission Statement Section */}
      <section className={styles.missionSection} ref={missionRef}>
        <div className={styles.container}>
          <motion.div 
            className={styles.missionCard}
            variants={missionVariants}
            initial="hidden"
            animate={missionControls}
          >
            <div className={styles.missionContent}>
              <h2>Our <span className={styles.highlight}>Mission</span></h2>
              <p>At OneHertz, we're dedicated to pushing the boundaries of hardware technology. Our mission is to develop innovative solutions that connect the world, enable scientific discovery, and advance human knowledge.</p>
              <p>Through cutting-edge research and development, we strive to make advanced hardware technology more accessible, efficient, and impactful for organizations around the globe.</p>
              <Link to="/about" className={styles.learnMoreLink}>
                Learn more about our story
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M5 10H15M15 10L10 5M15 10L10 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
            <div className={styles.missionGlow}></div>
          </motion.div>
        </div>
      </section>
      
      {/* Technology Section with Parallax */}
      <section ref={techRef} className={styles.technologySection}>
        <motion.div 
          className={styles.techBackground}
          style={{ y: boardImageY }}
        >
          <img src={boardImage} alt="Technology Background" />
          <div className={styles.techOverlay}></div>
        </motion.div>
        
        <div className={styles.container}>
          <motion.h2
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Advanced <span className={styles.highlight}>Features</span>
          </motion.h2>
          
          <motion.div 
            className={styles.featuresGrid}
            ref={featuresRef}
            variants={containerVariants}
            initial="hidden"
            animate={featuresControls}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className={styles.featureCard}
                custom={index}
                variants={featureVariants}
                whileHover={{ 
                  y: -5, 
                  boxShadow: "0 10px 30px rgba(116, 185, 255, 0.2)",
                  borderColor: "rgba(116, 185, 255, 0.5)"
                }}
              >
                <div className={styles.featureIcon}>{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
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
    </Layout>
  );
}

export default Home;
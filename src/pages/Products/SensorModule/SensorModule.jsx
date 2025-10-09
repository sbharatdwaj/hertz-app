import React, { useState, useEffect, useRef } from "react";
import SenseArray from "./SenseArray";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Layout from "../../../components/common/Layout/Layout";
import Footer from "../../../components/common/Footer/Footer";
import styles from "./SensorModule.module.css";
import sensorModuleVideo from "../../../assets/videos/sensor-module.mp4";

const SensorModule = () => {
  const [showSenseArray, setShowSenseArray] = useState(false);
  // State for loading management
  const [isLoading, setIsLoading] = useState(true);
  const [debugInfo, setDebugInfo] = useState("Loading sensor modules...");

  // Intersection observer refs for animations
  const [headerRef, headerInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [productRef, productInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    // Initialize component
    const initializeComponent = () => {
      setDebugInfo("Sensor modules ready!");
      setIsLoading(false);

      // Fade out debug info after 3 seconds
      setTimeout(() => {
        setDebugInfo("");
      }, 3000);
    };

    initializeComponent();
  }, []);

  const navigateToDetails = (productName = "sensarray") => {
    if (productName === "sensarray") {
      setShowSenseArray(true);
    } else {
      console.log(`Navigating to ${productName} details...`);
      // Add your navigation logic here for other products
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  if (showSenseArray) {
    return <SenseArray />;
  }

  return (
    <Layout>
      {/* Debug Info */}
      {debugInfo && <div className={styles.debugInfo}>{debugInfo}</div>}

      <div className={styles.container}>
        {/* Header Section */}
        <motion.section
          ref={headerRef}
          className={styles.headerSection}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h1 className={styles.mainTitle} variants={itemVariants}>
            Sensor Modules
          </motion.h1>
          <motion.p className={styles.mainSubtitle} variants={itemVariants}>
            Advanced environmental and positioning sensors designed for
            satellite deployment. Our rugged, high-precision modules capture
            critical data in the harshest environments with minimal power
            consumption.
          </motion.p>
        </motion.section>

        {/* Product Line Section */}
        <motion.section
          ref={productRef}
          className={styles.productLineSection}
          initial="hidden"
          animate={productInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2 className={styles.sectionTitle} variants={itemVariants}>
            Product Line
          </motion.h2>
          <motion.p
            className={styles.sectionDescription}
            variants={itemVariants}
          >
            Explore our suite of high-performance sensor modules designed for
            diverse space and terrestrial applications.
          </motion.p>

          {/* SensArray Micro Product */}
          <motion.div
            className={styles.productCard}
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className={styles.productHeader}>
              <h3 className={styles.productName}>SensArray™ Micro</h3>
              <p className={styles.productTagline}>
                Multi-Sensor Environmental Monitoring Platform
              </p>
            </div>

            <div className={styles.productContent}>
              {/* Video Section */}
              <div className={styles.mediaSection}>
                <div className={styles.videoContainer}>
                  <video
                    className={styles.productVideo}
                    muted
                    loop
                    autoPlay
                    preload="metadata"
                    playsInline
                    onError={(e) => {
                      e.target.poster = "";
                      e.target.style.background = "#222";
                    }}
                  >
                    <source src={sensorModuleVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>

              {/* Specifications Section */}
              <div className={styles.specsSection}>
                <h4 className={styles.specsTitle}>Technical Specifications</h4>
                
                <div className={styles.specsGrid}>
                  <div className={styles.specItem}>
                    <span className={styles.specLabel}>Dimensions</span>
                    <span className={styles.specValue}>25mm × 25mm × 5mm</span>
                  </div>
                  <div className={styles.specItem}>
                    <span className={styles.specLabel}>Weight</span>
                    <span className={styles.specValue}>12g</span>
                  </div>
                  <div className={styles.specItem}>
                    <span className={styles.specLabel}>Power (Active)</span>
                    <span className={styles.specValue}>150 μW</span>
                  </div>
                  <div className={styles.specItem}>
                    <span className={styles.specLabel}>Operating Range</span>
                    <span className={styles.specValue}>-40°C to +85°C</span>
                  </div>
                </div>

                <div className={styles.viewDetailsSection}>
                  <button
                    className={styles.viewDetailsBtn}
                    onClick={() => navigateToDetails("sensarray")}
                  >
                    <span>View Details</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* EnviroSense Product */}
          <motion.div
            className={styles.productCard}
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className={styles.productHeader}>
              <h3 className={styles.productName}>EnviroSense™</h3>
              <p className={styles.productTagline}>
                Advanced Environmental Monitoring System
              </p>
            </div>

            <div className={styles.productContent}>
              {/* Image Section */}
              <div className={styles.mediaSection}>
                <div className={styles.imageContainer}>
                  <img
                    src="/assets/images/sensors/envirosense/envirosense_1.jpg"
                    alt="EnviroSense Environmental Monitoring System"
                    className={styles.productImage}
                  />
                </div>
              </div>

              {/* Specifications Section */}
              <div className={styles.specsSection}>
                <h4 className={styles.specsTitle}>Technical Specifications</h4>
                
                <div className={styles.specsGrid}>
                  <div className={styles.specItem}>
                    <span className={styles.specLabel}>Dimensions</span>
                    <span className={styles.specValue}>35mm × 25mm × 10mm</span>
                  </div>
                  <div className={styles.specItem}>
                    <span className={styles.specLabel}>Weight</span>
                    <span className={styles.specValue}>22g</span>
                  </div>
                  <div className={styles.specItem}>
                    <span className={styles.specLabel}>Power (Standby)</span>
                    <span className={styles.specValue}>40 μW</span>
                  </div>
                  <div className={styles.specItem}>
                    <span className={styles.specLabel}>Data Storage</span>
                    <span className={styles.specValue}>32MB Flash Memory</span>
                  </div>
                </div>

                <div className={styles.viewDetailsSection}>
                  <button
                    className={styles.viewDetailsBtn}
                    onClick={() => navigateToDetails("envirosense")}
                  >
                    <span>View Details</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>
      </div>
      <Footer />
    </Layout>
  );
};

export default SensorModule;
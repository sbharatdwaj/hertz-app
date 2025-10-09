import React, { useState, useEffect } from "react";
import styles from "./SenseArray.module.css";
import { motion } from "framer-motion";
import sensArrayImage from "../../../assets/images/products/Sensarray-micro/main.png";
import Header from "../../../components/common/Header/Header"; // Import the Header component
import Layout from "../../../components/common/Layout/Layout";
import Footer from "../../../components/common/Footer/Footer";
// At the top of your file
import image1 from "../../../assets/images/products/Sensarray-micro/image1.png";
import image2 from "../../../assets/images/products/Sensarray-micro/image2.png";
import image3 from "../../../assets/images/products/Sensarray-micro/image3.png";
import image4 from "../../../assets/images/products/Sensarray-micro/image4.png";

// Then in your image tags
<img src={image1} alt="..." />

// Then use it in your component:
const SensArrayDetails = () => {
  // State for tab switching in specs section
  const [activeTab, setActiveTab] = useState('specifications');
  
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6 }
    }
  };

  return (
    <>
    <Header />
    <div className={styles.productPage}>
      {/* Product Section - Black Background */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.productInfo}>
            <motion.h1 
              className={styles.productTitle}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              SensArray™ Micro
            </motion.h1>
            
            <motion.p 
              className={styles.productTagline}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ delay: 0.1 }}
            >
              Multi-Sensor Environmental Monitoring Platform
            </motion.p>
            
            <motion.p 
              className={styles.productDescription}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ delay: 0.2 }}
            >
              The SensArray™ Micro is our most advanced multi-sensor array designed specifically 
              for CubeSat and small satellite applications. This ultra-compact sensor array 
              integrates multiple high-precision environmental and positional sensors into a 
              single 25mm × 25mm package.
            </motion.p>
            
            <motion.div 
              className={styles.productStats}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ delay: 0.3 }}
            >
              <div className={styles.statItem}>
                <span className={styles.statValue}>25mm²</span>
                <span className={styles.statLabel}>Form Factor</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>12g</span>
                <span className={styles.statLabel}>Weight</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>10+</span>
                <span className={styles.statLabel}>Sensor Types</span>
              </div>
            </motion.div>
            
            <motion.div 
              className={styles.actionButtons}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ delay: 0.4 }}
            >
              <button className={styles.buyButton}>
                Request Quote
              </button>
              <button className={styles.outlineButton}>
                Download Datasheet
              </button>
            </motion.div>
          </div>
          
          <motion.div 
            className={styles.productImageContainer}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img 
               src={sensArrayImage}
               alt="SensArray™ Micro" 
               className={styles.productImage}
               onError={(e) => {
    console.log("Image failed to load, using placeholder");
    e.target.onerror = null;
    e.target.src = '/assets/placeholder.jpg';
  }}
/>
          </motion.div>
        </div>
      </section>
       
     

{/* Product Features Section - Alternating Layout */}


<section className={styles.featuresSection}>
  <div className={styles.container}>
    <motion.h2 
      className={styles.sectionTitle}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      Product Features
    </motion.h2>
    
    {/* Feature 1 - Image on LEFT */}
    <motion.div 
      className={styles.featureRow} // Regular row
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className={styles.featureImage}>
        <img 
          src={image1}
          alt="SensArray™ Micro Sensor Array" 
          onError={(e) => {
            console.log("Image failed to load, using placeholder");
            e.target.onerror = null;
            e.target.src = '/assets/placeholder.jpg';
          }}
        />
      </div>
      <div className={styles.featureContent}>
        <h3>Advanced Sensor Array</h3>
        <p>
          The SensArray™ Micro integrates 10+ high-precision sensors in a single compact package. 
          With temperature, humidity, pressure, accelerometer, gyroscope, magnetometer, and more, 
          it provides comprehensive environmental monitoring with minimal power consumption.
        </p>
        <ul className={styles.featurePoints}>
          <li>10+ sensors in a single 25mm × 25mm board</li>
          <li>Individual sensor calibration for maximum accuracy</li>
          <li>Programmable sampling rates for each sensor type</li>
        </ul>
      </div>
    </motion.div>
    
    {/* Feature 2 - Image on RIGHT */}
    <motion.div 
      className={styles.featureRowReverse} // This one has the reverse class WITHOUT the regular class
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      <div className={styles.featureImage}>
        <img 
          src={image2} 
          alt="SensArray™ Micro Radiation Hardening" 
          onError={(e) => {
            console.log("Image failed to load, using placeholder");
            e.target.onerror = null;
            e.target.src = '/assets/placeholder.jpg';
          }}
        />
      </div>
      <div className={styles.featureContent}>
        <h3>Space-Grade Reliability</h3>
        <p>
          Built for the harshest environments, the SensArray™ Micro features radiation-hardened 
          components and extensive temperature testing. Its robust design ensures reliable 
          operation in low Earth orbit, deep space missions, and other extreme environments.
        </p>
        <ul className={styles.featurePoints}>
          <li>Radiation tolerance up to 100 krad (Si)</li>
          <li>Operating temperature range from -40°C to +85°C</li>
          <li>Vibration and shock tested to NASA GSFC-STD-7000A</li>
        </ul>
      </div>
    </motion.div>
    
    {/* Feature 3 - Image on LEFT */}
    <motion.div 
      className={styles.featureRow} // Regular row again
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className={styles.featureImage}>
        <img 
          src={image3} 
          alt="SensArray™ Micro Power Management" 
          onError={(e) => {
            console.log("Image failed to load, using placeholder");
            e.target.onerror = null;
            e.target.src = '/assets/placeholder.jpg';
          }}
        />
      </div>
      <div className={styles.featureContent}>
        <h3>Ultra-Low Power Consumption</h3>
        <p>
          Designed for power-constrained satellite platforms, the SensArray™ Micro 
          features advanced power management circuitry that allows for micro-watt 
          level operation and multiple power states to optimize for different mission phases.
        </p>
        <ul className={styles.featurePoints}>
          <li>25 μW standby power consumption</li>
          <li>150 μW typical active power</li>
          <li>Programmable sleep modes with scheduled wake-ups</li>
        </ul>
      </div>
    </motion.div>
    
    {/* Feature 4 - Image on RIGHT */}
    <motion.div 
      className={styles.featureRowReverse} // Reverse class only
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <div className={styles.featureImage}>
        <img 
          src={image4}
          alt="SensArray™ Micro Communications" 
          onError={(e) => {
            console.log("Image failed to load, using placeholder");
            e.target.onerror = null;
            e.target.src = '/assets/placeholder.jpg';
          }}
        />
      </div>
      <div className={styles.featureContent}>
        <h3>Advanced Communication</h3>
        <p>
          The SensArray™ Micro supports multiple communication protocols, enabling 
          seamless integration with various host systems. Its flexible interface 
          options make it suitable for a wide range of applications and platforms.
        </p>
        <ul className={styles.featurePoints}>
          <li>I2C, SPI, and UART interfaces</li>
          <li>Optional LoRaWAN for long-range wireless communication</li>
          <li>Built-in data compression for efficient transmission</li>
        </ul>
      </div>
    </motion.div>
  </div>
</section>

      {/* Specs Section - Grey Gradient Background */}
      <section className={styles.specsSection}>
        <div className={styles.container}>
          <motion.h2 
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Technical Specifications
          </motion.h2>
          
          <motion.div 
            className={styles.tabsContainer}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.tabs}>
              <button 
                className={`${styles.tab} ${activeTab === 'specifications' ? styles.activeTab : ''}`}
                onClick={() => setActiveTab('specifications')}
              >
                Specifications
              </button>
              <button 
                className={`${styles.tab} ${activeTab === 'sensors' ? styles.activeTab : ''}`}
                onClick={() => setActiveTab('sensors')}
              >
                Sensor Capabilities
              </button>
            </div>
            
            {activeTab === 'specifications' && (
              <div className={styles.specsContent}>
                <div className={styles.specsGrid}>
                  <div className={styles.specColumn}>
                    <h3>Physical</h3>
                    
                    <div className={styles.specItem}>
                      <span className={styles.specLabel}>Dimensions</span>
                      <span className={styles.specValue}>25mm × 25mm × 5mm</span>
                    </div>
                    
                    <div className={styles.specItem}>
                      <span className={styles.specLabel}>Weight</span>
                      <span className={styles.specValue}>12g</span>
                    </div>
                    
                    <div className={styles.specItem}>
                      <span className={styles.specLabel}>Operating Range</span>
                      <span className={styles.specValue}>-40°C to +85°C</span>
                    </div>
                    
                    <div className={styles.specItem}>
                      <span className={styles.specLabel}>Storage Temperature</span>
                      <span className={styles.specValue}>-55°C to +125°C</span>
                    </div>
                  </div>
                  
                  <div className={styles.specColumn}>
                    <h3>Electrical</h3>
                    
                    <div className={styles.specItem}>
                      <span className={styles.specLabel}>Power (Standby)</span>
                      <span className={styles.specValue}>25 μW</span>
                    </div>
                    
                    <div className={styles.specItem}>
                      <span className={styles.specLabel}>Power (Active)</span>
                      <span className={styles.specValue}>150 μW</span>
                    </div>
                    
                    <div className={styles.specItem}>
                      <span className={styles.specLabel}>Supply Voltage</span>
                      <span className={styles.specValue}>1.8V - 3.6V</span>
                    </div>
                    
                    <div className={styles.specItem}>
                      <span className={styles.specLabel}>Data Rate</span>
                      <span className={styles.specValue}>1 sample/second</span>
                    </div>
                  </div>
                  
                  <div className={styles.specColumn}>
                    <h3>Communication</h3>
                    
                    <div className={styles.specItem}>
                      <span className={styles.specLabel}>Interfaces</span>
                      <span className={styles.specValue}>LoRaWAN, Bluetooth 5.0</span>
                    </div>
                    
                    <div className={styles.specItem}>
                      <span className={styles.specLabel}>Radiation Tolerance</span>
                      <span className={styles.specValue}>100 krad (Si)</span>
                    </div>
                    
                    <div className={styles.specItem}>
                      <span className={styles.specLabel}>Wireless Range</span>
                      <span className={styles.specValue}>15km (LoRaWAN)</span>
                    </div>
                    
                    <div className={styles.specItem}>
                      <span className={styles.specLabel}>Certification</span>
                      <span className={styles.specValue}>Space-grade</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'sensors' && (
              <div className={styles.sensorContent}>
                <ul className={styles.featuresList}>
                  {[
                    "Temperature: ±0.1°C accuracy",
                    "Humidity: ±2% RH precision",
                    "Pressure: ±0.1 hPa resolution",
                    "Accelerometer: 3-axis, ±16g range",
                    "Gyroscope: 3-axis, ±2000°/s",
                    "Magnetometer: 3-axis, ±50 gauss",
                    "Light Sensor: UV/Visible/IR spectrum",
                    "Gas Detection: CO₂, VOC, NOₓ",
                    "GPS: Sub-meter accuracy",
                    "Vibration: Frequency analysis",
                  ].map((feature, index) => (
                    <li key={index} className={styles.featureItem}>
                      <span className={styles.featureIcon}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Applications Section - Black Background */}
      <section className={styles.applicationsSection}>
        <div className={styles.container}>
          <motion.h2 
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Applications
          </motion.h2>
          
          <motion.p 
            className={styles.sectionDescription}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            The SensArray™ Micro is designed for diverse space applications
          </motion.p>
          
          <div className={styles.applicationBoxes}>
            {[
              {
                icon: "🛰",
                title: "Satellite Deployment",
                description: "Environmental monitoring in space applications with radiation-hardened design and ultra-low power consumption. Perfect for CubeSat missions with its compact form factor."
              },
              {
                icon: "🏭",
                title: "Industrial IoT",
                description: "Remote monitoring of industrial equipment, predictive maintenance, and process optimization in harsh environments. Supports critical infrastructure monitoring."
              },
              {
                icon: "🌾",
                title: "Environmental Research",
                description: "Climate monitoring, weather stations, air quality assessment, and ecological research platforms. Enables high-precision data collection in remote locations."
              }
            ].map((app, index) => (
              <motion.div 
                key={index} 
                className={styles.applicationBox}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className={styles.applicationIcon}>{app.icon}</div>
                <h3 className={styles.applicationTitle}>{app.title}</h3>
                <p className={styles.applicationDescription}>{app.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
};

export default SensArrayDetails;
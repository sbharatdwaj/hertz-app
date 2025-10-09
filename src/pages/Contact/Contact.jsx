import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Footer from '../../components/common/Footer/Footer';
import Layout from '../../components/common/Layout/Layout';
import styles from './Contact.module.css';

const Contact = () => {
    const [formRef, formInView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const [mapRef, mapInView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    return (
        <Layout>
            <div className={styles.contactPage}>
                {/* Hero Section */}
                <section className={styles.contactHero}>
                    <div className={styles.heroOverlay}></div>
                    <div className={styles.container}>
                        <motion.div 
                            className={styles.heroContent}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1>Get in <span className={styles.highlight}>Touch</span></h1>
                            <p>We'd love to hear from you. Let's build something amazing together.</p>
                        </motion.div>
                    </div>
                </section>

                {/* Contact Form and Info Section */}
                <section className={styles.contactSection}>
                    <div className={styles.container}>
                        <div className={styles.contactGrid}>
                            {/* Contact Form */}
                            <motion.div 
                                className={styles.formContainer}
                                ref={formRef}
                                initial={{ opacity: 0, x: -30 }}
                                animate={formInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                <h2>Send us a Message</h2>
                                <form className={styles.contactForm}>
                                    <div className={styles.formRow}>
                                        <div className={styles.formGroup}>
                                            <label htmlFor="name">Full Name</label>
                                            <input 
                                                type="text" 
                                                id="name" 
                                                name="name" 
                                                placeholder="Your name" 
                                                required 
                                            />
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label htmlFor="email">Email Address</label>
                                            <input 
                                                type="email" 
                                                id="email" 
                                                name="email" 
                                                placeholder="your.email@example.com" 
                                                required 
                                            />
                                        </div>
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="subject">Subject</label>
                                        <input 
                                            type="text" 
                                            id="subject" 
                                            name="subject" 
                                            placeholder="How can we help you?" 
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="message">Message</label>
                                        <textarea 
                                            id="message" 
                                            name="message" 
                                            rows="5" 
                                            placeholder="Tell us about your project, requirements, or questions..." 
                                            required
                                        ></textarea>
                                    </div>
                                    <motion.button 
                                        type="submit" 
                                        className={styles.submitButton}
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.97 }}
                                    >
                                        Send Message
                                    </motion.button>
                                </form>
                            </motion.div>

                            {/* Contact Info */}
                            <motion.div 
                                className={styles.contactInfo}
                                ref={mapRef}
                                initial={{ opacity: 0, x: 30 }}
                                animate={mapInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                <h2>Contact Information</h2>
                                <div className={styles.infoCard}>
                                    <div className={styles.infoItem}>
                                        <div className={styles.infoIcon}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="#0984e3"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <h3>Address</h3>
                                            <p>123 Tech Parkway, Innovation Center<br />Bengaluru, 560001, India</p>
                                        </div>
                                    </div>
                                    <div className={styles.infoItem}>
                                        <div className={styles.infoIcon}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="#0984e3"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <h3>Email</h3>
                                            <p>info@onehertz.com</p>
                                            <p>support@onehertz.com</p>
                                        </div>
                                    </div>
                                    <div className={styles.infoItem}>
                                        <div className={styles.infoIcon}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M20.01 15.38C18.78 15.38 17.59 15.18 16.48 14.82C16.13 14.7 15.74 14.79 15.47 15.06L13.9 17.03C11.07 15.68 8.42 13.13 7.01 10.2L8.96 8.54C9.23 8.26 9.31 7.87 9.2 7.52C8.83 6.41 8.64 5.22 8.64 3.99C8.64 3.45 8.19 3 7.65 3H4.19C3.65 3 3 3.24 3 3.99C3 13.28 10.73 21 20.01 21C20.72 21 21 20.37 21 19.82V16.37C21 15.83 20.55 15.38 20.01 15.38Z" fill="#0984e3"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <h3>Phone</h3>
                                            <p>+91 (80) 4567-8900</p>
                                            <p>+91 98765 43210</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className={styles.socialConnect}>
                                    <h3>Connect With Us</h3>
                                    <div className={styles.socialIcons}>
                                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28 9.09 5.11 7.38 3 4.79C2.63 5.42 2.42 6.16 2.42 6.94C2.42 8.43 3.17 9.75 4.33 10.5C3.62 10.5 2.96 10.3 2.38 10V10.03C2.38 12.11 3.86 13.85 5.82 14.24C5.19 14.41 4.53 14.44 3.89 14.31C4.16 15.14 4.69 15.86 5.39 16.38C6.09 16.9 6.94 17.19 7.81 17.21C6.18 18.5 4.17 19.18 2.1 19.15C1.75 19.15 1.4 19.13 1.05 19.09C3.06 20.44 5.4 21.17 7.8 21.17C16.01 21.17 20.51 14.47 20.51 8.63V8.04C21.35 7.42 22.06 6.66 22.64 5.78L22.46 6Z" fill="#0984e3"/>
                                            </svg>
                                        </a>
                                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H6.5V10H9V17ZM7.75 8.75C6.8 8.75 6 7.95 6 7C6 6.05 6.8 5.25 7.75 5.25C8.7 5.25 9.5 6.05 9.5 7C9.5 7.95 8.7 8.75 7.75 8.75ZM18 17H15.5V13.25C15.5 12.45 14.95 11.75 14.15 11.75C13.35 11.75 12.5 12.45 12.5 13.25V17H10V10H12.5V11.25C12.9 10.65 13.9 10 14.95 10C16.65 10 18 11.35 18 13.25V17Z" fill="#0984e3"/>
                                            </svg>
                                        </a>
                                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M12 2C6.48 2 2 6.48 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21C9.5 20.77 9.5 20.14 9.5 19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26C14.5 19.6 14.5 20.68 14.5 21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 6.48 17.52 2 12 2Z" fill="#0984e3"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Map Section */}
                <section className={styles.mapSection}>
                    <div className={styles.mapContainer}>
                        {/* Replace with actual Google Maps or other map embed */}
                        <div className={styles.mapPlaceholder}>
                            <div className={styles.mapOverlay}>
                                <div className={styles.mapPin}>
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="#0984e3"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className={styles.faqSection}>
                    <div className={styles.container}>
                        <motion.h2 
                            className={styles.sectionTitle}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            Frequently Asked <span className={styles.highlight}>Questions</span>
                        </motion.h2>
                        <div className={styles.faqGrid}>
                            <motion.div 
                                className={styles.faqItem}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                viewport={{ once: true }}
                            >
                                <h3>What products do you offer?</h3>
                                <p>We offer a range of hardware solutions including satellite platforms, sensor modules, and computing devices for IoT, AI, and connectivity applications.</p>
                            </motion.div>
                            <motion.div 
                                className={styles.faqItem}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <h3>Do you offer custom hardware solutions?</h3>
                                <p>Yes, we specialize in creating custom hardware solutions tailored to your specific requirements. Contact us to discuss your project needs.</p>
                            </motion.div>
                            <motion.div 
                                className={styles.faqItem}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                viewport={{ once: true }}
                            >
                                <h3>What industries do you serve?</h3>
                                <p>We serve various industries including aerospace, IoT, telecommunications, research institutions, and enterprises requiring advanced hardware solutions.</p>
                            </motion.div>
                            <motion.div 
                                className={styles.faqItem}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                viewport={{ once: true }}
                            >
                                <h3>How long does product development take?</h3>
                                <p>Development timelines vary based on project complexity. Typical projects range from 3-6 months, but we can provide a more accurate estimate after discussing your requirements.</p>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </Layout>
    );
};

export default Contact;
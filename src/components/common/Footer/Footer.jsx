import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import logo from '../../../assets/images/logo.png';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.footerRow}>
                    <div className={styles.leftSpace}></div>
                    
                    <div className={styles.footerLogoGroup}>
                        <Link to="/" className={styles.footerLogo}>
                            <img src={logo} alt="OneHertzLabs Logo" />
                        </Link>
                        <p>&copy; {currentYear} OneHertzLabs. All rights reserved.</p>
                    </div>
                    
                    <div className={styles.footerLegal}>
                        <Link to="/privacy">Privacy Policy</Link>
                        <span className={styles.divider}>|</span>
                        <Link to="/terms">Terms of Service</Link>
                        <span className={styles.divider}>|</span>
                        <Link to="/sitemap">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
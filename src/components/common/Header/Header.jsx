import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../../../assets/images/logo.png'; // Add your logo file to this path

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProducts = () => {
    setIsProductsOpen(!isProductsOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsProductsOpen(false);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Link to="/" className={styles.logo}>
            <img src={logo} alt="HertZ Logo" />
          </Link>
        </div>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}>
          <ul className={styles.navList}>
            <li className={location.pathname === '/' ? styles.active : ''}>
              <Link to="/" onClick={closeMenu}>Home</Link>
            </li>
            <li className={location.pathname === '/about' ? styles.active : ''}>
              <Link to="/about" onClick={closeMenu}>About</Link>
            </li>
            <li className={`${styles.hasDropdown} ${isProductsOpen ? styles.open : ''}`}>
              <button 
                className={`${styles.dropdownToggle} ${location.pathname.includes('/products') ? styles.active : ''}`}
                onClick={toggleProducts}
              >
                Products
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <ul className={`${styles.dropdown} ${isProductsOpen ? styles.show : ''}`}>
                <li className={location.pathname === '/products/satellite' ? styles.active : ''}>
                  <Link to="/products/satellite" onClick={closeMenu}>Satellite</Link>
                </li>
                <li className={location.pathname === '/products/sensor-module' ? styles.active : ''}>
                  <Link to="/products/sensor-module" onClick={closeMenu}>Sensor Module</Link>
                </li>
                <li className={location.pathname === '/products/computing-device' ? styles.active : ''}>
                  <Link to="/products/computing-device" onClick={closeMenu}>Computing Device</Link>
                </li>
              </ul>
            </li>
            <li className={location.pathname === '/contact' ? styles.active : ''}>
              <Link to="/contact" onClick={closeMenu}>Contact</Link>
            </li>
          </ul>
        </nav>

        <div className={styles.actions}>
          <Link to="/contact" className={styles.ctaButton}>
            Get in Touch
          </Link>
          <button 
            className={`${styles.mobileMenuToggle} ${isMenuOpen ? styles.open : ''}`} 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
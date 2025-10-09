import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../../../assets/images/logo.png';

// Import your product images
import satelliteImg from '../../../assets/images/products/product1.png';
import sensorImg from '../../../assets/images/products/product2.png';
import computingImg from '../../../assets/images/products/product3.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const products = [
    {
      id: 1,
      name: 'Satellite',
      route: '/products/satellite',
      image: satelliteImg,
      status: 'Order',
      hasDocument: true
    },
    {
      id: 2,
      name: 'Sensor Module',
      route: '/products/sense-array',
      image: sensorImg,
      status: 'Order',
      hasDocument: true
    },
    {
      id: 3,
      name: 'Computing Device',
      route: '/products/computing-device',
      image: computingImg,
      status: 'Coming soon',
      hasDocument: false
    }
  ];

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
            <li className={styles.hasDropdown}>
              <span className={`${styles.dropdownToggle} ${location.pathname.includes('/products') ? styles.active : ''}`}>
                Products
              </span>
              <div className={styles.megaMenu}>
                <div className={styles.productsGrid}>
                  {products.map(product => (
                    <Link 
                      key={product.id}
                      to={product.route}
                      className={styles.productCard}
                      onClick={closeMenu}
                    >
                      <div className={styles.productImage}>
                        <img src={product.image} alt={product.name} />
                      </div>
                      <div className={styles.productInfo}>
                        <h3 className={styles.productName}>{product.name}</h3>
                        <div className={styles.productActions}>
                          <span className={`${styles.status} ${product.status === 'Coming soon' ? styles.comingSoon : ''}`}>
                            {product.status}
                          </span>
                          {product.hasDocument && (
                            <span className={styles.documentLink}>Document</span>
                          )}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
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
import React, { useState, useEffect } from 'react';
import { Menu, X, Plane, Search, User, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Destinations', href: '#' },
    { name: 'Tours', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container glass">
        <div className="nav-content">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="logo"
          >
            <Plane className="logo-icon" size={28} />
            <span className="logo-text">Vindy<span>Tour</span></span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="desktop-links">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="nav-link"
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          <div className="nav-actions">
            <button className="icon-btn search-btn">
              <Search size={20} />
            </button>
            <button className="icon-btn user-btn">
              <User size={20} />
            </button>
            <button className="book-btn">
              Book Now
            </button>
            <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mobile-menu glass"
          >
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="mobile-link" onClick={() => setIsOpen(false)}>
                {link.name}
              </a>
            ))}
            <div className="mobile-actions">
              <button className="mobile-book-btn">Book Your Trip</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

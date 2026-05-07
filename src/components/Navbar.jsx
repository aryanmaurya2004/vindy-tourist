import React, { useState, useEffect } from 'react';
import { 
  Home, 
  Compass, 
  Zap, 
  Package, 
  Utensils, 
  BookOpen, 
  Users, 
  Globe, 
  Sun, 
  Moon, 
  UserCircle,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', icon: <Home size={18} />, href: '#' },
    { name: 'Explore', icon: <Compass size={18} />, href: '#' },
    { name: 'AI Planner', icon: <Zap size={18} />, href: '#' },
    { name: 'Packages', icon: <Package size={18} />, href: '#' },
    { name: 'Stay & Food', icon: <Utensils size={18} />, href: '#' },
    { name: 'Stories', icon: <BookOpen size={18} />, href: '#' },
    { name: 'Community', icon: <Users size={18} />, href: '#' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container glass">
        <div className="nav-content">
          <div className="logo">
            <div className="logo-circle">
              <Compass size={20} />
            </div>
            <span className="logo-text">Wanderlust</span>
          </div>

          {/* Desktop Nav */}
          <div className="desktop-links">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link">
                {link.icon}
                <span>{link.name}</span>
              </a>
            ))}
          </div>

          <div className="nav-actions">
            <div className="nav-meta">
              <button className="meta-btn">
                <Globe size={18} />
                <span>EN</span>
              </button>
              <button className="meta-btn">
                <span>$ USD</span>
              </button>
            </div>

            <button className="theme-toggle" onClick={() => setIsDark(!isDark)}>
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button className="my-trips-btn">
              <UserCircle size={20} />
              <span>My Trips</span>
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mobile-menu glass"
          >
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="mobile-link" onClick={() => setIsOpen(false)}>
                {link.icon}
                <span>{link.name}</span>
              </a>
            ))}
            <div className="mobile-footer">
              <button className="mobile-action-btn">My Trips</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

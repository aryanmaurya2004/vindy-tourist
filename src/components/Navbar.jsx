import React, { useState, useEffect, useRef } from 'react';
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
  X,
  ChevronDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = ({ setView, currentView, language, setLanguage, t, theme, setTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showLang, setShowLang] = useState(false);
  const [showCurrency, setShowCurrency] = useState(false);
  const [currency, setCurrency] = useState('USD');
  const langRef = useRef(null);
  const currencyRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langRef.current && !langRef.current.contains(event.target)) {
        setShowLang(false);
      }
      if (currencyRef.current && !currencyRef.current.contains(event.target)) {
        setShowCurrency(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.home, icon: <Home size={18} />, href: '#', view: 'home' },
    { name: t.explore, icon: <Compass size={18} />, href: '#', view: 'explore' },
    { name: t.planner, icon: <Zap size={18} />, href: '#', view: 'planner' },
    { name: t.packages, icon: <Package size={18} />, href: '#', view: 'packages' },
    { name: t.stayfood, icon: <Utensils size={18} />, href: '#', view: 'stayfood' },
    { name: t.stories, icon: <BookOpen size={18} />, href: '#', view: 'stories' },
    { name: t.community, icon: <Users size={18} />, href: '#', view: 'community' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container glass">
        <div className="nav-content">
          <div className="logo" onClick={() => setView('home')} style={{ cursor: 'pointer' }}>
            <div className="logo-circle">
              <Compass size={20} />
            </div>
            <span className="logo-text">Vindy Tourist</span>
          </div>

          {/* Desktop Nav */}
          <div className="desktop-links">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`nav-link ${currentView === link.view ? 'active' : ''}`}
                onClick={(e) => {
                  if (link.view) {
                    e.preventDefault();
                    setView(link.view);
                  }
                }}
              >
                {link.icon}
                <span>{link.name}</span>
              </a>
            ))}
          </div>

          <div className="nav-actions">
            <div className="nav-meta">
              {/* Language Dropdown */}
              <div className="dropdown-container" ref={langRef}>
                <button className="meta-btn" onClick={() => { setShowLang(!showLang); setShowCurrency(false); }}>
                  <Globe size={18} />
                  <span>{language}</span>
                  <ChevronDown size={14} className={showLang ? 'rotate' : ''} />
                </button>
                <AnimatePresence>
                  {showLang && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="dropdown-menu glass"
                    >
                      {['English', 'Hindi', 'Español'].map((lang) => (
                        <button 
                          key={lang} 
                          className="dropdown-item"
                          onClick={() => {
                            setLanguage(lang === 'English' ? 'EN' : lang === 'Hindi' ? 'HI' : 'ES');
                            setShowLang(false);
                          }}
                        >
                          {lang}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Currency Dropdown */}
              <div className="dropdown-container" ref={currencyRef}>
                <button className="meta-btn" onClick={() => { setShowCurrency(!showCurrency); setShowLang(false); }}>
                  <span>{currency === 'USD' ? '$' : currency === 'INR' ? '₹' : currency === 'EUR' ? '€' : currency === 'GBP' ? '£' : '¥'} {currency}</span>
                  <ChevronDown size={14} className={showCurrency ? 'rotate' : ''} />
                </button>
                <AnimatePresence>
                  {showCurrency && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="dropdown-menu glass"
                    >
                      {['USD', 'INR', 'EUR', 'GBP', 'JPY'].map((cur) => (
                        <button 
                          key={cur} 
                          className="dropdown-item"
                          onClick={() => {
                            setCurrency(cur);
                            setShowCurrency(false);
                          }}
                        >
                          {cur === 'USD' ? '$ USD' : cur === 'INR' ? '₹ INR' : cur === 'EUR' ? '€ EUR' : cur === 'GBP' ? '£ GBP' : '¥ JPY'}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <button className="theme-toggle" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button 
              className={`my-trips-btn ${currentView === 'mytrips' ? 'active' : ''}`} 
              onClick={() => setView('mytrips')}
            >
              <UserCircle size={20} />
              <span>{t.mytrips}</span>
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
              <a 
                key={link.name} 
                href={link.href} 
                className={`mobile-link ${currentView === link.view ? 'active' : ''}`}
                onClick={(e) => {
                  if (link.view) {
                    e.preventDefault();
                    setView(link.view);
                  }
                  setIsOpen(false);
                }}
              >
                {link.icon}
                <span>{link.name}</span>
              </a>
            ))}
            <div className="mobile-footer">
              <div className="mobile-meta">
                <div className="mobile-meta-section">
                  <span className="mobile-meta-label">Language</span>
                  <div className="mobile-meta-grid">
                    {['EN', 'HI', 'ES'].map(lang => (
                      <button 
                        key={lang} 
                        className={`mobile-meta-item ${language === lang ? 'active' : ''}`}
                        onClick={() => setLanguage(lang)}
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="mobile-meta-section">
                  <span className="mobile-meta-label">Currency</span>
                  <div className="mobile-meta-grid">
                    {['USD', 'INR', 'EUR', 'GBP', 'JPY'].map(cur => (
                      <button 
                        key={cur} 
                        className={`mobile-meta-item ${currency === cur ? 'active' : ''}`}
                        onClick={() => setCurrency(cur)}
                      >
                        {cur}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <button 
                className={`mobile-action-btn ${currentView === 'mytrips' ? 'active' : ''}`}
                onClick={() => { setView('mytrips'); setIsOpen(false); }}
              >
                {t.mytrips}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

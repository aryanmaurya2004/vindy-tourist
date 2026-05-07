import React from 'react';
import Navbar from './components/Navbar';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Users, ArrowRight } from 'lucide-react';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="hero-text"
            >
              <span className="badge">Explore the World</span>
              <h1>Adventure Awaits In Every Corner</h1>
              <p>Discover breathtaking destinations, unique cultures, and unforgettable experiences with VindyTour.</p>
              
              <div className="search-bar glass">
                <div className="search-item">
                  <MapPin size={20} className="search-icon" />
                  <div className="search-info">
                    <label>Location</label>
                    <input type="text" placeholder="Where to?" />
                  </div>
                </div>
                <div className="search-divider"></div>
                <div className="search-item">
                  <Calendar size={20} className="search-icon" />
                  <div className="search-info">
                    <label>Date</label>
                    <input type="text" placeholder="When?" />
                  </div>
                </div>
                <div className="search-divider"></div>
                <div className="search-item">
                  <Users size={20} className="search-icon" />
                  <div className="search-info">
                    <label>Travelers</label>
                    <input type="text" placeholder="How many?" />
                  </div>
                </div>
                <button className="search-submit">
                  <ArrowRight size={24} />
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Section placeholder */}
        <section className="featured-section">
          <div className="container">
            <div className="section-header">
              <h2>Popular Destinations</h2>
              <p>Handpicked locations for your next escape</p>
            </div>
            {/* Grid would go here */}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

import React from 'react';
import Navbar from './components/Navbar';
import { motion } from 'framer-motion';
import { 
  Search, 
  MapPin, 
  DollarSign, 
  Compass, 
  Zap, 
  ArrowRight,
  Flame,
  Music,
  Heart,
  Sparkles,
  Mountain
} from 'lucide-react';
import './App.css';

function App() {
  const moods = [
    { name: 'Chill', emoji: '😌' },
    { name: 'Adventure', emoji: '🧗' },
    { name: 'Party', emoji: '🥳' },
    { name: 'Spiritual', emoji: '🧘' },
    { name: 'Romantic', emoji: '💕' },
  ];

  return (
    <div className="app">
      <Navbar />
      
      <main>
        <section className="hero-section">
          {/* Background Image is set in CSS */}
          <div className="hero-overlay"></div>
          
          <div className="hero-container">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="hero-content"
            >
              <h1 className="hero-title">
                Don't just visit,<br />
                <span className="gradient-text">experience the world</span>
              </h1>
              
              <p className="hero-subtitle">
                Discover hidden gems, plan with AI, and create memories that last forever
              </p>

              <div className="search-container glass">
                <div className="search-inputs">
                  <div className="input-group">
                    <label>Where to?</label>
                    <div className="input-with-icon">
                      <MapPin size={16} />
                      <input type="text" placeholder="Search destinations" />
                    </div>
                  </div>
                  <div className="input-divider"></div>
                  <div className="input-group">
                    <label>Budget range</label>
                    <div className="input-with-icon">
                      <DollarSign size={16} />
                      <input type="text" placeholder="Select budget" />
                    </div>
                  </div>
                  <div className="input-divider"></div>
                  <div className="input-group">
                    <label>Travel type</label>
                    <div className="input-with-icon">
                      <Compass size={16} />
                      <input type="text" placeholder="Select type" />
                    </div>
                  </div>
                </div>
                
                <div className="search-buttons">
                  <button className="btn-search">
                    <Search size={18} />
                    <span>Search Destinations</span>
                  </button>
                  <button className="btn-ai">
                    <Sparkles size={18} />
                    <span>Plan My Trip with AI</span>
                  </button>
                </div>
              </div>

              <div className="travel-moods">
                <span>Travel mood:</span>
                <div className="mood-chips">
                  {moods.map((mood) => (
                    <button key={mood.name} className="mood-chip">
                      <span>{mood.emoji}</span>
                      <span>{mood.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

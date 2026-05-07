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
  Mountain,
  Users
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

  const travelStyles = [
    { name: 'Adventure', icon: <Mountain size={24} />, color: '#f97316' },
    { name: 'Beach', icon: <Compass size={24} />, color: '#0ea5e9' },
    { name: 'Spiritual', icon: <Sparkles size={24} />, color: '#eab308' },
    { name: 'Culture', icon: <Users size={24} />, color: '#10b981' },
    { name: 'Romantic', icon: <Heart size={24} />, color: '#ec4899' },
    { name: 'Nature', icon: <Zap size={24} />, color: '#22c55e' },
  ];

  const hotDestinations = [
    {
      id: 1,
      name: 'Bali',
      country: 'Indonesia',
      rating: 4.8,
      price: '$500 - $2,000',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=600',
      trending: true
    },
    {
      id: 2,
      name: 'Kyoto',
      country: 'Japan',
      rating: 4.9,
      price: '$800 - $3,000',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=600',
      trending: true
    },
    {
      id: 3,
      name: 'Rajasthan',
      country: 'India',
      rating: 4.6,
      price: '$300 - $1,500',
      image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=600',
      trending: true
    },
    {
      id: 4,
      name: 'Iceland',
      country: 'Iceland',
      rating: 4.8,
      price: '$2,000 - $6,000',
      image: 'https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&q=80&w=600',
      trending: true
    }
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

        {/* Travel Style Section */}
        <section className="style-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">What's your travel style?</h2>
              <p className="section-subtitle">Choose your vibe and we'll find the perfect destination for you</p>
            </div>
            
            <div className="style-grid">
              {travelStyles.map((style) => (
                <motion.div 
                  key={style.name}
                  whileHover={{ y: -10 }}
                  className="style-card glass"
                >
                  <div className="style-icon" style={{ backgroundColor: style.color }}>
                    {style.icon}
                  </div>
                  <span>{style.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Hot Destinations Section */}
        <section className="destinations-section">
          <div className="container">
            <div className="section-top">
              <div className="trending-label">
                <Sparkles size={16} />
                <span>TRENDING NOW</span>
              </div>
              <div className="section-header-flex">
                <h2 className="section-title">Hot destinations</h2>
                <a href="#" className="view-all">View all <ArrowRight size={16} /></a>
              </div>
            </div>

            <div className="destinations-grid">
              {hotDestinations.map((dest) => (
                <motion.div 
                  key={dest.id}
                  whileHover={{ y: -5 }}
                  className="dest-card"
                >
                  <div className="dest-image">
                    <img src={dest.image} alt={dest.name} />
                    {dest.trending && <span className="trending-badge">Trending</span>}
                  </div>
                  <div className="dest-info">
                    <div className="dest-rating">
                      <Sparkles size={14} className="star-icon" />
                      <span>{dest.rating}</span>
                    </div>
                    <h3>{dest.name}</h3>
                    <p className="dest-country">{dest.country}</p>
                    <p className="dest-price">{dest.price}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Budget Trips Section */}
        <section className="destinations-section budget-section">
          <div className="container">
            <div className="section-top">
              <div className="budget-label">
                <DollarSign size={16} />
                <span>BUDGET TRIPS</span>
              </div>
              <div className="section-header-flex">
                <h2 className="section-title">Amazing trips, less money</h2>
                <a href="#" className="view-all">View all <ArrowRight size={16} /></a>
              </div>
            </div>
            
            <div className="destinations-grid">
              {/* Reusing same grid for demo */}
              {[hotDestinations[2], hotDestinations[0]].map((dest) => (
                <motion.div 
                  key={`budget-${dest.id}`}
                  whileHover={{ y: -5 }}
                  className="dest-card"
                >
                  <div className="dest-image">
                    <img src={dest.image} alt={dest.name} />
                  </div>
                  <div className="dest-info">
                    <div className="dest-rating">
                      <Sparkles size={14} className="star-icon" />
                      <span>{dest.rating}</span>
                    </div>
                    <h3>{dest.name}</h3>
                    <p className="dest-country">{dest.country}</p>
                    <p className="dest-price">{dest.price}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

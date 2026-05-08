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
  Users,
  Star
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

  const budgetDestinations = [
    { id: 'b1', name: 'Goa', country: 'India', image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2', rating: 4.5, price: 'From $200' },
    { id: 'b2', name: 'Rajasthan', country: 'India', image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41', rating: 4.6, price: 'From $300' },
    { id: 'b3', name: 'Marrakech', country: 'Morocco', image: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70', rating: 4.7, price: 'From $400' },
    { id: 'b4', name: 'Bali', country: 'Indonesia', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4', rating: 4.8, price: 'From $500' }
  ];

  const hiddenGems = [
    { id: 'h1', name: 'Santorini', country: 'Greece', image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80' },
    { id: 'h2', name: 'Temple Gates', country: 'Bali', image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80' },
    { id: 'h3', name: 'Blue City', country: 'Morocco', image: 'https://images.unsplash.com/photo-1523301343968-6a6ebf63c672?auto=format&fit=crop&w=800&q=80' }
  ];

  const curatedPackages = [
    {
      id: 'p1',
      title: 'Bali Romance Escape',
      category: 'Honeymoon',
      duration: '7 days',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4',
      description: 'A dreamy 7-day honeymoon through Bali\'s most romantic spots. Private villa stays, sunset dinners...'
    },
    {
      id: 'p2',
      title: 'Rajasthan Royal Heritage',
      category: 'Cultural',
      duration: '9 days',
      image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41',
      description: 'A majestic 8-day journey through Rajasthan\'s forts, palaces, and deserts. Live like a king in...'
    },
    {
      id: 'p3',
      title: 'Iceland Ring Road Adventure',
      category: 'Adventure',
      duration: '10 days',
      image: 'https://images.unsplash.com/photo-1476610182048-b716b8518aae',
      description: 'An epic 10-day road trip around Iceland\'s Ring Road. Glaciers, volcanoes, hot springs, and more...'
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
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="dest-card"
                >
                  <div className="dest-image-wrapper">
                    <img src={dest.image} alt={dest.name} className="dest-img" />
                    <div className="dest-overlay">
                      {dest.trending && <span className="trending-tag">Trending</span>}
                      <button className="wishlist-btn">
                        <Heart size={18} />
                      </button>
                    </div>
                  </div>
                  <div className="dest-details">
                    <div className="dest-header">
                      <h3>{dest.name}</h3>
                      <div className="dest-rating">
                        <Star size={14} fill="currentColor" />
                        <span>{dest.rating}</span>
                      </div>
                    </div>
                    <p className="dest-location">
                      <MapPin size={12} />
                      {dest.country}
                    </p>
                    <div className="dest-footer">
                      <span className="price-tag">{dest.price}</span>
                      <button className="book-small-btn">Book Now</button>
                    </div>
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
              {budgetDestinations.map((dest) => (
                <motion.div 
                  key={dest.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="dest-card"
                >
                  <div className="dest-image-wrapper">
                    <img src={dest.image} alt={dest.name} className="dest-img" />
                    <div className="dest-overlay">
                      <span className="budget-badge">Budget</span>
                    </div>
                  </div>
                  <div className="dest-details">
                    <h3>{dest.name}</h3>
                    <p className="dest-location">{dest.country}</p>
                    <p className="price-tag">{dest.price}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="section-spacer" style={{ height: '4rem' }}></div>

          <div className="container">
            <div className="section-top">
              <div className="budget-label" style={{ color: '#0fb9b1' }}>
                <Sparkles size={16} />
                <span>HIDDEN GEMS</span>
              </div>
              <div className="section-header-flex">
                <h2 className="section-title">Not on Instagram yet</h2>
                <a href="#" className="view-all">Explore more <ArrowRight size={16} /></a>
              </div>
            </div>

            <div className="destinations-grid">
              {hiddenGems.map((dest) => (
                <motion.div 
                  key={dest.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="dest-card"
                >
                  <div className="dest-image-wrapper">
                    <img src={dest.image} alt={dest.name} className="dest-img" />
                    <div className="dest-overlay">
                      <span className="hidden-badge">Hidden Gem</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="section-spacer" style={{ height: '6rem' }}></div>

          <div className="container">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="ai-plan-section"
            >
              <div className="ai-plan-card">
                <div className="ai-plan-content">
                  <div className="ai-label-pill">
                    <Sparkles size={14} className="sparkle-icon" />
                    <span>AI-Powered Planning</span>
                  </div>
                  <h2 className="ai-plan-title">Let AI plan your <br/> perfect trip</h2>
                  <p className="ai-plan-description">
                    Tell us your budget, days, and interests. Our AI creates a custom 
                    itinerary with the best hotels, food spots, and hidden gems.
                  </p>
                  <div className="ai-plan-footer">
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="ai-main-btn"
                    >
                      <Sparkles size={20} />
                      <span>Plan My Trip Now</span>
                    </motion.button>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="ai-blob blob-1"></div>
                <div className="ai-blob blob-2"></div>
                <div className="ai-blob blob-3"></div>
              </div>
            </motion.div>
          </div>

          <div className="section-spacer" style={{ height: '6rem' }}></div>

          <div className="container">
            <div className="section-top">
              <div className="section-header-flex">
                <div>
                  <h2 className="section-title">Curated packages</h2>
                  <p className="section-subtitle">Handpicked trips for every kind of traveler</p>
                </div>
                <a href="#" className="view-all">All packages <ArrowRight size={16} /></a>
              </div>
            </div>

            <div className="destinations-grid">
              {curatedPackages.map((pkg) => (
                <motion.div 
                  key={pkg.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="package-card"
                >
                  <div className="package-image-wrapper">
                    <img src={pkg.image} alt={pkg.title} className="package-img" />
                    <div className="package-badge">{pkg.category}</div>
                  </div>
                  <div className="package-details">
                    <h3>{pkg.title}</h3>
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

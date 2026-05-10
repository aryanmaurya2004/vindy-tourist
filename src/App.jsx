import React from 'react';
import Navbar from './components/Navbar';
import Explore from './components/Explore';
import AIPlanner from './components/AIPlanner';
import Packages from './components/Packages';
import StayFood from './components/StayFood';
import Stories from './components/Stories';
import Community from './components/Community';
import MyTrips from './components/MyTrips';
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
  Star,
  Play,
  Cloud,
  Send,
  Mail,
  Phone,
  Globe
} from 'lucide-react';
import './App.css';

function App() {
  const [currentView, setCurrentView] = React.useState('home');

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

  const travelStories = [
    {
      id: 's1',
      title: 'Sunrise at Uluwatu Temple - the most magical morning of my life',
      user: 'Sarah Chen',
      avatar: 'https://i.pravatar.cc/150?u=sarah',
      image: 'https://images.unsplash.com/photo-1552053831-71594a27632d',
      video: true
    },
    {
      id: 's2',
      title: 'Northern Lights finally appeared after 3 nights of waiting!',
      user: 'Marco Rossi',
      avatar: 'https://i.pravatar.cc/150?u=marco',
      image: 'https://images.unsplash.com/photo-1531366930491-81559758f2d8',
      video: true
    },
    {
      id: 's3',
      title: 'Desert night under a billion stars in Jaisalmer',
      user: 'Priya Sharma',
      avatar: 'https://i.pravatar.cc/150?u=priya',
      image: 'https://images.unsplash.com/photo-1473580044384-7ba9967e16a0',
      video: true
    },
    {
      id: 's4',
      title: 'That iconic Oia sunset - photos don\'t do it justice',
      user: 'Emma Wilson',
      avatar: 'https://i.pravatar.cc/150?u=emma',
      image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077',
      video: true
    }
  ];

  return (
    <div className="app">
      <div className="main-bg-animation">
        <div className="bg-orb orb-1"></div>
        <div className="bg-orb orb-2"></div>
        <div className="bg-orb orb-3"></div>
        <div className="bg-orb orb-4"></div>
      </div>
      <Navbar setView={setCurrentView} currentView={currentView} />

      <main>
        {currentView === 'home' ? (
          <>
            <section className="hero-section">
              <div className="hero-bg-image"></div>
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
                    <a href="#" className="view-all" onClick={(e) => { e.preventDefault(); setCurrentView('explore'); }}>View all <ArrowRight size={16} /></a>
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
                    <a href="#" className="view-all" onClick={(e) => { e.preventDefault(); setCurrentView('explore'); }}>View all <ArrowRight size={16} /></a>
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
                    <a href="#" className="view-all" onClick={(e) => { e.preventDefault(); setCurrentView('explore'); }}>Explore more <ArrowRight size={16} /></a>
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
                    <a href="#" className="view-all" onClick={(e) => { e.preventDefault(); setCurrentView('packages'); }}>All packages <ArrowRight size={16} /></a>
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
                        <p>{pkg.description}</p>
                        <div className="package-footer">
                          <span className="package-duration">
                            <Compass size={14} />
                            {pkg.duration}
                          </span>
                          <button className="book-small-btn">Explore</button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="section-spacer" style={{ height: '6rem' }}></div>

              <div className="container">
                <div className="section-top">
                  <div className="section-header-flex">
                    <div>
                      <h2 className="section-title">Travel stories</h2>
                      <p className="section-subtitle">Real experiences from real travelers</p>
                    </div>
                    <a href="#" className="view-all" onClick={(e) => { e.preventDefault(); setCurrentView('stories'); }}>Watch all <ArrowRight size={16} /></a>
                  </div>
                </div>

                <div className="stories-grid">
                  {travelStories.map((story) => (
                    <motion.div
                      key={story.id}
                      whileHover={{ y: -10 }}
                      className="story-card"
                    >
                      <div className="story-image-wrapper">
                        <img src={story.image} alt={story.title} className="story-img" />
                        <div className="story-overlay">
                          <div className="play-btn-wrapper">
                            <Play size={20} fill="white" />
                          </div>
                          <div className="story-content">
                            <p className="story-title">{story.title}</p>
                            <div className="story-user">
                              <img src={story.avatar} alt={story.user} className="user-avatar" />
                              <span>{story.user}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="section-spacer" style={{ height: '6rem' }}></div>

              {/* Weather Section */}
              <div className="container">
                <div className="weather-section">
                  <div className="weather-card glass">
                    <div className="weather-header">
                      <Cloud size={40} className="weather-main-icon" />
                      <h2 className="section-title">Weather-based suggestions</h2>
                      <p className="section-subtitle">Smart destination swaps based on weather conditions</p>
                    </div>

                    <div className="weather-content">
                      <div className="weather-status">
                        <Sparkles size={18} />
                        <span>Hot Summer</span>
                      </div>
                      <div className="weather-suggestion">
                        <span className="skip-text">Skip <span className="highlight-red">Rajasthan</span></span>
                        <ArrowRight size={20} />
                        <span className="go-text">Go to <span className="highlight-green">Iceland</span></span>
                      </div>
                      <p className="weather-desc">Cool glaciers and midnight sun</p>
                    </div>

                    <div className="weather-footer">
                      <div className="pagination-dots">
                        <span className="dot active"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                      </div>
                      <button className="weather-btn">
                        <Cloud size={18} />
                        <span>Check Weather Suggestions</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="section-spacer" style={{ height: '6rem' }}></div>

              {/* Explore Near You Section */}
              <div className="container">
                <div className="explore-near-section">
                  <div className="explore-header">
                    <Send size={40} className="explore-main-icon" />
                    <h2 className="section-title">Explore near you</h2>
                    <p className="section-subtitle">Discover amazing destinations close to your current location</p>
                  </div>
                  <button className="explore-near-btn">
                    <Send size={18} />
                    <span>Find Nearby Places</span>
                  </button>
                </div>
              </div>
            </section>
          </>
        ) : currentView === 'explore' ? (
          <Explore />
        ) : currentView === 'planner' ? (
          <AIPlanner />
        ) : currentView === 'packages' ? (
          <Packages />
        ) : currentView === 'stayfood' ? (
          <StayFood />
        ) : currentView === 'stories' ? (
          <Stories />
        ) : currentView === 'mytrips' ? (
          <MyTrips />
        ) : (
          <Community />
        )}
      </main>

      {/* Footer Section */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-logo">
                <Globe size={24} />
                <span>Wanderlust</span>
              </div>
              <p className="footer-desc">
                Don't just visit, experience the world. We craft journeys that transform the way you see the planet.
              </p>
              <div className="social-links">
                <a href="#"><Globe size={20} /></a>
                <a href="#"><Globe size={20} /></a>
                <a href="#"><Globe size={20} /></a>
              </div>
            </div>

            <div className="footer-column">
              <h3>Explore</h3>
              <ul>
                <li><a href="#">Destinations</a></li>
                <li><a href="#">AI Trip Planner</a></li>
                <li><a href="#">Tour Packages</a></li>
                <li><a href="#">Stay & Food</a></li>
                <li><a href="#">Travel Stories</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Support</h3>
              <ul>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Travel Guides</a></li>
                <li><a href="#">Booking Policy</a></li>
                <li><a href="#">Cancellation</a></li>
                <li><a href="#">FAQs</a></li>
              </ul>
            </div>

            <div className="footer-column contact-column">
              <h3>Get in Touch</h3>
              <div className="contact-card glass">
                <div className="contact-item">
                  <div className="contact-icon">
                    <Mail size={18} />
                  </div>
                  <div className="contact-text">
                    <label>Email Us</label>
                    <a href="mailto:hello@wanderlust.travel">hello@wanderlust.travel</a>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <Phone size={18} />
                  </div>
                  <div className="contact-text">
                    <label>Call Us</label>
                    <a href="tel:+918303319119">+91 8303319119</a>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <MapPin size={18} />
                  </div>
                  <div className="contact-text">
                    <label>Visit Us</label>
                    <span>123 Travel Lane, San Francisco, CA 94102</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2026 Wanderlust. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

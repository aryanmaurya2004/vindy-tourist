import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Clock, Star, MapPin, X, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import './Packages.css';

const Packages = () => {
  const [selectedPkg, setSelectedPkg] = React.useState(null);

  const packages = [
    {
      id: 1,
      title: 'Bali Romance Escape',
      category: 'Honeymoon',
      duration: '7 Days / 6 Nights',
      price: '$1,299',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800',
      location: 'Uluwatu, Bali',
      description: 'Experience the ultimate romantic getaway in the heart of Bali. This curated package combines luxury villas, private beach dinners, and spiritual temple visits for a truly unforgettable experience.',
      highlights: ['Private Pool Villa', 'Candlelight Dinner', 'Flower Bath', 'Sunset Cruise'],
      itinerary: [
        { day: 1, title: 'Arrival & Spa', desc: 'Transfer to your private villa followed by a 2-hour Balinese couple massage.' },
        { day: 2, title: 'Uluwatu Temple', desc: 'Visit the cliffside temple and watch the traditional Kecak Fire Dance.' },
        { day: 3, title: 'Island Hopping', desc: 'Private boat tour to Nusa Penida and snorkeling at Crystal Bay.' }
      ]
    },
    {
      id: 2,
      title: 'Swiss Alps Adventure',
      category: 'Adventure',
      duration: '10 Days / 9 Nights',
      price: '$2,499',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1531210483974-4f8c1f33fd35?auto=format&fit=crop&q=80&w=800',
      location: 'Zermatt, Switzerland',
      description: 'A thrilling journey through the snow-capped peaks of the Swiss Alps. Perfect for adrenaline junkies and nature lovers alike.',
      highlights: ['Ski Pass Included', 'Glacier Express', 'Mountain Hiking', 'Cheese Tasting'],
      itinerary: [
        { day: 1, title: 'Zurich to Zermatt', desc: 'Scenic train ride to the car-free village of Zermatt.' },
        { day: 2, title: 'Matterhorn Views', desc: 'Cable car ride to Matterhorn Glacier Paradise for 360° views.' },
        { day: 3, title: 'Mountain Biking', desc: 'Guided downhill biking through alpine meadows.' }
      ]
    },
    {
      id: 3,
      title: 'Tokyo City Lights',
      category: 'Cultural',
      duration: '6 Days / 5 Nights',
      price: '$1,899',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1540959733332-e946670b24b6?auto=format&fit=crop&q=80&w=800',
      location: 'Shinjuku, Japan',
      description: 'Discover the perfect blend of ancient tradition and futuristic technology in the world\'s most vibrant metropolis.',
      highlights: ['Sushi Workshop', 'Robot Show', 'Harajuku Tour', 'Mt. Fuji Day Trip'],
      itinerary: [
        { day: 1, title: 'Neon Nights', desc: 'Guided night tour of Shinjuku and Omoide Yokocho.' },
        { day: 2, title: 'Asakusa & Meiji', desc: 'Visit Tokyo\'s oldest temple and the peaceful Meiji Shrine.' },
        { day: 3, title: 'Fuji Excursion', desc: 'Day trip to Lake Kawaguchi for the best views of Mt. Fuji.' }
      ]
    }
  ];

  return (
    <div className="packages-page">
      <div className="container">
        <header className="page-header">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="page-title"
          >
            Curated Packages
          </motion.h1>
          <p className="page-subtitle">Handpicked experiences for every kind of traveler</p>
        </header>

        <div className="packages-grid">
          {packages.map(pkg => (
            <motion.div 
              key={pkg.id}
              whileHover={{ y: -10 }}
              className="package-card glass"
            >
              <div className="package-img-wrapper">
                <img src={pkg.image} alt={pkg.title} />
                <div className="package-tag">{pkg.category}</div>
              </div>
              <div className="package-info">
                <div className="package-meta">
                  <span className="pkg-duration"><Clock size={14} /> {pkg.duration}</span>
                  <span className="pkg-rating"><Star size={14} fill="#eab308" color="#eab308" /> {pkg.rating}</span>
                </div>
                <h3>{pkg.title}</h3>
                <p className="pkg-location"><MapPin size={14} /> {pkg.location}</p>
                <div className="package-footer">
                  <div className="pkg-price">
                    <span className="from">From</span>
                    <span className="amount">{pkg.price}</span>
                  </div>
                  <button className="pkg-btn" onClick={() => setSelectedPkg(pkg)}>Explore</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detail View */}
        <AnimatePresence>
          {selectedPkg && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="pkg-detail-overlay"
              onClick={() => setSelectedPkg(null)}
            >
              <motion.div 
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="pkg-detail-modal glass"
                onClick={e => e.stopPropagation()}
              >
                <button className="close-detail" onClick={() => setSelectedPkg(null)}>
                  <X size={24} />
                </button>
                
                <div className="modal-content">
                  <div className="modal-hero">
                    <img src={selectedPkg.image} alt={selectedPkg.title} />
                    <div className="modal-hero-text">
                      <div className="modal-category">{selectedPkg.category}</div>
                      <h2>{selectedPkg.title}</h2>
                      <p><MapPin size={16} /> {selectedPkg.location}</p>
                    </div>
                  </div>

                  <div className="modal-body">
                    <div className="modal-main">
                      <section className="modal-section">
                        <h3>About the Experience</h3>
                        <p>{selectedPkg.description}</p>
                      </section>

                      <section className="modal-section">
                        <h3>Itinerary Highlights</h3>
                        <div className="modal-itinerary">
                          {selectedPkg.itinerary.map(item => (
                            <div key={item.day} className="itinerary-item">
                              <div className="day-circle">{item.day}</div>
                              <div className="day-info">
                                <h4>{item.title}</h4>
                                <p>{item.desc}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </section>
                    </div>

                    <div className="modal-sidebar">
                      <div className="booking-card glass">
                        <div className="price-display">
                          <span className="price-label">Total Package Price</span>
                          <span className="price-val">{selectedPkg.price}</span>
                        </div>
                        <div className="stats-grid">
                          <div className="stat">
                            <Clock size={16} />
                            <span>{selectedPkg.duration}</span>
                          </div>
                          <div className="stat">
                            <Star size={16} fill="#eab308" color="#eab308" />
                            <span>{selectedPkg.rating} Rating</span>
                          </div>
                        </div>
                        <div className="highlights-list">
                          {selectedPkg.highlights.map(h => (
                            <div key={h} className="highlight">
                              <CheckCircle2 size={16} color="#10b981" />
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>
                        <button className="book-now-btn">Book This Trip</button>
                        <p className="secure-text"><ShieldCheck size={14} /> Secure Booking Guaranteed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Packages;

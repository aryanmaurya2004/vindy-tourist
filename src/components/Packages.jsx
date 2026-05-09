import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Clock, Star, MapPin } from 'lucide-react';
import './Packages.css';

const Packages = () => {
  const packages = [
    {
      id: 1,
      title: 'Bali Romance Escape',
      category: 'Honeymoon',
      duration: '7 Days / 6 Nights',
      price: '$1,299',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800',
      location: 'Uluwatu, Bali'
    },
    {
      id: 2,
      title: 'Swiss Alps Adventure',
      category: 'Adventure',
      duration: '10 Days / 9 Nights',
      price: '$2,499',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1531210483974-4f8c1f33fd35?auto=format&fit=crop&q=80&w=800',
      location: 'Zermatt, Switzerland'
    },
    {
      id: 3,
      title: 'Tokyo City Lights',
      category: 'Cultural',
      duration: '6 Days / 5 Nights',
      price: '$1,899',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1540959733332-e946670b24b6?auto=format&fit=crop&q=80&w=800',
      location: 'Shinjuku, Japan'
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
                  <button className="pkg-btn">Explore</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Packages;

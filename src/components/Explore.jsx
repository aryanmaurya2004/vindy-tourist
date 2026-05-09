import React, { useState } from 'react';
import { 
  Search, 
  MapPin, 
  Filter, 
  Grid, 
  Map as MapIcon, 
  Star, 
  Heart,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { motion } from 'framer-motion';
import './Explore.css';

const Explore = () => {
  const [view, setView] = useState('grid');
  const [searchQuery, setSearchQuery] = useState('');

  const destinations = [
    {
      id: 1,
      name: 'Bali',
      country: 'Indonesia',
      rating: 4.8,
      price: '$500+',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800',
      description: 'Tropical paradise with temples, rice terraces, and surf.',
      tags: ['Beach', 'Culture', 'Spiritual'],
      bestTime: 'Apr - Oct',
      type: 'Tropical',
      status: 'Trending'
    },
    {
      id: 2,
      name: 'Kyoto',
      country: 'Japan',
      rating: 4.9,
      price: '$800+',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800',
      description: 'Ancient capital with temples, geisha, and cherry blossoms.',
      tags: ['Culture', 'Spiritual', 'Nature'],
      bestTime: 'Mar - May, Oct - Nov',
      type: 'Temperate',
      status: 'Trending'
    },
    {
      id: 3,
      name: 'Santorini',
      country: 'Greece',
      rating: 4.7,
      price: '$1,000+',
      image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=800',
      description: 'Iconic white-and-blue island with legendary sunsets.',
      tags: ['Beach', 'Romantic', 'Culture'],
      bestTime: 'Jun - Sep',
      type: 'Mediterranean',
      status: ''
    },
    {
      id: 4,
      name: 'Patagonia',
      country: 'Chile/Argentina',
      rating: 4.9,
      price: '$1,500+',
      image: 'https://images.unsplash.com/photo-1517700201646-136b334139e8?auto=format&fit=crop&q=80&w=800',
      description: 'Stunning glaciers, mountains, and wildlife in the far south.',
      tags: ['Adventure', 'Nature', 'Hiking'],
      bestTime: 'Dec - Mar',
      type: 'Alpine',
      status: 'Hidden Gem'
    },
    {
      id: 5,
      name: 'Rajasthan',
      country: 'India',
      rating: 4.6,
      price: '$300+',
      image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=800',
      description: 'Royal heritage, desert forts, and vibrant colors.',
      tags: ['Culture', 'Heritage', 'Desert'],
      bestTime: 'Oct - Mar',
      type: 'Desert',
      status: 'Trending'
    },
    {
      id: 6,
      name: 'Iceland',
      country: 'Iceland',
      rating: 4.8,
      price: '$2,000+',
      image: 'https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&q=80&w=800',
      description: 'Land of fire and ice, aurora borealis, and volcanic landscapes.',
      tags: ['Adventure', 'Nature', 'Aurora'],
      bestTime: 'Sep - Mar (Aurora), Jun-Aug',
      type: 'Arctic',
      status: 'Trending'
    }
  ];

  return (
    <div className="explore-page">
      <div className="explore-container">
        <header className="explore-header-section">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="explore-title"
          >
            Explore Destinations
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="explore-subtitle"
          >
            Find your next adventure on the map
          </motion.p>

          <div className="explore-controls glass">
            <div className="search-bar-wrapper">
              <Search size={18} className="search-icon" />
              <input 
                type="text" 
                placeholder="Search destinations..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="control-buttons">
              <button className="control-btn filter-btn">
                <Filter size={18} />
                <span>Filters</span>
              </button>
              <div className="view-toggle">
                <button 
                  className={`toggle-btn ${view === 'grid' ? 'active' : ''}`}
                  onClick={() => setView('grid')}
                >
                  <Grid size={18} />
                  <span>Grid</span>
                </button>
                <button 
                  className={`toggle-btn ${view === 'map' ? 'active' : ''}`}
                  onClick={() => setView('map')}
                >
                  <MapIcon size={18} />
                  <span>Map</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        <div className="destinations-layout">
          {view === 'grid' ? (
            <div className="explore-grid">
              {destinations.map((dest) => (
                <motion.div 
                  key={dest.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -8 }}
                  className="explore-card glass"
                >
                  <div className="card-image-container">
                    <img src={dest.image} alt={dest.name} className="card-img" />
                    {dest.status && (
                      <div className={`card-status ${dest.status.toLowerCase().replace(' ', '-')}`}>
                        {dest.status === 'Trending' ? <Sparkles size={12} /> : null}
                        <span>{dest.status}</span>
                      </div>
                    )}
                    <button className="card-wishlist">
                      <Heart size={18} />
                    </button>
                    <div className="card-rating">
                      <Star size={14} fill="#eab308" color="#eab308" />
                      <span>{dest.rating}</span>
                    </div>
                  </div>
                  <div className="card-info">
                    <div className="card-header">
                      <div className="card-title-group">
                        <h3>{dest.name}</h3>
                        <p className="card-location">
                          <MapPin size={12} />
                          {dest.country}
                        </p>
                      </div>
                      <span className="card-price">{dest.price}</span>
                    </div>
                    <p className="card-description">{dest.description}</p>
                    <div className="card-tags">
                      {dest.tags.map(tag => (
                        <span key={tag} className="card-tag">{tag}</span>
                      ))}
                    </div>
                    <div className="card-footer">
                      <span className="card-meta">
                        {dest.type} • Best: {dest.bestTime}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="map-placeholder glass">
              <MapIcon size={64} />
              <h3>Interactive Map coming soon</h3>
              <p>Explore destinations through our spatial interface.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Explore;

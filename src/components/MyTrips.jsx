import React, { useState } from 'react';
import { 
  Heart, 
  Bookmark, 
  Ticket, 
  Sparkles, 
  Trash2, 
  MapPin, 
  Star,
  User
} from 'lucide-react';
import { motion } from 'framer-motion';
import './MyTrips.css';

const MyTrips = () => {
  const [activeTab, setActiveTab] = useState('wishlist');

  const wishlistItems = [
    {
      id: 1,
      name: 'Bali',
      country: 'Indonesia',
      rating: 4.8,
      price: '$500+',
      type: 'Tropical',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=300'
    },
    {
      id: 2,
      name: 'Kyoto',
      country: 'Japan',
      rating: 4.9,
      price: '$800+',
      type: 'Temperate',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=300'
    },
    {
      id: 3,
      name: 'Iceland',
      country: 'Iceland',
      rating: 4.8,
      price: '$2,000+',
      type: 'Arctic / Subarctic',
      image: 'https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&q=80&w=300'
    }
  ];

  const tabs = [
    { id: 'wishlist', label: 'Wishlist', icon: <Heart size={16} />, count: 3 },
    { id: 'saved', label: 'Saved Trips', icon: <Bookmark size={16} />, count: 2 },
    { id: 'bookings', label: 'Bookings', icon: <Ticket size={16} />, count: 2 },
    { id: 'aipicks', label: 'AI Picks', icon: <Sparkles size={16} />, count: 3 },
  ];

  return (
    <div className="mytrips-page">
      <div className="mytrips-container">
        {/* User Profile Header */}
        <header className="mytrips-header">
          <div className="user-profile-info">
            <div className="user-avatar-large">
              <User size={32} />
            </div>
            <div className="user-text">
              <h1>Travel Explorer</h1>
              <p>explorer@wanderlust.travel</p>
            </div>
          </div>
        </header>

        {/* Sub-nav Tabs */}
        <div className="mytrips-tabs-wrapper">
          <div className="mytrips-tabs glass">
            {tabs.map((tab) => (
              <button 
                key={tab.id}
                className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.icon}
                <span>{tab.label}</span>
                <span className="tab-count">{tab.count}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content List */}
        <div className="mytrips-content">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="trips-list"
          >
            {activeTab === 'wishlist' && wishlistItems.map((item) => (
              <div key={item.id} className="trip-item-row glass">
                <div className="item-img">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="item-details">
                  <div className="item-main">
                    <h3>{item.name}</h3>
                    <p className="item-location">
                      <MapPin size={12} />
                      {item.country}
                    </p>
                    <div className="item-meta">
                      <div className="meta-rating">
                        <Star size={14} fill="#eab308" color="#eab308" />
                        <span>{item.rating}</span>
                      </div>
                      <span className="meta-price">{item.price}</span>
                      <span className="meta-type">{item.type}</span>
                    </div>
                  </div>
                  <button className="delete-btn">
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}

            {activeTab !== 'wishlist' && (
              <div className="empty-state glass">
                <p>No items found in {tabs.find(t => t.id === activeTab)?.label}</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MyTrips;

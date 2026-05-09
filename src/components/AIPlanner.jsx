import React, { useState } from 'react';
import { 
  Sparkles, 
  MapPin, 
  DollarSign, 
  Calendar, 
  Users, 
  Zap,
  ChevronRight
} from 'lucide-react';
import { motion } from 'framer-motion';
import './AIPlanner.css';

const AIPlanner = () => {
  const [budget, setBudget] = useState(2000);
  const [duration, setDuration] = useState(7);
  const [travelType, setTravelType] = useState('Solo');
  const [interests, setInterests] = useState(['Culture']);

  const interestOptions = [
    'Adventure', 'Beach', 'Culture', 'Spiritual', 'Nature', 
    'Nightlife', 'Photography', 'Food', 'History', 'Wildlife',
    'Surfing', 'Hiking', 'Yoga', 'Diving', 'Shopping'
  ];

  const toggleInterest = (interest) => {
    if (interests.includes(interest)) {
      setInterests(interests.filter(i => i !== interest));
    } else {
      setInterests([...interests, interest]);
    }
  };

  return (
    <div className="planner-page">
      <div className="planner-container">
        <header className="planner-header">
          <div className="ai-badge">
            <Zap size={14} />
            <span>AI-Powered</span>
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="planner-title"
          >
            AI Trip Planner
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="planner-subtitle"
          >
            Tell us your preferences and our AI will craft the perfect itinerary
          </motion.p>
        </header>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="planner-form glass"
        >
          {/* Destination */}
          <div className="form-section">
            <label className="form-label">
              <MapPin size={18} />
              <span>Destination</span>
            </label>
            <div className="input-wrapper">
              <input 
                type="text" 
                placeholder="Where do you want to go? (leave blank for AI suggestion)" 
                className="planner-input"
              />
            </div>
          </div>

          {/* Budget */}
          <div className="form-section">
            <div className="section-header">
              <label className="form-label">
                <DollarSign size={18} />
                <span>Budget: ${budget.toLocaleString()}</span>
              </label>
            </div>
            <div className="slider-wrapper">
              <input 
                type="range" 
                min="200" 
                max="10000" 
                step="100" 
                value={budget}
                onChange={(e) => setBudget(parseInt(e.target.value))}
                className="planner-slider"
              />
              <div className="slider-labels">
                <span>$200</span>
                <span>$10,000</span>
              </div>
            </div>
            <div className="ai-suggestion-box">
              <div className="suggestion-header">
                <Sparkles size={14} />
                <span>Best trips at your price</span>
              </div>
              <p>Bali ($500+), Kyoto ($800+), Santorini ($1,000+)</p>
            </div>
          </div>

          {/* Duration */}
          <div className="form-section">
            <label className="form-label">
              <Calendar size={18} />
              <span>Duration: {duration} days</span>
            </label>
            <div className="slider-wrapper">
              <input 
                type="range" 
                min="2" 
                max="21" 
                value={duration}
                onChange={(e) => setDuration(parseInt(e.target.value))}
                className="planner-slider"
              />
              <div className="slider-labels">
                <span>2 days</span>
                <span>21 days</span>
              </div>
            </div>
          </div>

          {/* Travel Type */}
          <div className="form-section">
            <label className="form-label">
              <Users size={18} />
              <span>Travel Type</span>
            </label>
            <div className="type-grid">
              {['Solo', 'Couple', 'Family', 'Group'].map(type => (
                <button 
                  key={type}
                  className={`type-btn ${travelType === type ? 'active' : ''}`}
                  onClick={() => setTravelType(type)}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div className="form-section">
            <label className="form-label">
              <Zap size={18} />
              <span>Interests</span>
            </label>
            <div className="interests-cloud">
              {interestOptions.map(interest => (
                <button 
                  key={interest}
                  className={`interest-tag ${interests.includes(interest) ? 'active' : ''}`}
                  onClick={() => toggleInterest(interest)}
                >
                  {interest}
                </button>
              ))}
            </div>
          </div>

          {/* Action Button */}
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="generate-btn"
          >
            <Sparkles size={20} />
            <span>Generate My Trip</span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default AIPlanner;

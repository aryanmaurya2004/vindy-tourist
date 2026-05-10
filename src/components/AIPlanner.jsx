import React, { useState } from 'react';
import { 
  Sparkles, 
  MapPin, 
  DollarSign, 
  Calendar, 
  Users, 
  Zap,
  ChevronRight,
  RotateCw,
  Sun,
  Navigation,
  GlassWater,
  Info,
  ChevronDown
} from 'lucide-react';
import { motion } from 'framer-motion';
import './AIPlanner.css';

const AIPlanner = () => {
  const [budget, setBudget] = useState(2000);
  const [duration, setDuration] = useState(7);
  const [travelType, setTravelType] = useState('Solo');
  const [interests, setInterests] = useState(['Culture']);
  const [destination, setDestination] = useState('');
  const [isGenerated, setIsGenerated] = useState(false);
  const [activeDay, setActiveDay] = useState(1);

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

  const handleGenerate = () => {
    setIsGenerated(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetPlanner = () => {
    setIsGenerated(false);
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

        {!isGenerated ? (
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
                  placeholder="Where do you want to go? (e.g. Santorini)" 
                  className="planner-input"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
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
              onClick={handleGenerate}
            >
              <Sparkles size={20} />
              <span>Generate My Trip</span>
            </motion.button>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="itinerary-view"
          >
            {/* Itinerary Header */}
            <div className="itinerary-header glass">
              <div className="itinerary-title-box">
                <h2 className="dest-name">{destination || 'Santorini'}</h2>
                <p className="duration-text">{duration}-day itinerary</p>
              </div>
              <button className="new-trip-btn" onClick={resetPlanner}>
                <RotateCw size={18} />
                <span>New Trip</span>
              </button>
            </div>

            {/* Stats Row */}
            <div className="stats-row">
              <div className="stat-card budget-stat">
                <span className="stat-label">Budget</span>
                <span className="stat-value">${budget.toLocaleString()}</span>
              </div>
              <div className="stat-card days-stat">
                <span className="stat-label">Days</span>
                <span className="stat-value">{duration}</span>
              </div>
              <div className="stat-card type-stat">
                <span className="stat-label">Type</span>
                <span className="stat-value">{travelType}</span>
              </div>
            </div>

            <h3 className="section-title">Day-wise Itinerary</h3>

            <div className="days-list">
              {[...Array(duration)].map((_, idx) => {
                const dayNum = idx + 1;
                const isOpen = activeDay === dayNum;
                
                return (
                  <div key={dayNum} className={`day-item glass ${isOpen ? 'active' : ''}`}>
                    <div 
                      className="day-header" 
                      onClick={() => setActiveDay(isOpen ? null : dayNum)}
                    >
                      <div className="day-num-box">
                        <span className="day-number">{dayNum}</span>
                        <span className="day-title">
                          {dayNum === 1 ? `Arrival in ${destination || 'Santorini'}` : `Day ${dayNum} - ${destination || 'Santorini'} Exploration`}
                        </span>
                      </div>
                      <ChevronDown size={20} className={`chevron ${isOpen ? 'rotate' : ''}`} />
                    </div>

                    {isOpen && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        className="day-content"
                      >
                        <div className="time-block morning">
                          <div className="block-header">
                            <Sun size={16} />
                            <span>Morning</span>
                          </div>
                          <p>Arrive in {destination || 'Santorini'}, check into hotel, freshen up</p>
                        </div>

                        <div className="time-block afternoon">
                          <div className="block-header">
                            <Navigation size={16} />
                            <span>Afternoon</span>
                          </div>
                          <p>Explore culture experiences, try local cuisine for lunch</p>
                        </div>

                        <div className="time-block evening">
                          <div className="block-header">
                            <GlassWater size={16} />
                            <span>Evening</span>
                          </div>
                          <p>Enjoy adventure vibes, dinner at a popular local restaurant</p>
                        </div>

                        <div className="time-block tips">
                          <div className="block-header">
                            <Info size={16} />
                            <span>Tips</span>
                          </div>
                          <p>Stay hydrated, carry local currency, download offline maps</p>
                        </div>
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default AIPlanner;

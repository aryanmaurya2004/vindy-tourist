import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, Hotel, Star, MapPin } from 'lucide-react';
import './StayFood.css';

const StayFood = () => {
  const stays = [
    {
      id: 1,
      name: 'Azure Bay Resort',
      type: 'Luxury Resort',
      rating: 4.9,
      price: '$450/night',
      image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&q=80&w=800',
      location: 'Maldives'
    },
    {
      id: 2,
      name: 'The Rustic Cabin',
      type: 'Boutique Hotel',
      rating: 4.7,
      price: '$180/night',
      image: 'https://images.unsplash.com/photo-1449156003053-93d25950d992?auto=format&fit=crop&q=80&w=800',
      location: 'Norway'
    }
  ];

  return (
    <div className="stayfood-page">
      <div className="container">
        <header className="page-header">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="page-title"
          >
            Stay & Food
          </motion.h1>
          <p className="page-subtitle">Exquisite stays and culinary experiences worldwide</p>
        </header>

        <section className="stay-section">
          <div className="section-header">
            <Hotel size={24} />
            <h2>Top Rated Stays</h2>
          </div>
          <div className="stays-grid">
            {stays.map(stay => (
              <motion.div key={stay.id} whileHover={{ y: -5 }} className="stay-card glass">
                <img src={stay.image} alt={stay.name} />
                <div className="stay-info">
                  <div className="stay-header">
                    <h3>{stay.name}</h3>
                    <span className="stay-rating"><Star size={14} fill="#eab308" color="#eab308" /> {stay.rating}</span>
                  </div>
                  <p className="stay-type">{stay.type}</p>
                  <p className="stay-location"><MapPin size={14} /> {stay.location}</p>
                  <div className="stay-footer">
                    <span className="stay-price">{stay.price}</span>
                    <button className="book-btn">Book Stay</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="food-section">
          <div className="section-header">
            <Utensils size={24} />
            <h2>Popular Dining</h2>
          </div>
          <div className="food-placeholder glass">
            <Utensils size={48} />
            <h3>Curated restaurant guide coming soon</h3>
            <p>We are currently vetting the best local eats for you.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default StayFood;

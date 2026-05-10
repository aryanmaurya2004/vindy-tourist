import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, Hotel, Star, MapPin, CheckCircle2, X, Calendar, CreditCard, Hash } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import './StayFood.css';

const StayFood = () => {
  const [booking, setBooking] = React.useState(null);

  const stays = [
    {
      id: 1,
      name: 'Azure Bay Resort',
      type: 'Luxury Resort',
      rating: 4.9,
      price: '$450/night',
      image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&q=80&w=800',
      location: 'Maldives',
      amenities: ['Private Beach', 'Spa', 'All Inclusive']
    },
    {
      id: 2,
      name: 'The Rustic Cabin',
      type: 'Boutique Hotel',
      rating: 4.7,
      price: '$180/night',
      image: 'https://images.unsplash.com/photo-1449156003053-93d25950d992?auto=format&fit=crop&q=80&w=800',
      location: 'Norway',
      amenities: ['Mountain View', 'Fireplace', 'Sauna']
    },
    {
      id: 3,
      name: 'Sahara Sands Hotel',
      type: 'Desert Oasis',
      rating: 4.8,
      price: '$320/night',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800',
      location: 'Morocco',
      amenities: ['Pool', 'Camel Tours', 'Dining']
    },
    {
      id: 4,
      name: 'Neon Tokyo Suites',
      type: 'City View',
      rating: 4.6,
      price: '$210/night',
      image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&q=80&w=800',
      location: 'Japan',
      amenities: ['High Speed WiFi', 'City Center', 'Modern']
    }
  ];

  const handleBook = (stay) => {
    setBooking({
      ...stay,
      bookingId: `WL-${Math.floor(1000 + Math.random() * 9000)}`,
      date: new Date().toLocaleDateString(),
      status: 'Confirmed'
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

        <AnimatePresence>
          {booking && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="booking-confirmation glass"
            >
              <div className="conf-header">
                <div className="conf-title">
                  <CheckCircle2 color="#10b981" />
                  <h2>Booking Confirmed!</h2>
                </div>
                <button className="close-btn" onClick={() => setBooking(null)}>
                  <X size={20} />
                </button>
              </div>

              <div className="booking-table-container">
                <table className="booking-table">
                  <thead>
                    <tr>
                      <th><Hash size={16} /> Booking ID</th>
                      <th><Hotel size={16} /> Stay Details</th>
                      <th><Calendar size={16} /> Check-in Date</th>
                      <th><CreditCard size={16} /> Total Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="booking-id">{booking.bookingId}</td>
                      <td>
                        <div className="table-stay-info">
                          <img src={booking.image} alt={booking.name} />
                          <div>
                            <p className="table-stay-name">{booking.name}</p>
                            <p className="table-stay-loc">{booking.location}</p>
                          </div>
                        </div>
                      </td>
                      <td>{booking.date}</td>
                      <td className="table-price">{booking.price}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="booking-footer-info">
                <div className="info-item">
                  <span className="label">Status:</span>
                  <span className="value status-confirmed">{booking.status}</span>
                </div>
                <div className="info-item">
                  <span className="label">Type:</span>
                  <span className="value">{booking.type}</span>
                </div>
                <div className="info-item">
                  <span className="label">Amenities:</span>
                  <span className="value">{booking.amenities.join(', ')}</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

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
                    <button className="book-btn" onClick={() => handleBook(stay)}>Book Stay</button>
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

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Play, User, Calendar, MapPin, Star, ArrowLeft, Send, Heart, Sparkles } from 'lucide-react';
import './Stories.css';

const Stories = ({ addBooking }) => {
  const [selectedStory, setSelectedStory] = useState(null);

  const stories = [
    {
      id: 1,
      title: 'Solitude in the Sahara',
      author: 'Aria Thorne',
      date: 'May 12, 2026',
      image: 'https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?auto=format&fit=crop&q=80&w=800',
      category: 'Solo Trip',
      location: 'Sahara Desert, Morocco',
      rating: 4.9,
      price: '$1,200',
      content: `The silence of the Sahara is not an absence of sound, but a presence of peace. My journey began in Merzouga, where the golden dunes of Erg Chebbi stretch as far as the eye can see. 

Watching the sunrise from atop a 150-meter dune was a spiritual experience. The sky shifted from deep indigo to soft pink, then finally exploded into a brilliant orange. I spent my days trekking with Berbers, learning about their ancient traditions and the resilience of life in the desert.

At night, the sky transforms into a celestial masterpiece. Without any light pollution, the Milky Way is so bright it almost casts a shadow. It's a place where you can truly find yourself in the vastness.`,
      stats: { days: 5, travelers: '1', style: 'Adventure' }
    },
    {
      id: 2,
      title: 'Colors of Rajasthan',
      author: 'Vikram Singh',
      date: 'May 10, 2026',
      image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=800',
      category: 'Culture',
      location: 'Jaipur, India',
      rating: 4.8,
      price: '$850',
      content: `Rajasthan is a sensory overload in the best way possible. From the Pink City of Jaipur to the Blue City of Jodhpur, every corner tells a story of royalty, bravery, and artistic brilliance.

I started my journey at the Amber Fort, marvelling at the intricate mirror work in the Sheesh Mahal. The local markets were a whirlwind of vibrant textiles, spicy street food, and the melodic sounds of folk music.

The highlight was a sunset camel ride in Jaisalmer, followed by a traditional Rajasthani dinner under the stars. The hospitality here is unmatched—'Atithi Devo Bhava' (The Guest is God) is truly lived by everyone you meet.`,
      stats: { days: 7, travelers: '2', style: 'Heritage' }
    },
    {
      id: 3,
      title: 'Oia Sunsets: A Dream in White and Blue',
      author: 'Emma Wilson',
      date: 'May 08, 2026',
      image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=1200',
      category: 'Romantic',
      location: 'Santorini, Greece',
      rating: 4.9,
      price: '$2,500',
      content: `They say photos don't do it justice, and they are right. Oia is a living postcard. Walking through the narrow, winding paths of the caldera, every turn revealed a more breathtaking view than the last.

The iconic blue domes against the stark white buildings are even more brilliant in person. I spent my afternoons sipping Greek coffee and watching the yachts sail across the Aegean Sea.

But the real magic happens at dusk. People gather from all over to witness the Oia sunset. As the sun dips below the horizon, painting the sky in hues of violet and gold, a collective silence falls over the crowd, followed by applause. It's a moment of pure magic.`,
      stats: { days: 4, travelers: '2', style: 'Luxury' }
    }
  ];

  const handleBook = (story) => {
    addBooking({
      id: `story-${story.id}`,
      name: story.title,
      country: story.location.split(', ')[1] || story.location,
      rating: story.rating,
      price: story.price,
      type: story.category,
      image: story.image,
      date: new Date().toLocaleDateString()
    });
    alert(`Trip to ${story.location} added to your bookings!`);
  };

  return (
    <div className="stories-page">
      <div className="container">
        {!selectedStory ? (
          <>
            <header className="page-header">
              <motion.h1 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="page-title"
              >
                Travel Stories
              </motion.h1>
              <p className="page-subtitle">Real experiences shared by our community of explorers</p>
            </header>

            {/* Featured Story */}
            <div className="featured-story glass">
              <div className="featured-img">
                <img src={stories[2].image} alt="Featured" />
                <div className="play-overlay">
                  <Play size={48} fill="white" />
                </div>
              </div>
              <div className="featured-content">
                <span className="featured-label">Featured Story</span>
                <h2>{stories[2].title}</h2>
                <p>{stories[2].content.substring(0, 150)}...</p>
                <button className="read-more" onClick={() => setSelectedStory(stories[2])}>Read Full Story</button>
              </div>
            </div>

            <div className="stories-grid">
              {stories.slice(0, 2).map(story => (
                <motion.div 
                  key={story.id} 
                  whileHover={{ y: -5 }} 
                  className="story-card glass"
                  onClick={() => setSelectedStory(story)}
                >
                  <div className="story-img-wrapper">
                    <img src={story.image} alt={story.title} />
                    <span className="story-category">{story.category}</span>
                  </div>
                  <div className="story-info">
                    <h3>{story.title}</h3>
                    <div className="story-meta">
                      <span><User size={14} /> {story.author}</span>
                      <span><Calendar size={14} /> {story.date}</span>
                    </div>
                    <button className="story-btn-link">Read Full Story</button>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="story-details-view"
          >
            <button className="back-btn" onClick={() => setSelectedStory(null)}>
              <ArrowLeft size={20} />
              <span>Back to Stories</span>
            </button>

            <div className="story-detail-layout">
              <div className="story-main-content glass">
                <div className="story-detail-header">
                  <div className="story-category-pill">{selectedStory.category}</div>
                  <h1>{selectedStory.title}</h1>
                  <div className="story-author-info">
                    <div className="author-avatar">
                      <User size={20} />
                    </div>
                    <div>
                      <p className="author-name">By {selectedStory.author}</p>
                      <p className="story-date">{selectedStory.date}</p>
                    </div>
                  </div>
                </div>

                <div className="story-detail-img">
                  <img src={selectedStory.image} alt={selectedStory.title} />
                </div>

                <div className="story-text-content">
                  {selectedStory.content.split('\n\n').map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>

                <div className="story-actions">
                  <button className="story-action-btn like">
                    <Heart size={20} />
                    <span>1.2k Likes</span>
                  </button>
                  <button className="story-action-btn share">
                    <Send size={20} />
                    <span>Share Story</span>
                  </button>
                </div>
              </div>

              <div className="story-sidebar">
                <div className="booking-card glass">
                  <div className="booking-header">
                    <Sparkles size={24} className="sparkle-icon" />
                    <h3>Inspired by this story?</h3>
                    <p>Book a similar trip to {selectedStory.location.split(',')[0]}</p>
                  </div>

                  <div className="trip-stats">
                    <div className="stat-item">
                      <Calendar size={18} />
                      <div>
                        <label>Duration</label>
                        <span>{selectedStory.stats.days} Days</span>
                      </div>
                    </div>
                    <div className="stat-item">
                      <Star size={18} />
                      <div>
                        <label>Rating</label>
                        <span>{selectedStory.rating} / 5.0</span>
                      </div>
                    </div>
                    <div className="stat-item">
                      <MapPin size={18} />
                      <div>
                        <label>Location</label>
                        <span>{selectedStory.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="booking-price">
                    <span className="price-label">Estimated Cost</span>
                    <span className="price-value">{selectedStory.price} <small>/ person</small></span>
                  </div>

                  <button className="book-now-btn" onClick={() => handleBook(selectedStory)}>
                    Book This Trip Now
                  </button>
                  
                  <p className="booking-note">
                    *Price includes stay, local transport and activities.
                  </p>
                </div>

                <div className="related-stories glass">
                  <h3>More from {selectedStory.author}</h3>
                  <div className="related-list">
                    <div className="related-item">
                      <div className="related-thumb">
                        <img src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=80&w=100" alt="Goa" />
                      </div>
                      <p>Hidden Beaches of South Goa</p>
                    </div>
                    <div className="related-item">
                      <div className="related-thumb">
                        <img src="https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=100" alt="Bali" />
                      </div>
                      <p>Spiritual Retreat in Ubud</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Stories;

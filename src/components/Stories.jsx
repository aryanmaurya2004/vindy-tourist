import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Play, User, Calendar } from 'lucide-react';
import './Stories.css';

const Stories = () => {
  const stories = [
    {
      id: 1,
      title: 'Solitude in the Sahara',
      author: 'Aria Thorne',
      date: 'May 12, 2026',
      image: 'https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?auto=format&fit=crop&q=80&w=800',
      category: 'Solo Trip'
    },
    {
      id: 2,
      title: 'Colors of Rajasthan',
      author: 'Vikram Singh',
      date: 'May 10, 2026',
      image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=800',
      category: 'Culture'
    }
  ];

  return (
    <div className="stories-page">
      <div className="container">
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

        <div className="featured-story glass">
          <div className="featured-img">
            <img src="https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=1200" alt="Featured" />
            <div className="play-overlay">
              <Play size={48} fill="white" />
            </div>
          </div>
          <div className="featured-content">
            <span className="featured-label">Featured Story</span>
            <h2>Oia Sunsets: A Dream in White and Blue</h2>
            <p>Experience the magic of Santorini through the eyes of a first-time traveler...</p>
            <button className="read-more">Read Full Story</button>
          </div>
        </div>

        <div className="stories-grid">
          {stories.map(story => (
            <motion.div key={story.id} whileHover={{ y: -5 }} className="story-card glass">
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stories;

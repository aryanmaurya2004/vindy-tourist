import React from 'react';
import { motion } from 'framer-motion';
import { Users, MessageSquare, Heart, Share2 } from 'lucide-react';
import './Community.css';

const Community = () => {
  const posts = [
    {
      id: 1,
      user: 'TravelBug99',
      content: 'Anyone heading to Bali in August? Looking for travel buddies!',
      likes: 24,
      comments: 12,
      time: '2 hours ago'
    },
    {
      id: 2,
      user: 'NomadJohn',
      content: 'Just found the most amazing hidden cafe in Kyoto. Check it out!',
      likes: 56,
      comments: 8,
      time: '5 hours ago'
    }
  ];

  return (
    <div className="community-page">
      <div className="container">
        <header className="page-header">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="page-title"
          >
            Community
          </motion.h1>
          <p className="page-subtitle">Connect with fellow travelers and share your insights</p>
        </header>

        <div className="community-layout">
          <div className="feed-section">
            <div className="create-post glass">
              <textarea placeholder="Share something with the community..."></textarea>
              <div className="post-actions">
                <button className="post-btn">Post</button>
              </div>
            </div>

            <div className="community-feed">
              {posts.map(post => (
                <div key={post.id} className="community-post glass">
                  <div className="post-header">
                    <div className="user-avatar-small"></div>
                    <div className="post-user-info">
                      <span className="username">{post.user}</span>
                      <span className="post-time">{post.time}</span>
                    </div>
                  </div>
                  <div className="post-content">
                    <p>{post.content}</p>
                  </div>
                  <div className="post-footer">
                    <button><Heart size={18} /> <span>{post.likes}</span></button>
                    <button><MessageSquare size={18} /> <span>{post.comments}</span></button>
                    <button><Share2 size={18} /></button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="community-sidebar">
            <div className="sidebar-card glass">
              <h3>Trending Topics</h3>
              <ul>
                <li>#Bali2026</li>
                <li>#DigitalNomad</li>
                <li>#SoloTravelTips</li>
                <li>#SustainableTourism</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Community;

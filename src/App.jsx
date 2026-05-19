import React from 'react';
import Navbar from './components/Navbar';
import Explore from './components/Explore';
import AIPlanner from './components/AIPlanner';
import Packages from './components/Packages';
import StayFood from './components/StayFood';
import Stories from './components/Stories';
import Community from './components/Community';
import MyTrips from './components/MyTrips';
import { motion } from 'framer-motion';
import {
  Search,
  MapPin,
  DollarSign,
  Compass,
  Zap,
  ArrowRight,
  Flame,
  Music,
  Heart,
  Sparkles,
  Mountain,
  Users,
  Star,
  Play,
  Cloud,
  Send,
  Mail,
  Phone,
  Globe,
  Calendar,
  Clock
} from 'lucide-react';
import './App.css';
import './components/StyleModal.css';

function App() {
  const [currentView, setCurrentView] = React.useState('home');
  const [bookedTrips, setBookedTrips] = React.useState([]);
  const [searchLocation, setSearchLocation] = React.useState('');
  const [searchBudget, setSearchBudget] = React.useState('');
  const [searchType, setSearchType] = React.useState('');
  const [showSuccess, setShowSuccess] = React.useState(false);
  const [language, setLanguage] = React.useState('EN');
  const [activeMood, setActiveMood] = React.useState('Chill');
  const [selectedStyle, setSelectedStyle] = React.useState(null);
  const [selectedHotDest, setSelectedHotDest] = React.useState(null);
  const [isHotBooked, setIsHotBooked] = React.useState(null);
  const [theme, setTheme] = React.useState('dark');

  const translations = {
    EN: {
      heroTitle: "Don't just visit,",
      heroSubtitle: "experience the world",
      heroDesc: "Discover hidden gems, plan with AI, and create memories that last forever",
      whereTo: "Where to?",
      budgetRange: "Budget range",
      travelType: "Travel type",
      bookBtn: "Book My Trip",
      aiBtn: "AI Trip Planner",
      searchPlaceholder: "Search destinations",
      budgetPlaceholder: "Select budget",
      typePlaceholder: "Select type",
      travelMood: "Travel mood:",
      styleTitle: "What's your travel style?",
      styleSubtitle: "Choose your vibe and we'll find the perfect destination for you",
      nav: {
        home: "Home",
        explore: "Explore",
        planner: "AI Planner",
        packages: "Packages",
        stayfood: "Stay & Food",
        stories: "Stories",
        community: "Community",
        mytrips: "My Trips",
      }
    },
    HI: {
      heroTitle: "सिर्फ घूमें नहीं,",
      heroSubtitle: "दुनिया का अनुभव करें",
      heroDesc: "छिपे हुए रत्नों की खोज करें, AI के साथ योजना बनाएं और ऐसी यादें बनाएं जो हमेशा बनी रहें",
      whereTo: "कहाँ जाना है?",
      budgetRange: "बजट सीमा",
      travelType: "यात्रा का प्रकार",
      bookBtn: "मेरी यात्रा बुक करें",
      aiBtn: "AI ट्रिप प्लानर",
      searchPlaceholder: "गंतव्य खोजें",
      budgetPlaceholder: "बजट चुनें",
      typePlaceholder: "प्रकार चुनें",
      travelMood: "यात्रा का मूड:",
      styleTitle: "आपकी यात्रा की शैली क्या है?",
      styleSubtitle: "अपनी पसंद चुनें और हम आपके लिए सही गंतव्य खोज लेंगे",
      nav: {
        home: "होम",
        explore: "एक्सप्लोर",
        planner: "AI प्लानर",
        packages: "पैकेज",
        stayfood: "स्टे और फूड",
        stories: "कहानियां",
        community: "कम्युनिटी",
        mytrips: "मेरी यात्राएं",
      }
    }
  };

  const t = translations[language] || translations.EN;

  const addBooking = (trip) => {
    setBookedTrips(prev => [...prev, { ...trip, bookingId: Date.now() }]);
  };

  const handleQuickBook = () => {
    if (!searchLocation) {
      alert("Please enter a destination!");
      return;
    }

    const quickTrip = {
      id: `quick-${Date.now()}`,
      name: searchLocation,
      country: "Custom Destination",
      price: searchBudget || "Flexible",
      type: searchType || "Custom",
      rating: 5.0,
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=800",
      date: new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' }),
      isQuickBook: true
    };

    addBooking(quickTrip);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);

    // Clear inputs
    setSearchLocation('');
    setSearchBudget('');
    setSearchType('');
  };

  const moods = [
    { name: 'Chill', emoji: '😌', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2000' },
    { name: 'Adventure', emoji: '🧗', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2000' },
    { name: 'Party', emoji: '🥳', image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=2000' },
    { name: 'Spiritual', emoji: '🧘', image: 'https://images.unsplash.com/photo-1514222139-b57675ee0ed0?auto=format&fit=crop&q=80&w=2000' },
    { name: 'Romantic', emoji: '💕', image: 'https://images.unsplash.com/photo-1518196775741-201b179e3834?auto=format&fit=crop&q=80&w=2000' },
  ];

  const travelStyles = [
    {
      name: 'Couple',
      icon: <Users size={24} />,
      color: '#8b5cf6',
      image: 'https://images.unsplash.com/photo-1516589174184-c685266e430c?auto=format&fit=crop&q=80&w=1200',
      description: 'Shared journeys, stronger bonds. Whether it\'s a weekend getaway or a world tour, explore the world together with your partner.'
    },
    {
      name: 'Adventure',
      icon: <Mountain size={24} />,
      color: '#f97316',
      image: 'https://images.unsplash.com/photo-1533240332313-0dbf2f459523?auto=format&fit=crop&q=80&w=1200',
      description: 'Push your limits with thrilling activities. From mountain climbing in the Himalayas to diving in the Great Barrier Reef, adventure awaits.'
    },
    {
      name: 'Beach',
      icon: <Compass size={24} />,
      color: '#0ea5e9',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1200',
      description: 'Sun, sand, and serenity. Relax on the white sands of Maldives or surf the waves in Bali. The ultimate tropical escape.'
    },
    {
      name: 'Spiritual',
      icon: <Sparkles size={24} />,
      color: '#eab308',
      image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=1200',
      description: 'Find inner peace and ancient wisdom. Explore the temples of Kyoto or meditate in the quiet ashrams of Rishikesh.'
    },
    {
      name: 'Culture',
      icon: <Users size={24} />,
      color: '#10b981',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=1200',
      description: 'Immerse yourself in local traditions, art, and history. From the museums of Paris to the vibrant festivals of Rajasthan.'
    },
    {
      name: 'Romantic',
      icon: <Heart size={24} />,
      color: '#ec4899',
      image: 'https://images.unsplash.com/photo-1518196775741-201b179e3834?auto=format&fit=crop&q=80&w=1200',
      description: 'Create unforgettable moments with your loved one. Sunset dinners in Santorini or gondola rides in Venice.'
    },
    {
      name: 'Nature',
      icon: <Zap size={24} />,
      color: '#22c55e',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1200',
      description: 'Connect with the wild beauty of our planet. Trek through the Amazon rainforest or witness the Northern Lights in Iceland.'
    },
  ];

  const hotDestinations = [
    {
      id: 1,
      name: 'Bali',
      country: 'Indonesia',
      rating: 4.8,
      price: '$500 - $2,000',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=600',
      trending: true,
      description: 'A tropical paradise known for its volcanic mountains, iconic rice paddies, beaches, coral reefs, and vibrant cultural landmarks.',
      bestTime: 'Apr - Oct',
      duration: '7 Days',
      vibe: 'Tropical & Relaxing',
      tags: ['Beach', 'Culture', 'Spiritual']
    },
    {
      id: 2,
      name: 'Kyoto',
      country: 'Japan',
      rating: 4.9,
      price: '$800 - $3,000',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=600',
      trending: true,
      description: 'Japan\'s historical heartland, famous for its thousands of classical Buddhist temples, gardens, imperial palaces, Shinto shrines, and traditional wooden houses.',
      bestTime: 'Mar - May',
      duration: '6 Days',
      vibe: 'Ancient & Peaceful',
      tags: ['Culture', 'Spiritual', 'Nature']
    },
    {
      id: 3,
      name: 'Rajasthan',
      country: 'India',
      rating: 4.6,
      price: '$300 - $1,500',
      image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=600',
      trending: true,
      description: 'The Land of Kings, featuring majestic forts, royal palaces, vibrant festivals, and the golden sands of the Thar desert.',
      bestTime: 'Oct - Mar',
      duration: '8 Days',
      vibe: 'Royal & Majestic',
      tags: ['Culture', 'Heritage', 'Desert']
    },
    {
      id: 4,
      name: 'Iceland',
      country: 'Iceland',
      rating: 4.8,
      price: '$2,000 - $6,000',
      image: 'https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&q=80&w=600',
      trending: true,
      description: 'A dramatic Nordic island nation with a landscape defined by active volcanoes, geysers, hot springs, black sand beaches, and epic glaciers.',
      bestTime: 'Sep - Mar',
      duration: '9 Days',
      vibe: 'Mystical & Adventurous',
      tags: ['Adventure', 'Nature', 'Aurora']
    }
  ];

  const budgetDestinations = [
    { id: 'b1', name: 'Goa', country: 'India', image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2', rating: 4.5, price: 'From $200' },
    { id: 'b2', name: 'Rajasthan', country: 'India', image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41', rating: 4.6, price: 'From $300' },
    { id: 'b3', name: 'Marrakech', country: 'Morocco', image: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70', rating: 4.7, price: 'From $400' },
    { id: 'b4', name: 'Bali', country: 'Indonesia', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4', rating: 4.8, price: 'From $500' }
  ];

  const hiddenGems = [
    { id: 'h1', name: 'Santorini', country: 'Greece', image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80' },
    { id: 'h2', name: 'Temple Gates', country: 'Bali', image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80' },
    { id: 'h3', name: 'Blue City', country: 'Morocco', image: 'https://images.unsplash.com/photo-1523301343968-6a6ebf63c672?auto=format&fit=crop&w=800&q=80' }
  ];

  const curatedPackages = [
    {
      id: 'p1',
      title: 'Bali Romance Escape',
      category: 'Honeymoon',
      duration: '7 days',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4',
      description: 'A dreamy 7-day honeymoon through Bali\'s most romantic spots. Private villa stays, sunset dinners...'
    },
    {
      id: 'p2',
      title: 'Rajasthan Royal Heritage',
      category: 'Cultural',
      duration: '9 days',
      image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41',
      description: 'A majestic 8-day journey through Rajasthan\'s forts, palaces, and deserts. Live like a king in...'
    },
    {
      id: 'p3',
      title: 'Iceland Ring Road Adventure',
      category: 'Adventure',
      duration: '10 days',
      image: 'https://images.unsplash.com/photo-1476610182048-b716b8518aae',
      description: 'An epic 10-day road trip around Iceland\'s Ring Road. Glaciers, volcanoes, hot springs, and more...'
    }
  ];

  const travelStories = [
    {
      id: 's1',
      title: 'Sunrise at Uluwatu Temple - the most magical morning of my life',
      user: 'Sarah Chen',
      avatar: 'https://i.pravatar.cc/150?u=sarah',
      image: 'https://images.unsplash.com/photo-1552053831-71594a27632d',
      video: true
    },
    {
      id: 's2',
      title: 'Northern Lights finally appeared after 3 nights of waiting!',
      user: 'Marco Rossi',
      avatar: 'https://i.pravatar.cc/150?u=marco',
      image: 'https://images.unsplash.com/photo-1531366930491-81559758f2d8',
      video: true
    },
    {
      id: 's3',
      title: 'Desert night under a billion stars in Jaisalmer',
      user: 'Priya Sharma',
      avatar: 'https://i.pravatar.cc/150?u=priya',
      image: 'https://images.unsplash.com/photo-1473580044384-7ba9967e16a0',
      video: true
    },
    {
      id: 's4',
      title: 'That iconic Oia sunset - photos don\'t do it justice',
      user: 'Emma Wilson',
      avatar: 'https://i.pravatar.cc/150?u=emma',
      image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077',
      video: true
    }
  ];

  return (
    <div className="app" data-theme={theme}>
      <div className="main-bg-animation">
        <div className="bg-orb orb-1"></div>
        <div className="bg-orb orb-2"></div>
        <div className="bg-orb orb-3"></div>
        <div className="bg-orb orb-4"></div>
      </div>
      <Navbar
        setView={setCurrentView}
        currentView={currentView}
        language={language}
        setLanguage={setLanguage}
        t={t.nav}
        theme={theme}
        setTheme={setTheme}
      />

      <main>
        {currentView === 'home' ? (
          <>
            <section className="hero-section">
              <div
                className="hero-bg-image"
                style={{
                  backgroundImage: `url(${moods.find(m => m.name === activeMood)?.image})`,
                  transition: 'background-image 1s ease-in-out'
                }}
              ></div>
              <div className="hero-overlay"></div>

              <div className="hero-container">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="hero-content"
                >
                  {/* WhatsApp badge */}
                  <a
                    href={`https://wa.me/918303319119?text=${
                      language === 'HI'
                        ? '%E0%A4%A8%E0%A4%AE%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%8D%E0%A4%AF%E0%A5%87%20Vindy%20Tourist%2C%20%E0%A4%AE%E0%A5%81%E0%A4%9B%E0%A5%8D%E0%A4%B9%E0%A5%87%20%E0%A4%8F%E0%A4%95%20%E0%A4%9F%E0%A5%8D%E0%A4%B0%E0%A4%BF%E0%A4%AA%20%E0%A4%AA%E0%A5%8D%E0%A4%B2%E0%A4%BE%E0%A4%A8%20%E0%A4%95%E0%A4%B0%E0%A4%A8%E0%A5%80%20%E0%A4%B9%E0%A5%88%E0%A5%84'
                        : 'Hello%20Vindy%20Tourist%2C%20I%20am%20interested%20in%20planning%20a%20trip%20with%20you%21'
                    }`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-whatsapp-badge glass"
                  >
                    <div className="whatsapp-indicator">
                      <span className="pulse-dot"></span>
                    </div>
                    <svg className="whatsapp-icon" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.004 22c-2.048 0-4.043-.53-5.81-1.536L2 22l1.564-4.062c-1.12-1.848-1.713-3.99-1.71-6.19C1.86 5.178 7.03 0 13.398 0c3.085.002 5.985 1.198 8.163 3.367 2.18 2.17 3.382 5.056 3.38 8.13-.004 6.31-5.174 11.503-11.537 11.503zm-1.173-4.832l.278.163c1.55.918 3.298 1.402 5.093 1.404 5.378 0 9.752-4.346 9.755-9.69.001-2.587-1.01-5.02-2.85-6.85-1.84-1.83-4.288-2.84-6.88-2.84-5.385 0-9.76 4.35-9.763 9.697-.001 1.737.457 3.432 1.323 4.935l.18.312-.927 3.42 3.518-.916zM17.15 13.9c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.62.14-.18.28-.71.9-.87 1.09-.16.18-.33.2-.6.06-1.02-.51-1.74-.83-2.43-1.46-.57-.52-.96-1.16-1.07-1.35-.11-.19-.01-.29.08-.38.09-.08.2-.23.3-.35.1-.12.13-.2.2-.33.07-.14.03-.26-.02-.36-.05-.1-.43-1.05-.6-1.44-.16-.39-.32-.34-.44-.34h-.38c-.13 0-.34.05-.52.24-.18.19-.7.68-.7 1.66s.72 1.93.82 2.07c.1.14 1.41 2.15 3.42 3.02.48.2 1 .33 1.46.48.51.16.98.14 1.35.08.41-.06 1.65-.68 1.88-1.33.23-.65.23-1.21.16-1.33-.07-.12-.25-.19-.53-.33z" />
                    </svg>
                    <span>
                      {language === 'HI' ? 'WhatsApp पर तुरंत संपर्क करें: +91 8303319119' : 'Chat on WhatsApp: +91 8303319119'}
                    </span>
                  </a>

                  <h1 className="hero-title">
                    {t.heroTitle}<br />
                    <span className="gradient-text">{t.heroSubtitle}</span>
                  </h1>

                  <p className="hero-subtitle">
                    {t.heroDesc}
                  </p>

                  <div className="search-container glass">
                    <div className="search-inputs">
                      <div className="input-group">
                        <label>{t.whereTo}</label>
                        <div className="input-with-icon">
                          <MapPin size={16} />
                          <input
                            type="text"
                            placeholder={t.searchPlaceholder}
                            value={searchLocation}
                            onChange={(e) => setSearchLocation(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="input-divider"></div>
                      <div className="input-group">
                        <label>{t.budgetRange}</label>
                        <div className="input-with-icon">
                          <DollarSign size={16} />
                          <input
                            type="text"
                            placeholder={t.budgetPlaceholder}
                            value={searchBudget}
                            onChange={(e) => setSearchBudget(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="input-divider"></div>
                      <div className="input-group">
                        <label>{t.travelType}</label>
                        <div className="input-with-icon">
                          <Compass size={16} />
                          <select
                            className="mood-select"
                            value={activeMood}
                            onChange={(e) => {
                              setActiveMood(e.target.value);
                              setSearchType(e.target.value);
                            }}
                          >
                            {moods.map(mood => (
                              <option key={mood.name} value={mood.name}>
                                {mood.emoji} {mood.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="search-buttons">
                      <button className="btn-search" onClick={handleQuickBook}>
                        <Zap size={18} />
                        <span>{t.bookBtn}</span>
                      </button>
                      <button className="btn-ai" onClick={() => setCurrentView('planner')}>
                        <Sparkles size={18} />
                        <span>{t.aiBtn}</span>
                      </button>
                    </div>

                    {showSuccess && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="quick-book-success"
                      >
                        <Sparkles size={16} />
                        <span>Trip to {bookedTrips[bookedTrips.length - 1]?.name} saved!</span>
                      </motion.div>
                    )}
                  </div>

                </motion.div>
              </div>
            </section>

            {/* Travel Style Section */}
            <section className="style-section">
              <div className="container">
                <div className="section-header">
                  <h2 className="section-title">{t.styleTitle}</h2>
                  <p className="section-subtitle">{t.styleSubtitle}</p>
                </div>

                <div className="style-grid">
                  {travelStyles.map((style) => (
                    <motion.div
                      key={style.name}
                      whileHover={{ y: -10 }}
                      whileTap={{ scale: 0.95 }}
                      className="style-card glass"
                      onClick={() => setSelectedStyle(style)}
                    >
                      <div className="style-icon" style={{ backgroundColor: style.color }}>
                        {style.icon}
                      </div>
                      <span>{style.name}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Style Detail Modal */}
                {selectedStyle && (
                  <div className="style-modal-overlay" onClick={() => setSelectedStyle(null)}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      className="style-modal glass"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button className="modal-close" onClick={() => setSelectedStyle(null)}>
                        <Zap size={20} style={{ transform: 'rotate(45deg)' }} />
                      </button>

                      <div className="style-modal-image">
                        <img src={selectedStyle.image} alt={selectedStyle.name} />
                        <div className="style-modal-badge" style={{ backgroundColor: selectedStyle.color }}>
                          {selectedStyle.icon}
                          <span>{selectedStyle.name}</span>
                        </div>
                      </div>

                      <div className="style-modal-content">
                        <h2>{selectedStyle.name} Experiences</h2>
                        <p>{selectedStyle.description}</p>
                        <button
                          className="style-explore-btn"
                          onClick={() => {
                            setCurrentView('explore');
                            setSelectedStyle(null);
                          }}
                        >
                          Explore {selectedStyle.name} Destinations
                        </button>
                      </div>
                    </motion.div>
                  </div>
                )}

                {/* Hot Destination Detail Modal */}
                {selectedHotDest && (
                  <div className="modal-overlay" onClick={() => setSelectedHotDest(null)}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      className="detail-modal glass"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button className="modal-close" onClick={() => setSelectedHotDest(null)}>
                        <Zap size={20} style={{ transform: 'rotate(45deg)' }} />
                      </button>

                      <div className="modal-content">
                        <div className="modal-image">
                          <img src={selectedHotDest.image} alt={selectedHotDest.name} />
                          <div className="modal-image-overlay">
                            <div className="modal-badge">Hot Destination</div>
                          </div>
                        </div>

                        <div className="modal-info">
                          <div className="modal-header">
                            <div>
                              <h2>{selectedHotDest.name}</h2>
                              <p className="modal-location">
                                <MapPin size={16} />
                                {selectedHotDest.country}
                              </p>
                            </div>
                            <div className="modal-rating">
                              <Star size={18} fill="#eab308" color="#eab308" />
                              <span>{selectedHotDest.rating}</span>
                            </div>
                          </div>

                          <p className="modal-description">{selectedHotDest.description}</p>

                          <div className="modal-details-grid">
                            <div className="detail-item">
                              <Calendar size={18} />
                              <div>
                                <label>Best Time</label>
                                <span>{selectedHotDest.bestTime}</span>
                              </div>
                            </div>
                            <div className="detail-item">
                              <Clock size={18} />
                              <div>
                                <label>Duration</label>
                                <span>{selectedHotDest.duration}</span>
                              </div>
                            </div>
                            <div className="detail-item">
                              <Sparkles size={18} />
                              <div>
                                <label>Vibe</label>
                                <span>{selectedHotDest.vibe}</span>
                              </div>
                            </div>
                          </div>

                          <div className="modal-footer">
                            <div className="modal-price">
                              <label>Starting from</label>
                              <span>{selectedHotDest.price}</span>
                            </div>
                            <motion.button
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              className={`modal-book-btn ${isHotBooked === selectedHotDest.id ? 'booked' : ''}`}
                              onClick={() => {
                                const tripWithDate = {
                                  bookingId: Date.now(),
                                  id: selectedHotDest.id,
                                  name: selectedHotDest.name,
                                  country: selectedHotDest.country,
                                  rating: selectedHotDest.rating,
                                  price: selectedHotDest.price,
                                  image: selectedHotDest.image,
                                  date: new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })
                                };
                                addBooking(tripWithDate);
                                setIsHotBooked(selectedHotDest.id);
                                setTimeout(() => {
                                  setIsHotBooked(null);
                                  setSelectedHotDest(null);
                                }, 2000);
                              }}
                              disabled={isHotBooked === selectedHotDest.id}
                            >
                              {isHotBooked === selectedHotDest.id ? (
                                <>
                                  <Sparkles size={18} />
                                  <span>Saved to My Trips</span>
                                </>
                              ) : (
                                <>
                                  <span>Book This Trip</span>
                                  <ArrowRight size={18} />
                                </>
                              )}
                            </motion.button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                )}
              </div>
            </section>

            {/* Hot Destinations Section */}
            <section className="destinations-section">
              <div className="container">
                <div className="section-top">
                  <div className="trending-label">
                    <Sparkles size={16} />
                    <span>TRENDING NOW</span>
                  </div>
                  <div className="section-header-flex">
                    <h2 className="section-title">Hot destinations</h2>
                    <a href="#" className="view-all" onClick={(e) => { e.preventDefault(); setCurrentView('explore'); }}>View all <ArrowRight size={16} /></a>
                  </div>
                </div>

                <div className="destinations-grid">
                  {hotDestinations.map((dest) => (
                    <motion.div
                      key={dest.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -10 }}
                      className="dest-card"
                      onClick={() => setSelectedHotDest(dest)}
                    >
                      <div className="dest-image-wrapper">
                        <img src={dest.image} alt={dest.name} className="dest-img" />
                        <div className="dest-overlay">
                          {dest.trending && <span className="trending-tag">Trending</span>}
                          <button className="wishlist-btn" onClick={(e) => e.stopPropagation()}>
                            <Heart size={18} />
                          </button>
                        </div>
                      </div>
                      <div className="dest-details">
                        <div className="dest-header">
                          <h3>{dest.name}</h3>
                          <div className="dest-rating">
                            <Star size={14} fill="currentColor" />
                            <span>{dest.rating}</span>
                          </div>
                        </div>
                        <p className="dest-location">
                          <MapPin size={12} />
                          {dest.country}
                        </p>
                        <div className="dest-footer">
                          <span className="price-tag">{dest.price}</span>
                          <button className="book-small-btn" onClick={(e) => { e.stopPropagation(); setSelectedHotDest(dest); }}>Book Now</button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Budget Trips Section */}
            <section className="destinations-section budget-section">
              <div className="container">
                <div className="section-top">
                  <div className="budget-label">
                    <DollarSign size={16} />
                    <span>BUDGET TRIPS</span>
                  </div>
                  <div className="section-header-flex">
                    <h2 className="section-title">Amazing trips, less money</h2>
                    <a href="#" className="view-all" onClick={(e) => { e.preventDefault(); setCurrentView('explore'); }}>View all <ArrowRight size={16} /></a>
                  </div>
                </div>

                <div className="destinations-grid">
                  {budgetDestinations.map((dest) => (
                    <motion.div
                      key={dest.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="dest-card"
                    >
                      <div className="dest-image-wrapper">
                        <img src={dest.image} alt={dest.name} className="dest-img" />
                        <div className="dest-overlay">
                          <span className="budget-badge">Budget</span>
                        </div>
                      </div>
                      <div className="dest-details">
                        <h3>{dest.name}</h3>
                        <p className="dest-location">{dest.country}</p>
                        <p className="price-tag">{dest.price}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="section-spacer" style={{ height: '4rem' }}></div>

              <div className="container">
                <div className="section-top">
                  <div className="budget-label" style={{ color: '#0fb9b1' }}>
                    <Sparkles size={16} />
                    <span>HIDDEN GEMS</span>
                  </div>
                  <div className="section-header-flex">
                    <h2 className="section-title">Not on Instagram yet</h2>
                    <a href="#" className="view-all" onClick={(e) => { e.preventDefault(); setCurrentView('explore'); }}>Explore more <ArrowRight size={16} /></a>
                  </div>
                </div>

                <div className="destinations-grid">
                  {hiddenGems.map((dest) => (
                    <motion.div
                      key={dest.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="dest-card"
                    >
                      <div className="dest-image-wrapper">
                        <img src={dest.image} alt={dest.name} className="dest-img" />
                        <div className="dest-overlay">
                          <span className="hidden-badge">Hidden Gem</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="section-spacer" style={{ height: '6rem' }}></div>

              <div className="container">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="ai-plan-section"
                >
                  <div className="ai-plan-card">
                    <div className="ai-plan-content">
                      <div className="ai-label-pill">
                        <Sparkles size={14} className="sparkle-icon" />
                        <span>AI-Powered Planning</span>
                      </div>
                      <h2 className="ai-plan-title">Let AI plan your <br /> perfect trip</h2>
                      <p className="ai-plan-description">
                        Tell us your budget, days, and interests. Our AI creates a custom
                        itinerary with the best hotels, food spots, and hidden gems.
                      </p>
                      <div className="ai-plan-footer">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="ai-main-btn"
                        >
                          <Sparkles size={20} />
                          <span>Plan My Trip Now</span>
                        </motion.button>
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="ai-blob blob-1"></div>
                    <div className="ai-blob blob-2"></div>
                    <div className="ai-blob blob-3"></div>
                  </div>
                </motion.div>
              </div>

              <div className="section-spacer" style={{ height: '6rem' }}></div>

              <div className="container">
                <div className="section-top">
                  <div className="section-header-flex">
                    <div>
                      <h2 className="section-title">Curated packages</h2>
                      <p className="section-subtitle">Handpicked trips for every kind of traveler</p>
                    </div>
                    <a href="#" className="view-all" onClick={(e) => { e.preventDefault(); setCurrentView('packages'); }}>All packages <ArrowRight size={16} /></a>
                  </div>
                </div>

                <div className="destinations-grid">
                  {curatedPackages.map((pkg) => (
                    <motion.div
                      key={pkg.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="package-card"
                    >
                      <div className="package-image-wrapper">
                        <img src={pkg.image} alt={pkg.title} className="package-img" />
                        <div className="package-badge">{pkg.category}</div>
                      </div>
                      <div className="package-details">
                        <h3>{pkg.title}</h3>
                        <p>{pkg.description}</p>
                        <div className="package-footer">
                          <span className="package-duration">
                            <Compass size={14} />
                            {pkg.duration}
                          </span>
                          <button className="book-small-btn">Explore</button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="section-spacer" style={{ height: '6rem' }}></div>

              <div className="container">
                <div className="section-top">
                  <div className="section-header-flex">
                    <div>
                      <h2 className="section-title">Travel stories</h2>
                      <p className="section-subtitle">Real experiences from real travelers</p>
                    </div>
                    <a href="#" className="view-all" onClick={(e) => { e.preventDefault(); setCurrentView('stories'); }}>Watch all <ArrowRight size={16} /></a>
                  </div>
                </div>

                <div className="stories-grid">
                  {travelStories.map((story) => (
                    <motion.div
                      key={story.id}
                      whileHover={{ y: -10 }}
                      className="story-card"
                    >
                      <div className="story-image-wrapper">
                        <img src={story.image} alt={story.title} className="story-img" />
                        <div className="story-overlay">
                          <div className="play-btn-wrapper">
                            <Play size={20} fill="white" />
                          </div>
                          <div className="story-content">
                            <p className="story-title">{story.title}</p>
                            <div className="story-user">
                              <img src={story.avatar} alt={story.user} className="user-avatar" />
                              <span>{story.user}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="section-spacer" style={{ height: '6rem' }}></div>

              {/* Weather Section */}
              <div className="container">
                <div className="weather-section">
                  <div className="weather-card glass">
                    <div className="weather-header">
                      <Cloud size={40} className="weather-main-icon" />
                      <h2 className="section-title">Weather-based suggestions</h2>
                      <p className="section-subtitle">Smart destination swaps based on weather conditions</p>
                    </div>

                    <div className="weather-content">
                      <div className="weather-status">
                        <Sparkles size={18} />
                        <span>Hot Summer</span>
                      </div>
                      <div className="weather-suggestion">
                        <span className="skip-text">Skip <span className="highlight-red">Rajasthan</span></span>
                        <ArrowRight size={20} />
                        <span className="go-text">Go to <span className="highlight-green">Iceland</span></span>
                      </div>
                      <p className="weather-desc">Cool glaciers and midnight sun</p>
                    </div>

                    <div className="weather-footer">
                      <div className="pagination-dots">
                        <span className="dot active"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                      </div>
                      <button className="weather-btn">
                        <Cloud size={18} />
                        <span>Check Weather Suggestions</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="section-spacer" style={{ height: '6rem' }}></div>

              {/* Explore Near You Section */}
              <div className="container">
                <div className="explore-near-section">
                  <div className="explore-header">
                    <Send size={40} className="explore-main-icon" />
                    <h2 className="section-title">Explore near you</h2>
                    <p className="section-subtitle">Discover amazing destinations close to your current location</p>
                  </div>
                  <button className="explore-near-btn">
                    <Send size={18} />
                    <span>Find Nearby Places</span>
                  </button>
                </div>
              </div>
            </section>
          </>
        ) : currentView === 'explore' ? (
          <Explore addBooking={addBooking} />
        ) : currentView === 'planner' ? (
          <AIPlanner />
        ) : currentView === 'packages' ? (
          <Packages />
        ) : currentView === 'stayfood' ? (
          <StayFood />
        ) : currentView === 'stories' ? (
          <Stories addBooking={addBooking} />
        ) : currentView === 'mytrips' ? (
          <MyTrips bookedTrips={bookedTrips} />
        ) : (
          <Community />
        )}
      </main>

      {/* Footer Section */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-logo">
                <Globe size={24} />
                <span>Vindy Tourist</span>
              </div>
              <p className="footer-desc">
                Don't just visit, experience the world. We craft journeys that transform the way you see the planet.
              </p>
              <div className="social-links">
                <a href="#"><Globe size={20} /></a>
                <a href="#"><Globe size={20} /></a>
                <a href="#"><Globe size={20} /></a>
              </div>
            </div>

            <div className="footer-column">
              <h3>Explore</h3>
              <ul>
                <li><a href="#">Destinations</a></li>
                <li><a href="#">AI Trip Planner</a></li>
                <li><a href="#">Tour Packages</a></li>
                <li><a href="#">Stay & Food</a></li>
                <li><a href="#">Travel Stories</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Support</h3>
              <ul>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Travel Guides</a></li>
                <li><a href="#">Booking Policy</a></li>
                <li><a href="#">Cancellation</a></li>
                <li><a href="#">FAQs</a></li>
              </ul>
            </div>

            <div className="footer-column contact-column">
              <h3>Get in Touch</h3>
              <div className="contact-card glass">
                <div className="contact-item">
                  <div className="contact-icon">
                    <Mail size={18} />
                  </div>
                  <div className="contact-text">
                    <label>Email Us</label>
                    <a href="mailto:hello@vindytourist.com">hello@vindytourist.com</a>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <Phone size={18} />
                  </div>
                  <div className="contact-text">
                    <label>Call Us</label>
                    <a href="tel:+918303319119">+91 8303319119</a>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <MapPin size={18} />
                  </div>
                  <div className="contact-text">
                    <label>Visit Us</label>
                    <span>123 Travel Lane, San Francisco, CA 94102</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2026 Vindy Tourist. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Cookies</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Widget */}
      <a
        href={`https://wa.me/918303319119?text=${
          language === 'HI'
            ? '%E0%A4%A8%E0%A4%AE%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%8D%E0%A4%BF%E0%A4%A8%20Vindy%20Tourist%2C%20%E0%A4%AE%E0%A5%81%E0%A4%9B%E0%A5%8D%E0%A4%B9%E0%A5%87%20%E0%A4%8F%E0%A4%95%20%E0%A4%9F%E0%A5%8D%E0%A4%B0%E0%A4%BF%E0%A4%AA%20%E0%A4%AA%E0%A5%8D%E0%A4%B2%E0%A4%BE%E0%A4%A8%20%E0%A4%95%E0%A4%B0%E0%A4%A8%E0%A5%80%20%E0%A4%B9%E0%A5%88%E0%A5%84'
            : 'Hello%20Vindy%20Tourist%2C%20I%20am%20interested%20in%20planning%20a%20trip%20with%20you%21'
        }`}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp-widget"
        title={language === 'HI' ? 'WhatsApp पर चैट करें' : 'Chat on WhatsApp'}
      >
        <span className="tooltip-text">
          {language === 'HI' ? 'हमसे बात करें!' : 'Chat with Us!'}
        </span>
        <div className="pulse-ring"></div>
        <svg className="floating-whatsapp-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.004 22c-2.048 0-4.043-.53-5.81-1.536L2 22l1.564-4.062c-1.12-1.848-1.713-3.99-1.71-6.19C1.86 5.178 7.03 0 13.398 0c3.085.002 5.985 1.198 8.163 3.367 2.18 2.17 3.382 5.056 3.38 8.13-.004 6.31-5.174 11.503-11.537 11.503zm-1.173-4.832l.278.163c1.55.918 3.298 1.402 5.093 1.404 5.378 0 9.752-4.346 9.755-9.69.001-2.587-1.01-5.02-2.85-6.85-1.84-1.83-4.288-2.84-6.88-2.84-5.385 0-9.76 4.35-9.763 9.697-.001 1.737.457 3.432 1.323 4.935l.18.312-.927 3.42 3.518-.916zM17.15 13.9c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.62.14-.18.28-.71.9-.87 1.09-.16.18-.33.2-.6.06-1.02-.51-1.74-.83-2.43-1.46-.57-.52-.96-1.16-1.07-1.35-.11-.19-.01-.29.08-.38.09-.08.2-.23.3-.35.1-.12.13-.2.2-.33.07-.14.03-.26-.02-.36-.05-.1-.43-1.05-.6-1.44-.16-.39-.32-.34-.44-.34h-.38c-.13 0-.34.05-.52.24-.18.19-.7.68-.7 1.66s.72 1.93.82 2.07c.1.14 1.41 2.15 3.42 3.02.48.2 1 .33 1.46.48.51.16.98.14 1.35.08.41-.06 1.65-.68 1.88-1.33.23-.65.23-1.21.16-1.33-.07-.12-.25-.19-.53-.33z" />
        </svg>
      </a>
    </div>
  );
}

export default App;

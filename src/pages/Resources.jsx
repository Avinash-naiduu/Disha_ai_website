import React, { useState } from 'react';
import './css/Resources.css';
import Programming from "../assets/image 1.png";
import Why from "../assets/image 2.png";
import { Link } from 'react-router-dom';

// Example categories data
const categories = [
  {
    name: 'Resources 1',
    items: [
      {
        id: 1,
        image: Programming,
        title: 'Programming-Intuitively, Methodically, Enjoyably',
        date: '10, Nov 2024',
        description: 'To develop coding skills in an easy, accessible, and affordable way to every child.',
      },
      {
        id: 2,
        image: Why,
        title: 'Why Learn Programming Early?',
        date: '12, Dec 2024',
        description: 'Discover the benefits of introducing programming at a young age.',
      },
      {
        id: 3,
        image: Why,
        title: 'Why Learn Programming Early?',
        date: '12, Dec 2024',
        description: 'Discover the benefits of introducing programming at a young age.',
      },
      {
        id: 4,
        image: Why,
        title: 'Why Learn Programming Early?',
        date: '12, Dec 2024',
        description: 'Discover the benefits of introducing programming at a young age.',
      },
      {
        id: 5,
        image: Why,
        title: 'Why Learn Programming Early?',
        date: '12, Dec 2024',
        description: 'Discover the benefits of introducing programming at a young age.',
      },
    ],
  },
  {
    name: 'Resources 2',
    items: [
      {
        id: 6,
        image: Programming,
        title: 'Creative Thinking for Kids',
        date: '15, Jan 2025',
        description: 'How to boost creativity with fun learning activities.',
      },
      {
        id: 7,
        image: Programming,
        title: 'Creative Thinking for Kids',
        date: '15, Jan 2025',
        description: 'How to boost creativity with fun learning activities.',
      },
      {
        id: 8,
        image: Programming,
        title: 'Creative Thinking for Kids',
        date: '15, Jan 2025',
        description: 'How to boost creativity with fun learning activities.',
      },
    ],
  },

  {
    name: 'Resources 3',
    items: [
      {
        id: 9,
        image: Programming,
        title: 'Creative Thinking for Kids',
        date: '15, Jan 2025',
        description: 'How to boost creativity with fun learning activities.',
      },
      {
        id: 10,
        image: Programming,
        title: 'Creative Thinking for Kids',
        date: '15, Jan 2025',
        description: 'How to boost creativity with fun learning activities.',
      },
      {
        id: 11,
        image: Programming,
        title: 'Creative Thinking for Kids',
        date: '15, Jan 2025',
        description: 'How to boost creativity with fun learning activities.',
      },
    ],
  },

  {
    name: 'Resources 4',
    items: [
      {
        id: 12,
        image: Programming,
        title: 'Creative Thinking for Kids',
        date: '15, Jan 2025',
        description: 'How to boost creativity with fun learning activities.',
      },
      {
        id: 13,
        image: Programming,
        title: 'Creative Thinking for Kids',
        date: '15, Jan 2025',
        description: 'How to boost creativity with fun learning activities.',
      },
      {
        id: 14,
        image: Programming,
        title: 'Creative Thinking for Kids',
        date: '15, Jan 2025',
        description: 'How to boost creativity with fun learning activities.',
      },
    ],
  },
];

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  React.useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
};

const Resources = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [activeTab, setActiveTab] = useState(0);

  const isMobile = useMediaQuery('(max-width: 768px)'); // Check if the screen width is <= 768px

  const handleCategoryClick = (index) => {
    setActiveCategory(categories[index]);
    setActiveTab(index);
  };

  return (
    <main className="main-content">
      {isMobile ? (
        /* Mobile Tabs */
        <div className="tabs-container">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`tab-button ${activeTab === index ? 'active' : ''}`}
              onClick={() => handleCategoryClick(index)}
            >
              {category.name}
            </button>
          ))}
        </div>
      ) : (
        /* Sidebar for Larger Screens */
        <aside className="sidebar">
          <h2 className="sidebar-title">Resources</h2>
          <ul className="sidebar-list">
            {categories.map((category, index) => (
              <li
                key={index}
                className={activeCategory.name === category.name ? 'active' : ''}
                onClick={() => handleCategoryClick(index)} >
                <a href="#!" onClick={(e) => e.preventDefault()}>
                  {category.name}
                </a>
              </li>
            ))}
          </ul>
        </aside>
      )}

      {/* Main Section */}
      <div className="section">
        {activeCategory.items.length > 0 ? (
          activeCategory.items.map((item) => (
            <div className="card" key={item.id}>
              <div className="card-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="card-content">
                <div className='sec'>
                <span className="tag">{activeCategory.name}</span>
                <span className="date">{item.date}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <Link to="/Blogdetails" className="read-more-btn"> Read more <span>➤</span> </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="no-items">No items available in this category.</p>
        )}
      </div>
    </main>
  );
};

export default Resources;

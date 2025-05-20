import React, { useState, useEffect } from 'react';

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark class on body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('custom-dark');
    } else {
      document.body.classList.remove('custom-dark');
    }
  }, [darkMode]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">E-Commerce</div>

        {/* Navigation Links */}
        <ul className="navbar-links">
          <li><a href="#" >Home</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Wishlist</a></li>

        </ul>

        {/* Search, Cart, Dark/Light Toggle */}
        <div className="navbar-actions">
          {/* Search Bar */}
          <div className="navbar-search">
            <input
              type="text"
              placeholder="Search..."
              className="navbar-search-input"
            />
            {/* Search Icon SVG */}
            <svg className="navbar-search-icon" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
          {/* Cart Icon */}
          <button className="navbar-icon-btn">
            <svg className="navbar-cart-icon" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
          </button>
          {/* Dark/Light Mode Toggle */}
          <button
            className="navbar-toggle-btn"
            onClick={() => setDarkMode((prev) => !prev)}
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              // Sun icon
              <svg className="navbar-toggle-icon" fill="none" stroke="orange" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            ) : (
              // Moon icon
              <svg className="navbar-toggle-icon" fill="none" stroke="black" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
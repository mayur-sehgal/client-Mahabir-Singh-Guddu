import React, { useState } from 'react';
// Assuming the CSS above is saved in Header.css and imported here
import './Header.css'; 

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  
  const navItems = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'The Legacy', link: '/#legacy' },
    { name: 'Honours', link: '/honours' },
    { name: 'Gallery', link: '/gallery' },
    { name: 'Booking', link: '/contact' },
  ];

  return (
    // Use className="header" to apply CSS styles
    <header className="header">

      <h1>
        Mahabir Singh Guddu
      </h1>
      
      {/* Hamburger Icon for Mobile */}
      <div 
        className="hamburger-icon" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? '✕' : '☰'} 
      </div>

      {/* Navigation Links - use the 'open' class when the menu is active */}
      <nav 
        className={`nav-links ${isMenuOpen ? 'open' : ''}`}
      >
        {navItems.map((item) => (
          <a 
            key={item.name} 
            href={item.link} 
            onClick={() => {
              // Smooth scroll to section (handled by browser due to #link)
              setIsMenuOpen(false); // Close menu after clicking a link (mobile)
            }}
          >
            {item.name}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
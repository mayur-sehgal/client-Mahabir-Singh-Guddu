import React from 'react';
import './App.css'; // Assume basic styles are here
import Header from './Header';
import HomeSection from './HomeSection';
import AboutSection from './AboutSection';
import LegacySection from './LegactSection';
import HonoursSection from './HonoursSection';
import GallerySection from './GallerySection';
import ContactSection from './ContactSection';
import Footer from './Footer';


// Define color palette for quick reference in inline styles
const colors = {
  primary: '#800000', // Earthy Red/Maroon
  secondary: '#FFCC33', // Saffron/Gold
  text: '#333333',
  background: '#F8F8F8',
};

const Home = () => {
  const hash = window.location.hash;
if (hash) {
  // Add a slight delay to ensure the content is rendered
  setTimeout(() => {
    document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
  }, 100); // 100ms is usually enough
}
  return (
    <div className="App">

      <main>
        {/* Sections linked via IDs for smooth scrolling */}
        <div id="home">
          <HomeSection colors={colors} />
        </div>
        
        <div id="about">
          <AboutSection colors={colors} />
        </div>
        
        <div id="legacy">
          <LegacySection colors={colors} />
        </div>
        
        <div id="honours">
          <HonoursSection colors={colors} />
        </div>
        
        <div id="gallery">
          <GallerySection colors={colors} />
        </div>
        
        <div id="contact">
          <ContactSection colors={colors} />
        </div>
      </main>

      <Footer colors={colors} />
    </div>
  );
};

export default Home;
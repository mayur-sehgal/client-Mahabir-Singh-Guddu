import React from 'react';
import './App.css'; // Assume basic styles are here
import Header from './components/Header';
import HomeSection from './sections/HomeSection';
import AboutSection from './sections/AboutSection';
import LegacySection from './sections/LegacySection';
import HonoursSection from './sections/HonoursSection';
import GallerySection from './sections/GallerySection';
import ContactSection from './sections/ContactSection';
import Footer from './components/Footer';

// Define color palette for quick reference in inline styles
const colors = {
  primary: '#800000', // Earthy Red/Maroon
  secondary: '#FFCC33', // Saffron/Gold
  text: '#333333',
  background: '#F8F8F8',
};

const App = () => {
  return (
    <div className="App">
      {/* Fixed Navigation Header */}
      <Header colors={colors} /> 

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

export default App;
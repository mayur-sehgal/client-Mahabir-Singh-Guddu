import React, { useState, useEffect } from "react";
// Import the necessary hook from react-router-dom
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"; 
// Assuming you import the PageLoader component here
import PageLoader from './components/PageLoader'; 
import Home from "./components/Home";
import ContactSection from "./components/ContactSection";
import Header from "./components/Header";
import AboutSection from "./components/AboutSection";
import LegacySection from "./components/LegactSection";
import HonoursSection from "./components/HonoursSection";
import GallerySection from "./components/GallerySection";

// --- New Component: RouterWrapper to manage loading state ---
const RouterWrapper = ({ children }) => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // 1. Trigger the loader immediately upon route change
    setIsLoading(true);

    // 2. Set a timeout for the loader duration (matching the 1-second animation)
    const loaderTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 1000ms = 1 second, matching the PageLoader animation

    // Cleanup: Clear the timer when the component unmounts or before the next route change
    return () => clearTimeout(loaderTimer);
  }, [location]); // Dependency Array: Reruns every time 'location' (the route) changes

  return (
    <>
      {/* Conditionally render the PageLoader on route change */}
      {isLoading && <PageLoader />} 
      
      {/* Render the children (the rest of the app/routes) */}
      {children}
    </>
  );
};


// --- Main App Component ---
export default function App() {
  return (
    <Router>
      {/* The RouterWrapper is placed inside the Router and around Header/Routes */}
      <RouterWrapper>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutSection />} />
          {/* Note: Corrected typo from LegactSection to LegacySection */}
          <Route path="/legacy" element={<LegacySection />} /> 
          <Route path="/honours" element={<HonoursSection />} />
          <Route path="/gallery" element={<GallerySection />} />
          <Route path="/contact" element={<ContactSection />} />
        </Routes>
      </RouterWrapper>
    </Router>
  );
}
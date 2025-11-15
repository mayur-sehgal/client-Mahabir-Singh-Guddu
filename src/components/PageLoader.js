import React, { useState, useEffect } from 'react';
import './PageLoader.css';

// Assume you import your logo here if it's in a source folder
// import logoImage from './assets/logo.png'; 

// Define the duration the *entire loader component* remains visible (1 second for quick load)
const LOADER_VISIBILITY_DURATION = 1000; // 1 second

const PageLoader = ({ finishLoading }) => {
    // State 1: Controls the mounting/unmounting of the component (true by default)
    const [isVisible, setIsVisible] = useState(true);
    
    // State 2: Triggers the CSS animation (enlargement) after a slight delay
    const [isAnimating, setIsAnimating] = useState(false);
    
    // State 3: Controls the fade-out of the *overlay* itself (optional, for smooth exit)
    const [isFadingOut, setIsFadingOut] = useState(false);

    useEffect(() => {
        // Step 1: Start the animation immediately after component mounts
        const animationStartTimer = setTimeout(() => {
            setIsAnimating(true);
        }, 50); // Small delay to ensure render completes before transition starts

        // Step 2: Trigger the fade-out class slightly before the component unmounts
        // (Example: 800ms to allow a 200ms fade-out before the 1000ms total)
        const fadeOutTimer = setTimeout(() => {
            setIsFadingOut(true);
        }, LOADER_VISIBILITY_DURATION - 200); 

        // Step 3: Remove the component from the DOM after the full visibility duration
        const unmountTimer = setTimeout(() => {
            setIsVisible(false);
            
            // Signal to the parent component that the initial load is complete
            if (finishLoading) {
                finishLoading();
            }
        }, LOADER_VISIBILITY_DURATION);

        // Cleanup: Clear all timers when the component unmounts or before re-running
        return () => {
            clearTimeout(animationStartTimer);
            clearTimeout(fadeOutTimer);
            clearTimeout(unmountTimer);
        };
    }, [finishLoading]); 

    // Only render if isVisible is true
    if (!isVisible) {
        return null;
    }

    return (
        <div 
            // Add isFadingOut class to trigger a CSS transition on the overlay itself
            className={`page-loader-overlay ${isFadingOut ? 'fade-out' : ''}`}
        >
            <img 
                src="/logo.png" 
                alt="Loading Logo"
                // The 'animated' class triggers the large scale transition
                className={`loader-logo ${isAnimating ? 'animated' : ''}`}
            />
        </div>
    );
};

export default PageLoader;
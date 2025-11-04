import React from 'react';
// Import the new CSS file
import './HomeSection.css'; 

const HomeSection = () => {
    // Note: Colors object is no longer directly needed in JSX styles, 
    // but the component can accept it for completeness if needed elsewhere.
    
    return (
        <section className="home-section" id="home">
            <div className="home-content">
                {/* Large, bold name */}
                <h2>
                    Mahabir Singh Guddu
                </h2>
                
                {/* Highlighted achievement */}
                <h3>
                    Padma Shri Awardee (2024) | Pioneer of Haryanvi Folk Arts
                </h3>
                
                {/* Prominent Call-to-Action */}
                <a href="#legacy" className="cta-button">
                    Explore His Legacy and Work 
                    <span 
                className="arrow-cta"
            >
                &rarr; {/* Rightwards Arrow Character */}
            </span>
                </a>
            </div>
            
            {/* News Ticker / Current Role Bar */}
            <div className="news-bar">
                Current Role: Additional Director, Haryana Kala Parishad
            </div>
        </section>
    );
};

export default HomeSection;
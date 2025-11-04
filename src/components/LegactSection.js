// sections/LegacySection.js
import React, { useRef, useState, useEffect } from 'react';
// Assuming you will create and import a CSS file for this section
import './LegactSection.css'; 
import icon1 from "./../assets/5.jpg"
import icon2 from "./../assets/6.jpg"
import icon3 from "./../assets/7.jpg"

// Data structured for the three columns
const legacyPoints = [
    {
        icon: icon1,
        title: 'Cultural Revivalist',
        key: 'Revival',
        text: 'Spearheaded the revival and popularization of endangered Haryanvi folk dances, most notably the energetic Ghoda Naach (Kacchi Ghodi), ensuring their continuity.',
    },
    {
        icon: icon2,
        title: 'Global Ambassador',
        key: 'Global',
        text: 'Elevated Haryanvi folk art onto the international stage with performances in the United States, England, and Australia, broadening the art form\'s global appeal.',
    },
    {
        icon: icon3,
        title: 'Social Activism through Art',
        key: 'Social',
        text: 'Every performance carries a powerful message. Dedicated focus on girls\' education and raising awareness against social evils, bridging art with community outreach.',
    },
];

// Define prop types for clarity and ensure default colors are used
const LegacySection = ({ 
    colors = { 
        primary: '#800000', // Deep Maroon
        secondary: '#FF9933', // Saffron/Orange
        deepGreen: '#006400', // Dark Green
        backgroundOffwhite: '#FAF9F6' // Off-white
    } 
}) => {
    // Scroll-Reveal Logic Setup (retained from original)
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.1, // Trigger when 10% of the section is visible
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                // Check if observer exists before unobserving
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const sectionClass = `legacy-section ${isVisible ? 'is-visible' : ''}`;

    return (
        <section 
            ref={sectionRef}
            className={sectionClass}
            style={{ 
                padding: '120px 5%', 
                backgroundColor: colors.backgroundOffwhite // Use defined background color
            }}
        >
            <h2 style={{ 
                textAlign: 'center', 
                color: colors.primary, // Use Deep Maroon for the main heading
                fontSize: '2rem', // Slightly larger
                fontWeight: 700,
                marginBottom: '60px',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)' // Subtle shadow
            }}>
                 The Legacy: Revival, Outreach & Impact
            </h2>

            <div className="legacy-grid">
                {legacyPoints.map((point, index) => (
                    <div 
                        key={point.key} 
                        className="legacy-card"
                        // Stagger the animation delay using inline style
                        style={{ animationDelay: `${0.3 + index * 0.2}s` }}
                    >
                        <div 
                            className="icon" 
                            style={{ 
                                // Override border and background colors using the color prop
                                border: `4px solid ${colors.secondary}`, // Saffron Border
                                backgroundColor: '#FFF7E6', // Light Saffron background (close to original)
                                boxShadow: `0 6px 15px ${colors.secondary}66` // Saffron glow with opacity
                            }}
                        >
                            <img src={point.icon} alt={point.title} />
                        </div>
                        <h3 style={{ 
                            color: colors.primary, // Use Deep Maroon for titles
                            fontSize: '1.8rem' // Clear, strong title
                        }}>
                            {point.title}
                        </h3>
                        <p style={{
                            color: '#333', // Darker text for better contrast
                            lineHeight: 1.7
                        }}>
                            {/* Simple text replace for bolding is fine for this context */}
                            {point.text.replace(/\*\*(.*?)\*\*/g, '$1')}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default LegacySection;
// sections/HonoursSection.js
import React, { useRef, useState, useEffect } from 'react';
import './HonoursSection.css'; // Importing the dedicated CSS file
import icon3 from "./../assets/1.jpg"

// Mock data for other honors
const otherAwards = [
    { year: 1995, title: "Rohtak Kala Kendra Medal", category: "Early Achievement" },
    { year: 2005, title: "Sangeet Natak Akademi Award", category: "Folk Music/Dance" },
    { year: 2012, title: "Haryana Gaurav Samman", category: "State Honor" },
    { year: 2018, title: "Kala Ratan Award", category: "Arts Council Recognition" },
];

const HonoursSection = ({ colors = { primary: '#800000', secondary: '#FF9933', deepGreen: '#006400', backgroundOffwhite: '#FAF9F6' } }) => {
    // Scroll-Reveal Logic Setup
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
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const sectionClass = `honours-section ${isVisible ? 'is-visible' : ''}`;

    return (
        <section 
            ref={sectionRef}
            className={sectionClass}
            style={{ 
                backgroundColor: colors.backgroundOffwhite || 'white', 
                color: colors.primary 
            }}
        >
            <h2 className="honours-title" style={{ color: colors.primary }}>
                Major Honours & Recognition
            </h2>

            {/* --- 1. Prominent Padma Shri Card --- */}
            <div className="padma-shri-card" style={{ border: `4px solid ${colors.secondary}` }}>
                <div className="star-icon" style={{ backgroundColor: colors.secondary }}>
                    <img src={icon3} />

                </div>
                <div className="padma-content">
                    <h3 className="award-title">
                        🏆 The Padma Shri (2024)
                    </h3>
                    <p className="award-citation">
                        Recognized by the President of India for a lifetime of distinguished service in preserving, reviving, and popularizing regional folk culture.
                    </p>
                    <p className="citation-detail" style={{ color: colors.deepGreen }}>
                        Highest civilian honor in the field of Art (Haryanvi Folk).
                    </p>
                </div>
            </div>

            {/* --- 2. Awards Timeline/List --- */}
            <h3 className="timeline-heading" style={{ color: colors.deepGreen }}>
                Other Key Recognitions
            </h3>
            
            <div className="awards-timeline">
                {otherAwards.map((award, index) => (
                   <div 
    key={index} 
    className="timeline-entry" 
    style={{ animationDelay: `${0.6 + index * 0.15}s` }}
>
    <div 
        className="timeline-year" 
        style={{ 
            backgroundColor: colors.primary, 
            /* Removed animationDelay here */
        }}
    >
        {award.year}
    </div>
    <div className="timeline-detail">
        <h4 style={{ color: colors.primary }}>{award.title}</h4>
        <p className="category-tag2" style={{ color: colors.deepGreen }} >{award.category}</p>
    </div>
</div>
                ))}
            </div>

        </section>
    );
};

export default HonoursSection;
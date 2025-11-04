// sections/GallerySection.js
import React, { useRef, useState, useEffect } from 'react';
import './GallerySection.css'; 
import icon1 from "./../assets/1.jpg"
import icon2 from "./../assets/2.jpg"
import icon3 from "./../assets/3.jpg"
import icon4 from "./../assets/4.jpg"
import icon5 from "./../assets/5.jpg"
import icon6 from "./../assets/6.jpg"
import icon7 from "./../assets/7.jpg"
import icon8 from "./../assets/8.jpg"
import icon9 from "./../assets/9.jpg"
import icon10 from "./../assets/10.jpg"


// Mock data for gallery items
const galleryItems = [
    { title: "Ghoda Naach Performance", icon: icon1, desc: "The famous Kacchi Ghodi dance.", category: 'Dance' },
    { title: "Raagni Singers", icon: icon2, desc: "Traditional Haryanvi singing style.", category: 'Music' },
    { title: "Stage Drama", icon: icon3, desc: "A scene from a folk play.", category: 'Theatre' },
    { title: "International Show - UK", icon: icon10, desc: "Performing in London, England.", category: 'Outreach' },
    { title: "Instrumental Rhythms", icon: icon9, desc: "Using Dhol and Nagara.", category: 'Music' },
    { title: "Community Outreach", icon: icon2, desc: "Teaching local students.", category: 'Education' },
];

const GallerySection = ({ colors = { primary: '#800000', secondary: '#FF9933', deepGreen: '#006400', backgroundOffwhite: '#FAF9F6' } }) => {
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
                threshold: 0.1, 
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

    const sectionClass = `gallery-section ${isVisible ? 'is-visible' : ''}`;

    return (
        <section 
            ref={sectionRef}
            className={sectionClass}
            style={{ 
                backgroundColor: colors.backgroundOffwhite || 'white', 
                color: colors.primary 
            }}
        >
            <h2 className="gallery-title" style={{ color: colors.primary }}>
                Gallery & Media Showcase
            </h2>
            <p className="gallery-subtitle" style={{ color: colors.deepGreen }}>
                A visual journey through Haryanvi folk theatre, music, and dance.
            </p>

            <div className="media-grid">
                {galleryItems.map((item, index) => (
                    <div 
                        key={index} 
                        className="media-card"
                        // Staggered entrance animation delay
                        style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                    >
                        <div 
                            className="image-placeholder" 
                            style={{ 
                                backgroundColor: colors.primary, // Use primary color as background
                                borderBottom: `5px solid ${colors.secondary}` // Accent color border
                            }}
                        >
<img src={item.icon} alt={item.title} className="placeholder-image"/>                        </div>
                        <div className="card-content">
                            <h3 style={{ color: colors.primary }}>{item.title}</h3>
                            <p>{item.desc}</p>
                            <span className="category-tag" style={{ backgroundColor: colors.deepGreen }}>{item.category}</span>
                        </div>
                    </div>
                ))}
            </div>
            
        </section>
    );
};

export default GallerySection;
import React, { useRef, useState, useEffect } from 'react';
import './AboutSection.css';
import img from './../assets/3.jpg'

const AboutSection = () => {
    const careerHighlights = [
        "Revived and performed traditional Haryanvi dance-forms such as <strong>Ghoda Naach</strong> ('Kacchi Ghodi').",
        "Associated with prestigious institutions like <strong>All India Radio (Rohtak)</strong> and the <strong>North Zone Cultural Centre (NZCC)</strong>.",
        "Served in government roles: Haryana Sports Dept. (~1991) and Education Dept. (~2020).",
        "Currently holds the position of <strong>Additional Director in the Haryana Kala Parishad</strong> (Haryana Arts Council).",
        "Has performed Haryanvi folk art internationally in the <strong>United States, England, and Australia</strong>."
    ];

    // 1. Refs and States for both columns
    const bioRef = useRef(null); // NEW REF for the left column
    const careerRef = useRef(null);
    const [isBioVisible, setIsBioVisible] = useState(false); // NEW STATE for the left column
    const [isCareerVisible, setIsCareerVisible] = useState(false);

    // 2. Combined Intersection Observer Logic
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Check which element is intersecting and set the respective state
                        if (entry.target === bioRef.current) {
                            setIsBioVisible(true);
                        } else if (entry.target === careerRef.current) {
                            setIsCareerVisible(true);
                        }
                        // Stop observing this specific element once it's visible
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.2,
            }
        );

        // Start observing both elements
        if (bioRef.current) {
            observer.observe(bioRef.current);
        }
        if (careerRef.current) {
            observer.observe(careerRef.current);
        }

        // Cleanup function
        return () => {
            if (bioRef.current) {
                observer.unobserve(bioRef.current);
            }
            if (careerRef.current) {
                observer.unobserve(careerRef.current);
            }
        };
    }, []);


    // Helper functions for dynamic classes
    const bioClass = `about-column bio-photo-card ${isBioVisible ? 'is-visible' : ''}`;
    const careerClass = `about-column career-summary ${isCareerVisible ? 'is-visible' : ''}`;

    return (
        <section className="about-section" id="about">
            <div className="about-content-wrapper">
                
                {/* --- Left Column: Portrait & Key Facts (APPLY REF & CLASS) --- */}
                <div 
                    ref={bioRef}
                    className={bioClass}
                >
                    <div className="portrait-container">
                        {/* The portrait-container itself had the animation, so we remove the original CSS animation from it */}
                        <img 
                            src={img} 
                            alt="Mahabir Singh Guddu - Folk Artist" 
                            className="artist-portrait"
                        />
                        <div className="padma-shri-badge">
                            <strong>PADMA SHRI (2024)</strong>
                        </div>
                    </div>
                    
                    <div className="key-facts">
                        {/* Key facts animations will now also be controlled by the parent's visibility */}
                        <p> <strong>Born:</strong> 10 October 1961, Gangoli (Jind), Haryana, India.</p>
                        <p> <strong>Debut:</strong> Age 11, influenced by his <strong>Poet Father</strong> during the freedom-struggle era.</p>
                        <p> <strong>Specialty:</strong> Haryanvi folk culture (Music, Dance, Theatrics).</p>
                    </div>
                </div>

                {/* --- Right Column: Career & Impact (Ref and Class added previously) --- */}
                <div 
                    ref={careerRef}
                    className={careerClass}
                >
                    <h2 className="section-title">
                        About: The Artist & The Cultural Activist
                    </h2>
                     <p className="summary-text">
                        <strong>Mahabir Singh Guddu</strong> is a towering figure in Haryanvi folk arts, blending performance, cultural activism, and educational outreach over <strong>five decades</strong>. His work goes beyond the stage, actively working to preserve regional traditions and bring them to a <strong>global audience</strong>.
                    </p>
                    
                    <h3 className="subsection-title">
                        Distinctive Contributions & Career Highlights
                    </h3>
                    
                    <ul className="highlights-list">
                        {careerHighlights.map((item, index) => (
                            <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
                        ))}
                    </ul>

                    <h3 className="subsection-title themes-title">
                        Key Themes: Art, Education, & Social Change
                    </h3>
                    <p className="themes-text">
                        Coming from a background in education, his performances often carry powerful <strong>social messages</strong>, advocating strongly for <strong>girls' education</strong> and raising awareness against social evils, positioning him as a vital bridge between performance art and community outreach.
                    </p>{/* ... (rest of the right column content) ... */}
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
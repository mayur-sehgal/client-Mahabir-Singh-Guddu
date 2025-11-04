import React, { useRef, useState, useEffect } from 'react';
import './ContactSection.css'; // Importing the dedicated CSS file

const ContactSection = ({ colors = { primary: '#800000', secondary: '#FF9933', deepGreen: '#006400', backgroundOffwhite: '#FAF9F6' } }) => {
    // Scroll-Reveal Logic Setup
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    
    // State for form fields
    const [formState, setFormState] = useState({ name: '', email: '', event: '', message: '' });
    
    // State for submission feedback
    const [submissionMessage, setSubmissionMessage] = useState({ text: '', type: '' });

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { root: null, rootMargin: '0px', threshold: 0.1 }
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

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // --- IMPORTANT: Replacing alert() with custom message ---
        setSubmissionMessage({ text: 'Thank you for your inquiry! We will respond shortly.', type: 'success' }); 
        console.log('Form Submitted:', formState);
        setFormState({ name: '', email: '', event: '', message: '' });
        
        // Clear message after 5 seconds
        setTimeout(() => setSubmissionMessage({ text: '', type: '' }), 5000);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState(prev => ({ ...prev, [name]: value }));
    };

    const sectionClass = `contact-section ${isVisible ? 'is-visible' : ''}`;

    return (
        <section 
            ref={sectionRef}
            className={sectionClass}
            // Use colors.primary for the striking background color
            style={{ backgroundColor: colors.primary }} 
        >
            <h2 className="contact-title" style={{ color: colors.secondary }}>
                Contact & Bookings
            </h2>
            <p className="contact-subtitle">
                For performances, workshops, and official inquiries.
            </p>

            <div className="contact-grid">
                
                {/* --- Left Column: Official Details --- */}
                <div className="official-details">
                    <h3 className="detail-heading">Official Capacity</h3>
                    <p>
                        As the Additional Director of the Haryana Kala Parishad, all official inquiries regarding cultural policy, state events, and government collaborations should be directed through the main office.
                    </p>
                    
                    {/* The Info Box now relies on CSS variables for primary styling, only using the dynamic prop for the border accent. */}
                    <div className="info-box" style={{ borderLeftColor: colors.secondary }}>
                        <h4>Haryana Kala Parishad (Arts Council)</h4>
                        <p><strong>Role:</strong> Additional Director</p>
                        <p><strong>Location:</strong> Kurukshetra, Haryana, India</p>
                        <p><strong>Email:</strong> official@haryanaartscouncil.gov</p>
                    </div>

                   
                </div>

                {/* --- Right Column: Booking Form --- */}
                <div className="booking-form-container">
                    <h3 className="form-heading">Book a Performance/Workshop</h3>
                    <form onSubmit={handleSubmit}>
                        
                        <input 
                            type="text" 
                            name="name"
                            placeholder="Your Name / Organization" 
                            value={formState.name}
                            onChange={handleChange}
                            required
                        />
                        
                        <input 
                            type="email" 
                            name="email"
                            placeholder="Your Email" 
                            value={formState.email}
                            onChange={handleChange}
                            required
                        />

                        <select 
                            name="event"
                            value={formState.event}
                            onChange={handleChange}
                            required
                        >
                            <option value="" disabled>Select Event Type...</option>
                            <option value="cultural_festival">Cultural Festival</option>
                            <option value="private_event">Private Event / Wedding</option>
                            <option value="workshop">Educational Workshop</option>
                            <option value="other">Other Inquiry</option>
                        </select>
                        
                        <textarea 
                            name="message"
                            placeholder="Tell us about the event (Date, Location, Requirements)"
                            rows="5"
                            value={formState.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                        
                        <button type="submit" className="submit-button">
                            Send Booking Request
                        </button>
                    </form>
                    
                    {/* Submission Message Display */}
                    {submissionMessage.text && (
                        <div className={`submission-message ${submissionMessage.type}`}>
                            {submissionMessage.text}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ContactSection;

import React from 'react';
import { useFadeIn } from '../hooks/useFadeIn';

const Venue = () => {
    const [ref, isVisible] = useFadeIn();

    return (
        <section id="venue" className={`section ${isVisible ? 'fade-in visible' : 'fade-in'}`} ref={ref}>
            <div className="container">
                <h2>Venue & Location</h2>
                <p className="section-subtitle">Our event will be held at the state-of-the-art Tech Convention Center, with options for virtual participation.</p>
                <div className="venue-grid">
                    <div className="venue-map-placeholder card">
                        {/* Placeholder for an embedded map */}
                        <p>Google Map will be embedded here.</p>
                    </div>
                    <div className="venue-details">
                        <h3>Tech Convention Center</h3>
                        <p>123 Innovation Drive, Tech City, TC 54321</p>
                        <h4>Accessibility</h4>
                        <p>The venue is fully accessible. Please contact us for any specific accommodation needs.</p>
                        <h4>Virtual Participation</h4>
                        <p>All keynotes and workshops will be streamed live. A dedicated Discord server will be available for virtual networking and team formation.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Venue;

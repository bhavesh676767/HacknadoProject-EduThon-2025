import React from 'react';
import { useFadeIn } from '../hooks/useFadeIn';

const Sponsors = () => {
    const [ref, isVisible] = useFadeIn();
    return (
        <section id="sponsors" className={`section ${isVisible ? 'fade-in visible' : 'fade-in'}`} ref={ref}>
            <div className="container">
                <h2>Sponsors</h2>
                <p className="sponsors-tagline">Powered by caffeine & chaos.</p>
                <div className="sponsors-grid">
                    <div className="sponsor-logo">Sponsor 1</div>
                    <div className="sponsor-logo">Sponsor 2</div>
                    <div className="sponsor-logo">Sponsor 3</div>
                    <div className="sponsor-logo">Sponsor 4</div>
                </div>
            </div>
        </section>
    );
};

export default Sponsors;
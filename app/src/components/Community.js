import React from 'react';
import { useFadeIn } from '../hooks/useFadeIn';

const Community = () => {
    const [ref, isVisible] = useFadeIn();

    return (
        <section id="community" className={`section ${isVisible ? 'fade-in visible' : 'fade-in'}`} ref={ref}>
            <div className="container">
                <h2>Join Our Community</h2>
                <p className="section-subtitle">Stay connected, get updates, and be part of the conversation.</p>
                <div className="community-grid">
                    <div className="community-card card">
                        <h3>Discord</h3>
                        <p>Join our Discord server for live chats, team formation, and support.</p>
                        <a href="#" className="btn btn-secondary">Join Discord</a>
                    </div>
                    <div className="community-card card">
                        <h3>Newsletter</h3>
                        <p>Subscribe to our newsletter for the latest news, announcements, and special offers.</p>
                        <form className="newsletter-form">
                            <input type="email" placeholder="Enter your email" />
                            <button type="submit" className="btn btn-primary">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Community;

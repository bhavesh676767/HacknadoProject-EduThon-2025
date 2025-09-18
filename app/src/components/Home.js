import React from 'react';
import { Link } from 'react-scroll';
import { useFadeIn } from '../hooks/useFadeIn';

const Home = () => {
    const [ref, isVisible] = useFadeIn();

    return (
        <section id="home" className="hero" ref={ref}>
            <div className={`container ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
                <h1>Innovate, Create, Conquer</h1>
                <p className="subtitle">Join the brightest minds at Hacknado 2025, where innovation meets opportunity. Build the future, one line of code at a time.</p>
                <div className="hero-buttons">
                    <Link to="registration" smooth={true} duration={500} className="btn btn-primary">Register Now</Link>
                    <Link to="schedule" smooth={true} duration={500} className="btn btn-secondary">View Schedule</Link>
                </div>
            </div>
        </section>
    );
};

export default Home;
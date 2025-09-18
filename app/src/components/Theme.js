import React from 'react';
import { useFadeIn } from '../hooks/useFadeIn';

const Theme = () => {
    const [ref, isVisible] = useFadeIn();

    return (
        <section id="theme" className={`section ${isVisible ? 'fade-in visible' : 'fade-in'}`} ref={ref}>
            <div className="container">
                <h2>Our Vision</h2>
                <p className="section-subtitle">This year's theme, "Bridging Realities," challenges participants to merge digital and physical worlds. We seek innovative solutions that leverage technology to solve real-world problems in new and unexpected ways.</p>
                <div className="theme-content">
                    <p>The goal of Hacknado 2025 is to foster a new generation of builders, thinkers, and innovators. We aim to provide a platform where creativity flourishes, boundaries are pushed, and impactful projects are born. Our target audience includes students, developers, designers, and entrepreneurs from all backgrounds who are passionate about technology and its potential to shape the future.</p>
                    {/* Placeholder for infographic */}
                    <div className="infographic-placeholder card">
                        <p><strong>Hackathon Workflow:</strong> Idea -> Team Up -> Build -> Refine -> Pitch</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Theme;

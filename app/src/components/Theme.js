import React from 'react';
import { useFadeIn } from '../hooks/useFadeIn';

const Theme = () => {
    const [ref, isVisible] = useFadeIn();
    return (
        <section id="theme" className={`section ${isVisible ? 'fade-in visible' : 'fade-in'}`} ref={ref}>
            <div className="container">
                <h2>Event Theme</h2>
                <p>This year is all about "Controlled Chaos". We want to see the most creative, unexpected, and hilariously brilliant projects. Think outside the box, then set the box on fire (metaphorically, of course).</p>
            </div>
        </section>
    );
};

export default Theme;
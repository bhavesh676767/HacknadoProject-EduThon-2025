import React from 'react';
import { useFadeIn } from '../hooks/useFadeIn';

const Venue = () => {
    const [ref, isVisible] = useFadeIn();
    return (
        <section id="venue" className={`section ${isVisible ? 'fade-in visible' : 'fade-in'}`} ref={ref}>
            <div className="container">
                <h2>Venue Details</h2>
                <p>We're taking over the internet. The event is fully virtual, so you can code from your basement, your attic, or your secret underground lair. All you need is a computer and a questionable amount of energy drinks.</p>
                <div className="fun-fact">
                    <p><strong>Fun Fact:</strong> Our servers are powered by potatoes and sheer willpower. Don't ask.</p>
                </div>
            </div>
        </section>
    );
};

export default Venue;
import React from 'react';
import { useFadeIn } from '../hooks/useFadeIn';

const Social = () => {
    const [ref, isVisible] = useFadeIn();
    return (
        <section id="social" className={`section ${isVisible ? 'fade-in visible' : 'fade-in'}`} ref={ref}>
            <div className="container">
                <h2>Join the Chaos</h2>
                 <div className="social-links">
                    <a href="#" title="Follow the chaos">Twitter</a>
                    <a href="#" title="Share your memes here">Discord</a>
                    <a href="#" title="Stalk our code">GitHub</a>
                </div>
            </div>
        </section>
    );
};

export default Social;
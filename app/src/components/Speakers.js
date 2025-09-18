import React from 'react';
import { useFadeIn } from '../hooks/useFadeIn';

const Speakers = () => {
    const [ref, isVisible] = useFadeIn();
    return (
        <section id="speakers" className={`section ${isVisible ? 'fade-in visible' : 'fade-in'}`} ref={ref}>
            <div className="container">
                <h2>Speakers</h2>
                <div className="speakers-grid">
                    <div className="speaker-card">
                        <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="Speaker 1" />
                        <h3>Chad Coder</h3>
                        <p>"The GigaChad of JavaScript"</p>
                    </div>
                    <div className="speaker-card">
                        <img src="https://i.pravatar.cc/150?u=a042581f4e29026704e" alt="Speaker 2" />
                        <h3>Karen Debugger</h3>
                        <p>"She'd like to speak to the manager of your bugs."</p>
                    </div>
                    <div className="speaker-card">
                        <img src="https://i.pravatar.cc/150?u=a042581f4e29026704f" alt="Speaker 3" />
                        <h3>Sussy Baka</h3>
                        <p>"Expert in Among Us-based development."</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Speakers;
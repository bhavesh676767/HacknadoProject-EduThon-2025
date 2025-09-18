import React from 'react';
import CountUp from 'react-countup';
import { useFadeIn } from '../hooks/useFadeIn';

const StatItem = ({ end, label }) => (
    <div className="stat-item">
        <CountUp end={end} duration={3} startOnMount={false} enableScrollSpy scrollSpyOnce>
            {({ countUpRef }) => (
                <span className="stat-number" ref={countUpRef} />
            )}
        </CountUp>
        <p className="stat-label">{label}</p>
    </div>
);

const Stats = () => {
    const [ref, isVisible] = useFadeIn();

    return (
        <section id="stats" className={`section stats-section ${isVisible ? 'fade-in visible' : 'fade-in'}`} ref={ref}>
            <div className="container">
                <div className="stats-grid">
                    <StatItem end={1500} label="Participants" />
                    <StatItem end={48} label="Hours of Hacking" />
                    <StatItem end={50000} label="In Prizes" />
                    <StatItem end={30} label="Countries Represented" />
                </div>
            </div>
        </section>
    );
};

export default Stats;


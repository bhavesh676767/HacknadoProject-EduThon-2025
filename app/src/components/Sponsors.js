import React from 'react';
import { useFadeIn } from '../hooks/useFadeIn';

const SponsorTier = ({ title, logos }) => (
    <div className="sponsor-tier">
        <h3>{title}</h3>
        <div className="sponsors-grid">
            {logos.map(logo => (
                <a href={logo.url} key={logo.name} target="_blank" rel="noopener noreferrer" className="sponsor-logo card">
                    <img src={`https://logo.clearbit.com/${logo.domain}`} alt={logo.name} />
                </a>
            ))}
        </div>
    </div>
);

const Sponsors = () => {
    const [ref, isVisible] = useFadeIn();

    const sponsorData = {
        platinum: [{ name: 'Google', domain: 'google.com', url: '#' }, { name: 'Microsoft', domain: 'microsoft.com', url: '#' }],
        gold: [{ name: 'GitHub', domain: 'github.com', url: '#' }, { name: 'Vercel', domain: 'vercel.com', url: '#' }, { name: 'Figma', domain: 'figma.com', url: '#' }],
        silver: [{ name: 'Slack', domain: 'slack.com', url: '#' }, { name: 'Notion', domain: 'notion.so', url: '#' }],
    };

    return (
        <section id="sponsors" className={`section ${isVisible ? 'fade-in visible' : 'fade-in'}`} ref={ref}>
            <div className="container">
                <h2>Our Sponsors</h2>
                <p className="section-subtitle">We are grateful for the support of our amazing sponsors who make this event possible.</p>
                
                <SponsorTier title="Platinum" logos={sponsorData.platinum} />
                <SponsorTier title="Gold" logos={sponsorData.gold} />
                <SponsorTier title="Silver" logos={sponsorData.silver} />

            </div>
        </section>
    );
};

export default Sponsors;

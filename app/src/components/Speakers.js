import React, { useState } from 'react';
import { useFadeIn } from '../hooks/useFadeIn';

const speakersData = [
    {
        name: 'Dr. Evelyn Reed',
        title: 'Quantum Computing Researcher',
        topic: 'The Quantum Leap in AI',
        track: 'AI & ML',
        img: 'https://i.pravatar.cc/150?u=evelyn',
        social: { twitter: '#', linkedin: '#' },
    },
    {
        name: 'John Doe',
        title: 'Senior Software Engineer, Google',
        topic: 'Advanced React Patterns',
        track: 'Web Dev',
        img: 'https://i.pravatar.cc/150?u=john',
        social: { twitter: '#', linkedin: '#' },
    },
    {
        name: 'Jane Smith',
        title: 'Ethical Hacker & Security Analyst',
        topic: 'The Art of Digital Defense',
        track: 'Cybersecurity',
        img: 'https://i.pravatar.cc/150?u=jane',
        social: { twitter: '#', linkedin: '#' },
    },
    {
        name: 'Sarah Chen',
        title: 'Lead Product Designer, Figma',
        topic: 'UI/UX for Developers',
        track: 'Design',
        img: 'https://i.pravatar.cc/150?u=sarah',
        social: { twitter: '#', linkedin: '#' },
    },
];

const SpeakerCard = ({ speaker }) => (
    <div className="card speaker-card">
        <img src={speaker.img} alt={speaker.name} className="speaker-img" />
        <h3>{speaker.name}</h3>
        <p className="speaker-title">{speaker.title}</p>
        <p className="speaker-topic"><strong>Topic:</strong> {speaker.topic}</p>
        <div className="speaker-social">
            <a href={speaker.social.twitter} target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href={speaker.social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
    </div>
);

const Speakers = () => {
    const [ref, isVisible] = useFadeIn();
    const [filter, setFilter] = useState('All');

    const tracks = ['All', 'AI & ML', 'Web Dev', 'Cybersecurity', 'Design'];
    const filteredSpeakers = filter === 'All' ? speakersData : speakersData.filter(s => s.track === filter);

    return (
        <section id="speakers" className={`section ${isVisible ? 'fade-in visible' : 'fade-in'}`} ref={ref}>
            <div className="container">
                <h2>Our Speakers</h2>
                <p className="section-subtitle">Meet the industry leaders and experts who will be sharing their knowledge.</p>
                
                <div className="filter-bar">
                    {tracks.map(track => (
                        <button 
                            key={track}
                            className={`filter-btn ${filter === track ? 'active' : ''}`}
                            onClick={() => setFilter(track)}
                        >
                            {track}
                        </button>
                    ))}
                </div>

                <div className="speakers-grid">
                    {filteredSpeakers.map(speaker => (
                        <SpeakerCard key={speaker.name} speaker={speaker} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Speakers;

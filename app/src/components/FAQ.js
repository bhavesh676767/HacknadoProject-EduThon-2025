import React, { useState } from 'react';
import { useFadeIn } from '../hooks/useFadeIn';

const faqData = [
    {
        question: 'What is the eligibility criteria to participate?',
        answer: 'The hackathon is open to all university students, recent graduates, and young professionals. We welcome participants from all backgrounds and skill levels.'
    },
    {
        question: 'How do I form a team?',
        answer: 'You can form a team of up to 4 members. You can either register as a team or find team members on our Discord server during the team formation event.'
    },
    {
        question: 'Is there a registration fee?',
        answer: 'No, Hacknado 2025 is completely free for all participants thanks to our generous sponsors.'
    },
    {
        question: 'What should I bring to the event?',
        answer: 'For physical attendees, bring your laptop, chargers, and any other hardware you might need. For virtual attendees, a stable internet connection and your creative energy are all you need!'
    },
];

const FaqItem = ({ faq, index, toggleFAQ }) => (
    <div className={`faq-item ${faq.open ? 'open' : ''}`}>
        <div className="faq-question" onClick={() => toggleFAQ(index)}>
            <h4>{faq.question}</h4>
            <span className="faq-toggle">{faq.open ? '-' : '+'}</span>
        </div>
        <div className="faq-answer">
            <p>{faq.answer}</p>
        </div>
    </div>
);

const FAQ = () => {
    const [ref, isVisible] = useFadeIn();
    const [faqs, setFaqs] = useState(faqData.map(f => ({ ...f, open: false })));

    const toggleFAQ = index => {
        setFaqs(faqs.map((faq, i) => {
            if (i === index) {
                faq.open = !faq.open;
            } else {
                faq.open = false; // Optional: close others when one is opened
            }
            return faq;
        }));
    };

    return (
        <section id="faq" className={`section ${isVisible ? 'fade-in visible' : 'fade-in'}`} ref={ref}>
            <div className="container">
                <h2>Frequently Asked Questions</h2>
                <p className="section-subtitle">Have questions? We have answers. If you can't find what you're looking for, feel free to contact us.</p>
                <div className="faq-list">
                    {faqs.map((faq, i) => (
                        <FaqItem key={i} faq={faq} index={i} toggleFAQ={toggleFAQ} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;

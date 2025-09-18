import React from 'react';
import { useFadeIn } from '../hooks/useFadeIn';

const testimonialData = [
    {
        quote: 'Hacknado was a life-changing experience. I met my co-founder here and we launched our startup a year later!',
        name: 'Alex Johnson',
        title: 'CEO, Tech Innovators',
        img: 'https://i.pravatar.cc/100?u=alex'
    },
    {
        quote: 'The energy, the people, the projects... it was an unforgettable weekend of intense learning and fun.',
        name: 'Maria Garcia',
        title: 'Software Engineer, Microsoft',
        img: 'https://i.pravatar.cc/100?u=maria'
    },
    {
        quote: 'As a designer, I felt incredibly included. The collaboration between coders and designers was seamless.',
        name: 'Samira Khan',
        title: 'UX Designer, Google',
        img: 'https://i.pravatar.cc/100?u=samira'
    },
];

const TestimonialCard = ({ testimonial }) => (
    <div className="card testimonial-card">
        <p className="testimonial-quote">"{testimonial.quote}"</p>
        <div className="testimonial-author">
            <img src={testimonial.img} alt={testimonial.name} />
            <div>
                <h4>{testimonial.name}</h4>
                <p>{testimonial.title}</p>
            </div>
        </div>
    </div>
);

const Testimonials = () => {
    const [ref, isVisible] = useFadeIn();

    return (
        <section id="testimonials" className={`section ${isVisible ? 'fade-in visible' : 'fade-in'}`} ref={ref}>
            <div className="container">
                <h2>What Our Alumni Say</h2>
                <p className="section-subtitle">Real stories from past participants who turned their ideas into reality.</p>
                <div className="testimonials-grid">
                    {testimonialData.map(t => <TestimonialCard key={t.name} testimonial={t} />)}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

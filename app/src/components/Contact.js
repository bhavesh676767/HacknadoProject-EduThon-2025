import React from 'react';
import { useFadeIn } from '../hooks/useFadeIn';

const Contact = () => {
    const [ref, isVisible] = useFadeIn();

    return (
        <section id="contact" className={`section ${isVisible ? 'fade-in visible' : 'fade-in'}`} ref={ref}>
            <div className="container">
                <h2>Contact Us</h2>
                <p className="section-subtitle">Have a question or want to get involved? We'd love to hear from you.</p>
                <div className="contact-grid">
                    <div className="contact-form-wrapper">
                        <form className="contact-form">
                            <div className="form-group">
                                <label htmlFor="contactName">Name</label>
                                <input type="text" id="contactName" name="contactName" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="contactEmail">Email</label>
                                <input type="email" id="contactEmail" name="contactEmail" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message" rows="5" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Send Message</button>
                        </form>
                    </div>
                    <div className="contact-info">
                        <h3>Our Information</h3>
                        <p><strong>Email:</strong> <a href="mailto:info@hacknado.com">info@hacknado.com</a></p>
                        <p><strong>Address:</strong> 123 Innovation Drive, Tech City, TC 54321</p>
                        <p>Follow us on our social channels to stay updated!</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

import React from 'react';
import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-column">
                        <h4>Hacknado 2025</h4>
                        <p>Innovate, Create, Conquer.</p>
                    </div>
                    <div className="footer-column">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
                            <li><Link to="schedule" smooth={true} duration={500}>Schedule</Link></li>
                            <li><Link to="speakers" smooth={true} duration={500}>Speakers</Link></li>
                            <li><Link to="faq" smooth={true} duration={500}>FAQ</Link></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Contact</h4>
                        <ul>
                            <li><a href="mailto:info@hacknado.com">info@hacknado.com</a></li>
                            <li><p>123 Innovation Drive, Tech City</p></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Follow Us</h4>
                        <div className="social-links-footer">
                            <a href="#">Twitter</a>
                            <a href="#">Discord</a>
                            <a href="#">GitHub</a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2025 Hacknado. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
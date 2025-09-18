import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <header className="navbar">
            <div className="container">
                <Link to="home" smooth={true} duration={500} className="logo">Hacknado 2025</Link>
                <nav>
                    <ul className="nav-links">
                        <li><Link to="home" smooth={true} duration={500} activeClass="active">Home</Link></li>
                        <li><Link to="theme" smooth={true} duration={500} activeClass="active">Theme</Link></li>
                        <li><Link to="schedule" smooth={true} duration={500} activeClass="active">Schedule</Link></li>
                        <li><Link to="speakers" smooth={true} duration={500} activeClass="active">Speakers</Link></li>
                        <li><Link to="sponsors" smooth={true} duration={500} activeClass="active">Sponsors</Link></li>
                        <li><Link to="faq" smooth={true} duration={500} activeClass="active">FAQ</Link></li>
                        <li><Link to="contact" smooth={true} duration={500} activeClass="active">Contact</Link></li>
                        <li><Link to="registration" smooth={true} duration={500} className="btn btn-primary">Register</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
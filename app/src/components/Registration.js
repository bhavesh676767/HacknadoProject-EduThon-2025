import React from 'react';
import { useFadeIn } from '../hooks/useFadeIn';

const Registration = () => {
    const [ref, isVisible] = useFadeIn();

    return (
        <section id="registration" className={`section ${isVisible ? 'fade-in visible' : 'fade-in'}`} ref={ref}>
            <div className="container">
                <h2>Register for Hacknado 2025</h2>
                <p className="section-subtitle">Secure your spot to innovate, create, and conquer. We have options for participants, mentors, and volunteers.</p>
                <form className="registration-form">
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="fullName">Full Name</label>
                            <input type="text" id="fullName" name="fullName" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="registrationType">I am a...</label>
                        <select id="registrationType" name="registrationType">
                            <option value="participant">Participant</option>
                            <option value="mentor">Mentor</option>
                            <option value="volunteer">Volunteer</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="tshirtSize">T-Shirt Size</label>
                        <select id="tshirtSize" name="tshirtSize">
                            <option value="s">Small</option>
                            <option value="m">Medium</option>
                            <option value="l">Large</option>
                            <option value="xl">X-Large</option>
                        </select>
                    </div>
                    <div className="form-group checkbox-group">
                        <input type="checkbox" id="codeOfConduct" name="codeOfConduct" required />
                        <label htmlFor="codeOfConduct">I agree to the <a href="#">Code of Conduct</a>.</label>
                    </div>
                    <button type="submit" className="btn btn-primary btn-full">Register Now</button>
                </form>
            </div>
        </section>
    );
};

export default Registration;

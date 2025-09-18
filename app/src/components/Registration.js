import React from 'react';
import { useFadeIn } from '../hooks/useFadeIn';

const Registration = () => {
    const [ref, isVisible] = useFadeIn();
    return (
        <section id="registration" className={`section ${isVisible ? 'fade-in visible' : 'fade-in'}`} ref={ref}>
            <div className="container">
                <h2>Register for Hacknado 2025</h2>
                <form className="registration-form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required placeholder="Yes, you really want to join this madness." />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required placeholder="Your secret email for top-secret info." />
                    </div>
                    <div className="form-group">
                        <label htmlFor="track">Choose Your Chaos</label>
                        <select id="track" name="track">
                            <option value="web">Web Dev</option>
                            <option value="design">Design</option>
                            <option value="general">General</option>
                            <option value="memes">Memeology</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit to the Void</button>
                </form>
            </div>
        </section>
    );
};

export default Registration;
import React from 'react';
import { useFadeIn } from '../hooks/useFadeIn';

const Schedule = () => {
    const [ref, isVisible] = useFadeIn();

    return (
        <section id="schedule" className={`section ${isVisible ? 'fade-in visible' : 'fade-in'}`} ref={ref}>
            <div className="container">
                <h2>Event Schedule</h2>
                <p className="section-subtitle">Follow our packed schedule of keynotes, workshops, and networking events. Don't miss a moment!</p>
                <div className="schedule-actions">
                    <button className="btn btn-secondary">Download Schedule (PDF)</button>
                </div>
                <div className="schedule-table-wrapper">
                    <table className="schedule-table">
                        <thead>
                            <tr>
                                <th>Time</th>
                                <th>Session Title</th>
                                <th>Speaker</th>
                                <th>Track</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>9:00 AM - 10:00 AM</td>
                                <td>Opening Keynote: The Future is Now</td>
                                <td>Dr. Evelyn Reed</td>
                                <td>Main Stage</td>
                            </tr>
                            <tr>
                                <td>10:30 AM - 11:30 AM</td>
                                <td>Workshop: Advanced React Patterns</td>
                                <td>John Doe</td>
                                <td>Web Dev</td>
                            </tr>
                            <tr>
                                <td>11:45 AM - 12:45 PM</td>
                                <td>Panel: AI & Ethics</td>
                                <td>Jane Smith & Friends</td>
                                <td>AI & ML</td>
                            </tr>
                            <tr>
                                <td>12:45 PM - 2:00 PM</td>
                                <td>Lunch & Networking</td>
                                <td>-</td>
                                <td>All</td>
                            </tr>
                             <tr>
                                <td>2:00 PM - 3:00 PM</td>
                                <td>Workshop: UI/UX for Developers</td>
                                <td>Sarah Chen</td>
                                <td>Design</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default Schedule;

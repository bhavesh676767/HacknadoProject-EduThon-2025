import React from 'react';
import { useFadeIn } from '../hooks/useFadeIn';

const Schedule = () => {
    const [ref, isVisible] = useFadeIn();
    return (
        <section id="schedule" className={`section ${isVisible ? 'fade-in visible' : 'fade-in'}`} ref={ref}>
            <div className="container">
                <h2>Schedule</h2>
                <div className="schedule-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Time</th>
                                <th>Session</th>
                                <th>Track</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>9:00 AM</td>
                                <td>Opening Ceremony: The Meme-ing of Life</td>
                                <td>Main</td>
                            </tr>
                            <tr>
                                <td>10:00 AM</td>
                                <td>Brain Melt: JS Edition</td>
                                <td>Web Dev</td>
                            </tr>
                            <tr>
                                <td>11:00 AM</td>
                                <td>CSS Chaos Hour</td>
                                <td>Design</td>
                            </tr>
                            <tr>
                                <td>1:00 PM</td>
                                <td>Lunch & Existential Crisis Break</td>
                                <td>Life</td>
                            </tr>
                            <tr>
                                <td>2:00 PM</td>
                                <td>How to Un-spaghetti Your Code</td>
                                <td>General</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default Schedule;
import React from 'react';
import './About.css';

function About() {
    // show some experiences
    return (
        <div className="about">
            <h1>Experiences</h1>
            <div className="about-child">
                <div className="about-child-1">
                    <h2>Education</h2>
                    <ul>
                        <li>Master of Science in Computer Science, University of California, Riverside</li>
                        <li>Bachelor of Engineering in Computer Engineering, Chulalongkorn University</li>
                    </ul>
                </div>
                <div className="about-child-2">
                    <h2>Work Experiences</h2>
                    <ul>
                        <li>Software Engineer, Amazon Web Services</li>
                        <li>Software Engineer, Amazon Web Services</li>
                        <li>Software Engineer, Amazon Web Services</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About;

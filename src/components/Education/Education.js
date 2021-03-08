import React from 'react';
import './Education.css';

export default class Education extends React.Component {
    render(){
        return(
            <section className="edu_section">
                <h2 className="section_header">EDUCATION</h2>
                <div className="edu_container">
                    <div className="edu">
                        <h4>Drexel University</h4>
                        <p className="edu_major">B.A. Computer Science &amp; Information Systems</p>
                        <p>Minors in Business &amp; Mathematics</p>
                    </div>
                    <div className="edu">
                        <h4>Thinkful</h4>
                        <p className="edu_major">Software Engineering</p>
                        <p>Learned industry best practices and practical software development standards with a focus on full stack mobile-first applications, algorithms and data structures</p>
                    </div>
                </div>
            </section>
        );
    };
};


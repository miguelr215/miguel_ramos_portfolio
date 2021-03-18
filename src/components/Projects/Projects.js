import React from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';
import './Projects.css';

export default class Projects extends React.Component {
    render(){
        const projects = this.props.cases;
        const projectsList = projects.map(project => (
            <div className="project_card">
                <h4>{project.title}</h4>
                <div className="project_container">
                    <div className="project_img">
                        <img src={project.image} alt={project['image-alt']} />
                    </div>
                    <div className="project_brief">
                        <p>
                            <span className="project_brief_label">Who</span> {project.who}
                        </p>
                        <p>
                            <span className="project_brief_label">What</span> {project.what}
                        </p>
                        <p>
                            <span className="project_brief_label">Result</span> {project.result}
                        </p>
                    </div>
                </div>
                <Link
                    className="full_detail_btn"
                    to="/"
                >
                    FULL DETAILS <MdKeyboardArrowRight />
                </Link>
            </div>
        ));

        return(
            <section id="projects" className="projects_section">
                <h2 className="section_header">PROJECTS</h2>
                <div className="projects_container">
                    {projectsList}
                </div>
            </section>
        );
    };
};


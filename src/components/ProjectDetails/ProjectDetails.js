import React from 'react';
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { CgCloseO } from 'react-icons/cg';
import { FiExternalLink } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import { IoIosArrowUp } from 'react-icons/io';
import { IoNewspaperOutline } from 'react-icons/io5';
import { GrTechnology } from 'react-icons/gr';
import { BsPersonCheckFill } from 'react-icons/bs';
import { HiLightBulb } from 'react-icons/hi';
import './ProjectDetails.css';

export default class ProjectDetails extends React.Component {
    render(){
        const projectList = this.props.cases;
        const selectedProject = projectList.find(
            project => project.ProjectID === this.props.selectProjectID
        );
        // need truthy for link & github
        return(
            <section id="projects" className="projects_section">
                <h2 className="section_header">PROJECTS</h2>
                <div className="details_container">
                    <Link
                        to='/'
                        className='close_project_btn'
                        onClick={() => this.props.onCloseProject()}
                    >
                        <CgCloseO />
                    </Link>
                    <div className="details">
                        <h3>{selectedProject.title}</h3>
                        <span className="project_appName">{selectedProject.appName}</span>
                        <a 
                            href={selectedProject.link}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FiExternalLink className="project_detail_linkIcon" />Link to Site
                        </a>
                        <div>
                            {selectedProject.github === "" ? "" : (
                                <a
                                    href={selectedProject.github}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FaGithub className="project_detail_linkIcon" /> View on GitHub
                                </a>)}
                        </div>
                        
                        <h3><IoNewspaperOutline className="project_detail_header_icon"/> Summary</h3>
                        {selectedProject.summary}
                        <div className="done_img_box">
                            <p>{selectedProject["done-img1-alt"]}</p>
                            <img src={selectedProject["done-img1"]} alt={selectedProject["done-img1-alt"]} className="detail_img" />
                            <p>{selectedProject["done-img2-alt"]}</p>
                            <img src={selectedProject["done-img2"]} alt={selectedProject["done-img2-alt"]} className="detail_img" />
                            <p>{selectedProject["done-img3-alt"]}</p>
                            <img src={selectedProject["done-img3"]} alt={selectedProject["done-img3-alt"]} className="detail_img" />
                            <p>{selectedProject["done-img4-alt"]}</p>
                            <img src={selectedProject["done-img4"]} alt={selectedProject["done-img4-alt"]} className="detail_img" />
                        </div>
                        <h3><GrTechnology className="project_detail_header_icon" /> Technology Used</h3>
                        {selectedProject.technology}
                        <h3><BsPersonCheckFill className="project_detail_header_icon" /> Role</h3>
                        {selectedProject.role}
                        <h3><HiLightBulb className="project_detail_header_icon" /> Process</h3>
                        {selectedProject.process}
                        <div className="process_img_box">
                            <p>{selectedProject["process-img1-alt"]}</p>
                            <img src={selectedProject["process-img1"]} alt={selectedProject["process-img1-alt"]} className="detail_img" />
                            <p>{selectedProject["process-img2-alt"]}</p>
                            <img src={selectedProject["process-img2"]} alt={selectedProject["process-img2-alt"]} className="detail_img" />
                            <p>{selectedProject["process-img3-alt"]}</p>
                            <img src={selectedProject["process-img3"]} alt={selectedProject["process-img3-alt"]} className="detail_img" />
                            <p>{selectedProject["process-img4-alt"]}</p>
                            <img src={selectedProject["process-img4"]} alt={selectedProject["process-img4-alt"]} className="detail_img" />
                        </div>
                        <div className="project_detail_bottom_nav">
                            <AnchorLink href="#projects" className="to_top_btn">
                                <IoIosArrowUp className="bottom_nav_icon" />Back to Top</AnchorLink>
                            <span className="project_detail_pipe">|</span>
                            <Link
                                to='/'
                                className='close_project_btn'
                                onClick={() => this.props.onCloseProject()}
                            >
                                <CgCloseO className="bottom_nav_icon" />Close
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        )
    };
};


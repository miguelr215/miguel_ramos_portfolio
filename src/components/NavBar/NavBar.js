import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './NavBar.css';

export default class NavBar extends React.Component {

    render(){
        return(
            <nav>
                <AnchorLink href="#home" className="nav_link" id="nav_MyBox">
                    <span id="nav_MyName">Miguel Ramos</span> 
                    <span id="nav_MyTitle">Full Stack Developer</span>
                </AnchorLink>
                <AnchorLink href="#about" className="nav_link">About</AnchorLink>
                <AnchorLink href="#skills" className="nav_link">Skills</AnchorLink>
                <AnchorLink href="#projects" className="nav_link">Projects</AnchorLink>
                <AnchorLink href="#education" className="nav_link">Education</AnchorLink>
                <a href="./Miguel_Ramos_Resume.pdf" target="_blank" rel="noreferrer" className="nav_link">Resume</a>
                <AnchorLink href="#contact" className="nav_link">Contact</AnchorLink>
            </nav>
        );
    };
};


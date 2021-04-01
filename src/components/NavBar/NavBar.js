import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import './NavBar.css';

export default function NavBar() {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const handleToggle = () => {
        setNavbarOpen(prev => !prev);
    };

    const closeMenu = () => {
        setNavbarOpen(false);
    };

    return(
        <nav className="navbar">
            <AnchorLink href="#home" className="nav_link" id="nav_MyBox">
                <span id="nav_MyName">Miguel Ramos</span> 
                <span id="nav_MyTitle">Full Stack Developer</span>
            </AnchorLink>
            <button onClick={handleToggle}>{navbarOpen ? (
                <MdClose style={{ color: "#fff", width: "40px", height: "40px" }} />
            ) : (
                <FiMenu style={{ color: "#fff", width: "40px", height: "40px" }} />
                )}
            </button>
            <ul className={`menuNav ${navbarOpen ? "showMenu" : ""}`}>
                <li>
                    <AnchorLink 
                        href="#about" 
                        className="nav_link"
                        onClick={() => closeMenu()}
                    >
                        About
                    </AnchorLink>
                </li>
                <li>
                    <AnchorLink 
                        href="#skills" 
                        className="nav_link"
                        onClick={() => closeMenu()}
                    >
                        Skills
                    </AnchorLink></li>
                <li>
                    <AnchorLink 
                        href="#projects" 
                        className="nav_link"
                        onClick={() => closeMenu()}
                    >
                        Projects
                    </AnchorLink>
                </li>
                <li>
                    <AnchorLink 
                        href="#education" 
                        className="nav_link"
                        onClick={() => closeMenu()}
                    >
                        Education
                    </AnchorLink>
                </li>
                <li>
                    <a 
                        href="./Miguel_Ramos_Resume.pdf" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="nav_link"
                        onClick={() => closeMenu()}
                    >
                        Resume
                    </a>
                </li>
                <li>
                    <AnchorLink 
                        href="#contact" 
                        className="nav_link"
                        onClick={() => closeMenu()}
                    >
                        Contact
                    </AnchorLink>
                </li>
            </ul>
        </nav>
    );
};


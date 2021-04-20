import React from 'react';
import htmlLogo from '../../images/htmlLogo.png';
import cssLogo from '../../images/cssLogo.png';
import jsLogo from '../../images/jsLogo.png';
import jQueryLogo from '../../images/jQueryLogo.png';
import reactLogo from '../../images/reactLogo.png';
import bootstrapLogo from '../../images/bootstrapLogo.png';
import materializeLogo from '../../images/materializeLogo.png';
import nodeLogo from '../../images/nodeLogo.png';
import expressLogo from '../../images/expressLogo.png';
import postgresqlLogo from '../../images/postgresqlLogo.png';
import mongoLogo from '../../images/mongoLogo.png';
import gitHubLogo from '../../images/gitHubLogo.png';
import wordpressLogo from '../../images/wordpressLogo.png';
import postmanLogo from '../../images/postmanLogo.png';
import airtableLogo from '../../images/airtableLogo.png';
import sassLogo from '../../images/sass-logo.png';
import npmLogo from '../../images/npm-logo.png';
import './Skills.css';

export default class Skills extends React.Component {
    render(){
        return(
            <section id="skills">
                <h2 className="section_header">SKILLS</h2>
                
                <div className="skills_container">
                    <div className="skills_card">
                        <h3>Front End</h3>
                        <div className="skills_list">
                            <div className="skill">
                                <img src={htmlLogo} alt="HTML5 logo" />
                                <h4>HTML5</h4>
                            </div>
                            <div className="skill">
                                <img src={cssLogo} alt="CSS3 logo" />
                                <h4>CSS3</h4>
                            </div>
                            <div className="skill">
                                <img src={sassLogo} alt="Sass logo" />
                                <h4>Sass</h4>
                            </div>
                            <div className="skill">
                                <img src={jsLogo} alt="JavaScript Logo" />
                                <h4>JavaScript ES6</h4>
                            </div>
                            <div className="skill">
                                <img src={jQueryLogo} alt="jQuery Logo" />
                                <h4>jQuery</h4>
                            </div>
                            <div className="skill">
                                <img src={reactLogo} alt="JSX Logo" />
                                <h4>JSX</h4>
                            </div>
                            <div className="skill">
                                <img src={bootstrapLogo} alt="Bootstrap Logo" />
                                <h4>Bootstrap</h4>
                            </div>
                            <div className="skill">
                                <img src={materializeLogo} alt="Materialize Logo" />
                                <h4>Materialize</h4>
                            </div>
                            <div className="skill">
                                <img src={reactLogo} alt="React Logo" />
                                <h4>React</h4>
                            </div>
                        </div>
                    </div>
                    <div className="skills_card">
                        <h3>Back End</h3>
                        <div className="skills_list">
                            <div className="skill">
                                <img src={nodeLogo} alt="Node Logo" />
                                <h4>Node.js</h4>
                            </div>
                            <div className="skill">
                                <img src={expressLogo} alt="Express Logo" />
                                <h4>Express</h4>
                            </div>
                            <div className="skill">
                                <img src={mongoLogo} alt="MongoDB Logo" />
                                <h4>MongoDB</h4>
                            </div>
                            <div className="skill">
                                <img src={postgresqlLogo} alt="PostgreSQL Logo" />
                                <h4>PostgreSQL</h4>
                            </div>
                        </div>
                    </div>
                    <div className="skills_card">
                        <h3>Other</h3>
                        <div className="skills_list">
                            <div className="skill">
                                <img src={gitHubLogo} alt="GitHub Logo" />
                                <h4>GitHub</h4>
                            </div>
                            <div className="skill">
                                <img src={npmLogo} alt="npm Logo" />
                                <h4>npm</h4>
                            </div>
                            <div className="skill">
                                <img src={wordpressLogo} alt="Wordpress Logo" />
                                <h4>WordPress</h4>
                            </div>
                            <div className="skill">
                                <img src={postmanLogo} alt="Postman Logo" />
                                <h4>Postman</h4>
                            </div>
                            <div className="skill">
                                <img src={airtableLogo} alt="Airtable Logo" />
                                <h4>Airtable</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    };
};


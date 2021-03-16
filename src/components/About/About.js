import React from 'react';
import me from '../../images/me2.png';
import './About.css';

export default class About extends React.Component {
    render(){
        return(
            <section id="about">
                <h2 className="section_header">ABOUT</h2>
                <div className="about_container">
                    <img id="profile_pic" src={me} alt="Full Stack Developer Miguel Ramos" />
                    <div className="profile_description">
                        <h3>I love to dig into people’s problems and solve them with technology</h3>
                        Hi!  My name is Miguel Ramos and I'm a Full Stack Developer located in Vancouver WA... not Canada! <br />
                        <br />
                        My background, while extensive, isn’t traditional… I bring knowledge and experiences from many different avenues – sales, technology, finance, investment, insurance, real estate.  The driving force behind each avenue has always been the same – I want to help people.<br />  
                        The passion I have for constant learning, improving and producing substantial results drives me to grow in my career as a Full Stack Developer. <br />
                        <br />
                        I want to create things that have a meaningful impact and I'm eager to collaborate with and learn from positive and creative people. <br />
                        <br />
                        <span className="cta">Looking for a full-time employment opportunity</span>
                    </div>
                </div>
            </section>
        );
    };
};


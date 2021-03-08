import React from 'react';
import me from '../../images/me2.png';
import './About.css';

export default class About extends React.Component {
    render(){
        return(
            <section>
                <h2 className="section_header">ABOUT</h2>
                <div className="about_container">
                    <img id="profile_pic" src={me} alt="Full Stack Developer Miguel Ramos" />
                    <p className="profile_description">
                    Hi!  My name is Miguel Ramos and I'm a Full Stack Developer located in Vancouver WA... not Canada! <br />
                    <br />
                    My background, while extensive, isn’t traditional… I bring knowledge and experiences from many different avenues – sales, technology, finance, investment, insurance, real estate.  The driving force behind each avenue has always been the same – I want to help people.<br />  
                    <br />
                    I love to dig into people’s problems and solve them with technology.  I designed an ecommerce website for a recreational cannabis company increasing sales 140%.  I also developed a website for a real estate company decreasing days on market by 50%.  The passion I have for constant learning, improving and producing substantial results drives me to grow in my career as a Full Stack Developer. <br />
                    <br />
                    I want to create things that have a meaningful impact and I'm eager to collaborate with and learn from positive and creative people.
                    </p>
                </div>
            </section>
        );
    };
};


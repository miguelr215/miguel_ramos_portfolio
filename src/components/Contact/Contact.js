import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { HiOutlineMailOpen } from 'react-icons/hi';
// import { Mailto } from 'react-mailto';
import './Contact.css';


export default class Contact extends React.Component {
    render(){
        return(
            <section id="contact" className="contact_section">
                <h2 className="section_header">CONTACT</h2>
                    <div className="contact_container">
                        <div className="contact_links">
                            <h4>Connect with me</h4>
                            <p><a href="mailto:drexelramos@gmail.com" className="contact_icon"><HiOutlineMailOpen /></a>
                            <a href="mailto:drexelramos@gmail.com">drexelramos@gmail.com</a></p>
                            <p><a href="https://www.linkedin.com/in/miguel-ramos-developer/" target="_blank" rel="noreferrer"  className="contact_icon"><FaLinkedin /></a>
                            <a href="https://www.linkedin.com/in/miguel-ramos-developer/" target="_blank" rel="noreferrer">LinkedIn</a></p>
                            <p><a href="https://github.com/miguelr215" target="_blank" rel="noreferrer"  className="contact_icon"><FaGithub /></a>
                            <a href="https://github.com/miguelr215" target="_blank" rel="noreferrer">GitHub</a></p>    
                        </div>
                        <form action="#" method="POST" className="contact_form">
                            <h4>Send a message</h4>
                            <p>* required</p>
                            <p>
                                <label for="name">Name*</label>
                                <input type="text" id="name" name="name" placeholder="Enter your name" required />
                            </p>
                            <p>
                                <label for="email">Email*</label>
                                <input type="text" id="email" name="email" placeholder="Enter your email" required />
                            </p>
                            <p>
                                <label for="phone">Phone</label>
                                <input type="text" id="phone" name="phone" placeholder="xxx-xxx-xxxx" pattern="\d{3}[\-]\d{3}[\-]\d{4}" />
                            </p>
                            <p>
                                <label for="message">Message</label>
                                <textarea name="message" id="message" cols="30" rows="4" placeholder="What would you like to discuss?"></textarea>
                            </p>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
            </section>
        );
    };
};


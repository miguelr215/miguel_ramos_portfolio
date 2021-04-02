import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { FiPhoneCall } from 'react-icons/fi';
import { GrDocumentPdf } from 'react-icons/gr';
import ContactForm from '../ContactForm/ContactForm';
// import { useForm, ValidationError } from '@formspree/react';
// import { Mailto } from 'react-mailto';
import './Contact.css';


export default function Contact() {

    return(
        <section id="contact" className="contact_section">
            <h2 className="section_header">CONTACT</h2>
                <div className="contact_container">
                    <div className="contact_links">
                        <h4>Connect with me</h4>
                        <p>
                            <a href="./Miguel_Ramos_Resume.pdf" target="_blank" rel="noreferrer" className="contact_icon"><GrDocumentPdf /></a>
                            <a href="./Miguel_Ramos_Resume.pdf" target="_blank" rel="noreferrer">Resume</a>
                        </p>
                        <p>
                            <a href="mailto:drexelramos@gmail.com" className="contact_icon"><HiOutlineMailOpen /></a>
                            <a href="mailto:drexelramos@gmail.com">drexelramos@gmail.com</a>
                        </p>
                        <p>
                            <a href="tel:360-980-0308" className="contact_icon"><FiPhoneCall /></a>
                            <a href="tel:360-980-0308">360-980-0308</a>
                        </p>
                        <p>
                            <a href="https://www.linkedin.com/in/miguel-ramos-developer/" target="_blank" rel="noreferrer"  className="contact_icon"><FaLinkedin /></a>
                            <a href="https://www.linkedin.com/in/miguel-ramos-developer/" target="_blank" rel="noreferrer">LinkedIn</a>
                        </p>
                        <p>
                            <a href="https://github.com/miguelr215" target="_blank" rel="noreferrer"  className="contact_icon"><FaGithub /></a>
                            <a href="https://github.com/miguelr215" target="_blank" rel="noreferrer">GitHub</a>
                        </p>    
                    </div>
                    
                    <ContactForm />
                </div>
        </section>
    );
};


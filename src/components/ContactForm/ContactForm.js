import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './ContactForm.css';

export default function ContactForm(){
    const [state, handleSubmit] = useForm("xknqvjdb");
    
    if (state.succeeded) {
        return <p className="success_message">Message successfully sent!</p>;
    };

    return(
        <form className="contact_form" onSubmit={handleSubmit}>
            {state.succeeded ? '<p>Message successfully sent!</p>' : ""}
            <h4>Send a message</h4>
            <p className="require_label">* required</p>
            <p>
                <label htmlFor="name">Name*</label>
                <input type="text" id="name" name="name" placeholder="Enter your name" required />
                <ValidationError 
                    prefix="name" 
                    field="name"
                    errors={state.errors}
                />
            </p>
            <p>
                <label htmlFor="email">Email*</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" required />
                <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                />
            </p>
            <p>
                <label htmlFor="phone">Phone</label>
                <input type="text" id="phone" name="phone" placeholder="xxx-xxx-xxxx" />
                <ValidationError 
                    prefix="phone" 
                    field="phone"
                    errors={state.errors}
                />
            </p>
            <p>
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" cols="30" rows="4" placeholder="What would you like to discuss?"></textarea>
                <ValidationError 
                    prefix="message" 
                    field="message"
                    errors={state.errors}
                />
            </p>
            <button type="submit" disabled={state.submitting}>Submit</button>
        </form>
    );
};
import React from 'react';
import ContactFormComponent from '../Shared/ContactForm/contactForm';
import './contact.css';

const ContactPage = () => {
    return (
        <div className='contact-page'>
            <ContactFormComponent subject="I would like to find out more" />
            <div className='filler'></div>
        </div>
    )
}

export default ContactPage
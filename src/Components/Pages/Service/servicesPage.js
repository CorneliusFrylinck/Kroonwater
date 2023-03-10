import React from 'react';
import './services.css';
import ContactFormComponent from '../Shared/ContactForm/contactForm';

const ServicesPage = () => {
    return (
        <div className='services-page'>
            <div className='services-container'>
                <h3>Our services</h3>
                <ul>
                    <li>We focus on supplying and installation of household and industrial water purification</li>
                    <li>Advising clients with the best water solutions for every need </li>
                    <li>Test water quality </li>
                    <li>We specialize in hard water softening</li>
                    <li>Excellent client service and maintenance </li>
                </ul>
                <hr />
                <ContactFormComponent subject={`Enquiry about your services`} />
            </div>
        </div>
    )
}

export default ServicesPage
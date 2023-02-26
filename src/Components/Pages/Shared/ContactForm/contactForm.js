import React from 'react';
import './contactForm.css';

const ContactFormComponent = ({
    subject=""
}) => {

    const emailAddress = "kroonwater@gmail.com";

    return (
        <div className='contact-form-page'>
            <div className='contact-form-container'>
                <h3>Contact us</h3>
                <div>Location: Potchefstroom</div>
                <div>Service area: North-West Province</div>
                <div>Phone numbers: <a href='tel:083 627 5613'>083 627 5613</a> / <a href='tel:082 787 3632'>082 787 3632</a></div>
                <div>E-mail: <a href={`mailto:${emailAddress}?subject=${subject}`}>{emailAddress}</a> </div>
            </div>
        </div>
    )
}

export default ContactFormComponent
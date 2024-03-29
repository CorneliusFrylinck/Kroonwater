import React from 'react';
import './contactForm.css';

const ContactFormComponent = ({
    subject=""
}) => {

    const emailAddress = "info@kroonwater.com";

    return (
        <div className='contact-form-page'>
            <div className='contact-form-container'>
                <h3>Contact us</h3>
                <div>Location: Potchefstroom</div>
                <div>Service area: North-West Province</div>
                <div className='contact-detail'><div>Christo Jordaan:</div> <a href='tel:083 627 5613'>083 627 5613</a></div> 
                <div className='contact-detail'><div>Marilize Jordaan:</div> <a href='tel:082 787 3632'>082 787 3632</a></div>
                <div className='contact-detail'><div>E-mail:</div> <a href={`mailto:${emailAddress}?subject=${subject}`}>{emailAddress}</a> </div>
            </div>
        </div>
    )
}

export default ContactFormComponent
import React from 'react';
import './layout.css';
import logo from '../../Images/footer-logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer-page'>
            <div className='footer-container'>
                <div className='image-container'>
                    <img src={logo} alt="logo" />
                </div>
                <div className='footer-content-container'>
                    <Link className="contact-header" to="/contact">Contact Us</Link>
                    <div>Christo Jordaan:  083 627 5613</div>
                    <div>Marilize Jordaan: 082 787 3632</div>
                    <div>E-mail: info@kroonwater.com </div>
                </div>
            </div>
            <div className='footer-footer'>
                <div>Copyright &copy; 2023 Kroon-water & Cornelius Frylinck</div>
                <div>View our <Link to='/disclaimer'>Disclaimer</Link> </div>
            </div>
        </div>
    )
}

export default Footer
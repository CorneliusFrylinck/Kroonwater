import React from 'react';
import { Link } from 'react-router-dom';
import './landing.css';

const AboutComponent = () => {
    return (
        <div className='about-page'>
            <div className='flex-col'>
                <h3 className='header'>Who are we?</h3>
                <div className='about-component'>
                    <p>Kroon-water is a leading water purification company that is based in Potchefstroom. We provide pure water solutions to clients in the North-West Province.</p>
                    <p>We specialise in household reverse osmosis units, activated carbon solutions and water softening products. We have over 750 satisfied clients that use our services on a regular basis.</p>
                </div>
            </div>
            <div className='why-use-us-container'>
                <h3 className='why-use-us-h3'>Why use Kroon-water?</h3>
                <p>Click <Link to={'/whyUseUs'}>here</Link> to find out!</p>
            </div>
        </div>
    )
}

export default AboutComponent
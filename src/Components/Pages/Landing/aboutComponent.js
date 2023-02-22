import React from 'react';
import { Link } from 'react-router-dom';
import './landing.css';

const AboutComponent = () => {
    return (
        <div className='about-component'>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa </p>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa </p>
            <div className='why-use-us-container'>
                <h3 className='why-use-us-h3'>Why use Kroon-water?</h3>
                <p>Click <Link to={'/whyUseUs'}>here</Link> to find out!</p>
            </div>
        </div>
    )
}

export default AboutComponent
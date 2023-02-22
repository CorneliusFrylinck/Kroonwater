import React from 'react';
import './landing.css';
import headerImage from '../../../Images/Header.png';
import AboutComponent from './aboutComponent';
import CategoryComponent from './categoryComponent';

const LandingPage = () => {
    return (
        <>
            <div>
                <div className='nav-bar-placeholder'></div>
                <div className='header-image-container'>
                    <img className='header-image' src={headerImage} alt='header' />
                </div>
                <AboutComponent />
                <div className='categories'>
                    <CategoryComponent />
                    <CategoryComponent />
                    <CategoryComponent />
                </div>
            </div>
        </>
    )
}

export default LandingPage
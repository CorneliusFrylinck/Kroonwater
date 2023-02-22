import React from 'react';
import './landing.css';
import headerImage from '../../../Images/Header.png';
import AboutComponent from './aboutComponent';
import CategoryComponent from './categoryComponent';
import household from '../../../Images/CBB-1N-S.png';
import industrial from '../../../Images/RO218.png';
import softener from '../../../Images/SOFT50M.png';

const LandingPage = () => {
    return (
        <>
            <div>
                <div className='header-image-container'>
                    <img className='header-image' src={headerImage} alt='header' />
                </div>
                <AboutComponent />
                <div className='shrink'>
                    <h3 className='category-header'>Categories</h3>
                    <p>Click on a category to see our options.</p>
                    <hr />
                </div>
                <div className='categories-container'>
                    <CategoryComponent image={household} text="Household Purifiers" categoryId="1" />
                    <CategoryComponent image={industrial} text="Industrial Purifiers" categoryId="2" />
                    <CategoryComponent image={softener} text="Softeners" categoryId="3" />
                </div>
            </div>
        </>
    )
}

export default LandingPage
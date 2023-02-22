import React from 'react';
import './layout.css';
import logo from '../../Images/logo.png';

const Navbar = () => {
    return (
        <div className='nav-bar'>
            <div className='logo-container'>
                <img className='logo' src={logo} alt='logo' />
            </div>
        </div>
    )
}

export default Navbar
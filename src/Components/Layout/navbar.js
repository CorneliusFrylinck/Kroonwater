import React from 'react';
import './layout.css';
import logo from '../../Images/logo.png';
import searchIcon from '../../Images/search.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='nav-bar'>
            <Link to={'/'} className='logo-container nav-element'>
                <img className='logo' src={logo} alt='logo' />
            </Link>
            <Link to={'/'} className='nav-element'>Home</Link>
            <Link to={'/products/undefined'} className='nav-element'>Products</Link>
            <Link to={'/services'} className='nav-element'>Services</Link>
            <Link to={'/contact'} className='nav-element'>Contact</Link>
            <input className='nav-search' style={{backgroundImage: `url(${searchIcon}) no-repeat right`}} placeholder='Search...'/>
        </div>
    )
}

export default Navbar
import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <div className='head'>
            <nav className='header'>
            <img src={logo} alt="" />
            <div className='headerlink'>
                <a href="">Shop</a>
                <a href="">Order</a>
                <a href="">Inventory</a>
                <a href="">About</a>
            </div>
        </nav>
        </div>
    );
};

export default Header;
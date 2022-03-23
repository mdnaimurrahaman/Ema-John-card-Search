import React from 'react';
import logo from '../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className='header'>
                <img src={logo} alt="" srcset="" />
                <div>
                    <a href="/shop">Shop</a>
                    <a href="/Orders">Orders</a>
                    <a href="/Inventory">Inventory</a>
                    <a href="/About">About</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;
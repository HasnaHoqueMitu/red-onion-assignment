import React from 'react';
import './Header.css';
import logo from '../../images/logo2.png';

const Header = () => {
    return (
        <div class="d-flex spacing">
            <div class="p-2 flex-grow-1">
                <img src={logo} alt=""/>
            </div>
            <div class="p-2">
                <button>Log in</button>
            </div>
            <div class="p-2">    
                <button>Sign Up</button>
            </div>
        </div>
    );
};

export default Header;
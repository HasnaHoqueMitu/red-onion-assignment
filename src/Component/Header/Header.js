import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo2.png';
import Auth from '../Login/useAuth';

const Header = () => {
    const auth = Auth();
    return (
        <div class="d-flex spacing">
            <div class="p-2 flex-grow-1">
                <img src={logo} alt=""/>
            </div>
            {/* <div class="p-2">
                <button>Log in</button>
            </div> */}
            <div class="p-2">    
                {
                    auth.user ? 
                    <Link to="/">
                        <button onClick={() => {auth.signOut()}} className="btn btn-danger">Sign Out</button>
                    </Link>
                    :
                    <Link to="/login">
                        <button className="btn btn-danger">Sign In</button>
                    </Link>
                }
            </div>
        </div>
    );
};

export default Header;
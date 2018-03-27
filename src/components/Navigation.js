import React  from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';

const Navigation = props => (
    <nav className='navbar'>
        <ul className='nav'>
            <li className='nav-item'>
                <Link to="/home">home</Link>
            </li>
            <li className='nav-item'>
                <Link to="/signup">Sign Up</Link>
            </li>
             <li className='nav-item'>
                <Link to="/login">Login</Link>
            </li>
        </ul>
    </nav>
);

export default Navigation;
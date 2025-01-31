import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/DishaAI_Logo.png';
import '../components/Header.css';

const Header = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt="DISHA Logo" />
            </div>
            <button 
                className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
                onClick={toggleMenu}
            >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>

            <nav className={isMenuOpen ? "open" : ""}>
                <ul>
                    <li> <Link to="/" onClick= {toggleMenu} className={location.pathname === '/' ? 'active' : ''}>Home</Link> </li>
                    <li> <Link to="/genviq" onClick= {toggleMenu} className={location.pathname === '/genviq' ? 'active' : ''}> Genviq </Link> </li>
                    <li> <Link to="/Resources" onClick= {toggleMenu}className={location.pathname === '/Resources' ? 'active' : ''}> Resources </Link> </li>
                    <li> <Link to="/Events" onClick= {toggleMenu} className={location.pathname === '/Events' ? 'active' : ''}> Events </Link> </li>
                    <li> <Link to="/Contactus" onClick= {toggleMenu} className={location.pathname === '/Contactus' ? 'active' : ''}> Reach Us </Link> </li>
                    <li> <Link to="https://dishaai.com/SEP/login.php" target="_blank" rel="noopener noreferrer"> SEP </Link> </li>
                    <li> <Link to="https://dishaaa.netlify.app/login" target="_blank" className={location.pathname === '/login' ? 'active' : 'login-btn'}> Log In </Link> </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;

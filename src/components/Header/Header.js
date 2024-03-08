import React, { useState } from 'react';
import { animateScroll as scroll, Link } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import './Header.scss';
import Logo from '../../assets/icons/Portfolio_Logo.svg';

function Header() {
    const [showMobileHeader, setShowMobileHeader] = useState(false);
    const location = useLocation();

    const scrollToTop = () => {
        if (location.pathname === '/') {
            // If on the home page, scroll to the top
            scroll.scrollToTop({ smooth: true, });
        } else {
            // If on another page, navigate to the home page
            window.location.href = '/';
        }
    };

    const scrollToAbout = () => {
        if (location.pathname === '/') {
            // If on the home page, scroll to the top
            scroll.scrollTo(700, { smooth: true, });
        } else {
            // If on another page, navigate to the home page
            window.location.href = '/';
        }
    };

    const scrollToProjects = () => {
        if (location.pathname === '/') {
            // If on the home page, scroll to the top
            scroll.scrollTo(2000, { smooth: true, });
        } else {
            // If on another page, navigate to the home page
            window.location.href = '/';
        }
    };

    const scrollToContact = () => {
        if (location.pathname === '/') {
            // If on the home page, scroll to the top
            scroll.scrollTo(2700, { smooth: true, });
        } else {
            // If on another page, navigate to the home page
            window.location.href = '/';
        }
    };

    return (
        <>
            <header className={`navbar ${showMobileHeader ? 'show-mobile-header' : ''}`}>
                <nav className='navbar__cont'>
                    <div className='navbar__sec'>
                        <div className='navbar__links--mobile' onClick={scrollToTop}>Home</div>
                        <div className='navbar__logo' onClick={scrollToTop}>
                            <img src={Logo} alt="Bren.Dev Logo" className='navbar__logo--desktop' />
                        </div>
                        <div onClick={scrollToContact} className='navbar__links--mobile'>Contact</div>
                    </div>
                    <div className='navbar__sec'>
                        <ul className='navbar__opts'>
                            <li>
                                <div onClick={scrollToAbout} className='navbar__links'>Who</div>
                            </li>
                            <li>
                                <div onClick={scrollToProjects} className='navbar__links' >What</div>
                            </li>
                            <li>
                                <div onClick={scrollToContact} className='navbar__links'>Where</div>
                            </li>
                        </ul>
                        <div className='navbar__opts'>
                            <input id='theme-switch' className='navbar--theme' type="checkbox" />
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Header;
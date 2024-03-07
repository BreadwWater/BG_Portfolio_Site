import React, { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import './Header.scss';
import Logo from '../../assets/icons/Portfolio_Logo.svg';

function Header() {
    const [showMobileHeader, setShowMobileHeader] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const heroSection = document.getElementById('hero');
            const header = document.querySelector('.navbar');

            if (heroSection && header) {
                const heroSectionBottom = heroSection.offsetTop + heroSection.offsetHeight;
                const scrollPosition = window.scrollY + header.offsetHeight;

                setShowMobileHeader(scrollPosition > heroSectionBottom);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        if (location.pathname === '/') {
            // If on the home page, scroll to the top
            window.scrollTo(0, 0);
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
                        <ScrollLink
                            to="hero"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className='navbar__links--mobile'
                        >
                            Home
                        </ScrollLink>
                        <div className='navbar__logo' onClick={scrollToTop}>
                            <img src={Logo} alt="Bren.Dev Logo" className='navbar__logo--desktop' />
                        </div>
                        <ScrollLink
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className='navbar__links--mobile'
                        >
                            Contact
                        </ScrollLink>
                    </div>
                    <div className='navbar__sec'>
                        <ul className='navbar__opts'>
                            <li>
                                <ScrollLink
                                    to="aboutme"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    className='navbar__links'
                                >
                                    Who
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink
                                    to="projects"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    className='navbar__links'
                                >
                                    What
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    className='navbar__links'
                                >
                                    Where
                                </ScrollLink>
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
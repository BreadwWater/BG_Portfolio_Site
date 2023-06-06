import React, { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';
import './Header.scss';

import LogoLight from '../../assets/icons/Bread-logo-icon-light.svg';

function Header() {
    const [showMobileHeader, setShowMobileHeader] = useState(false);

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

    return (
        <>
            <header className={`navbar ${showMobileHeader ? 'show-mobile-header' : ''}`}>
                <nav className='navbar__cont'>
                    <div className='navbar__sec'>
                        <ScrollLink
                            to="hero"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={500}
                            className='navbar__logo'>
                            <h2 className='navbar__logo--text'>
                                BG.
                            </h2>
                            <img src={LogoLight} alt="Bren.Dev Logo" className='navbar__logo--img' />
                        </ScrollLink>
                    </div>
                    <div className='navbar__sec'>
                        <ul className='navbar__opts'>
                            <li>
                                <ScrollLink
                                    to="aboutme"
                                    spy={true}
                                    smooth={true}
                                    offset={-80}
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
                                    offset={-80}
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
                                    offset={-80}
                                    duration={500}
                                    className='navbar__links'
                                >
                                    Where
                                </ScrollLink>
                            </li>
                        </ul>
                        <div className='navbar__opts'>
                            <input className='navbar--theme' type="checkbox" />
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Header;

import { animateScroll as scroll, Link } from 'react-scroll'
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './Footer.scss';

import GitHubIconAnim from '../../assets/animated icons/github-animated-icon.gif';
import GitHubIconStatic from '../../assets/animated icons/github-icon.svg';
import LinkedInIconAnim from '../../assets/animated icons/linkedin-animated-icon.gif';
import LinkedInIconStatic from '../../assets/animated icons/linkedin-icon.svg';

function Footer() {
    const location = useLocation();

    const handleReplaceSrc = () => {
        if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            const iconElement1 = document.querySelector('.icon-linkedin');
            iconElement1.setAttribute('src', LinkedInIconStatic);

            const iconElement2 = document.querySelector('.icon-github');
            iconElement2.setAttribute('src', GitHubIconStatic);
        }
    };

    useEffect(() => {
        handleReplaceSrc();
    }, []);

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
            <footer className='footer'>
                <div className='footer__cont'>
                    <div className='footer__sec'>
                        <div className='footer__sec--socials'>
                            <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/bren-gonzalez/'>
                                <img className='footer__sec--icon icon-linkedin' src={LinkedInIconAnim} alt="LinkedIn Profile Link" />
                            </a>
                            <a target='_blank' rel="noreferrer" href='https://github.com/BreadwWater'>
                                <img className='footer__sec--icon icon-github' src={GitHubIconAnim} alt="GitHub Profile Link" />
                            </a>
                        </div>

                        <div className='footer__sec--group'>
                            <h3 className='footer__sec--name'>Brenda Gonzalez</h3>
                            <p className='footer__sec--text'>Software Engineer • Graphic Designer • 3D Modeler</p>
                            <div className='footer__sec--socials'>
                                <a target='_blank' rel="noreferrer" href='https://github.com/BreadwWater'>
                                    <img className='footer__sec--icon-desktop icon-linkedin' src={LinkedInIconAnim} alt="LinkedIn Profile Link" />
                                </a>
                                <a target='_blank' rel="noreferrer" href='https://github.com/BreadwWater'>
                                    <img className='footer__sec--icon-desktop icon-github' src={GitHubIconAnim} alt="GitHub Profile Link" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='footer__sec'>
                        <ul className='footer__sec--sitenav'>
                            <li><div onClick={scrollToTop} className='footer__sec--link'>Home</div></li>
                            <li><div onClick={scrollToAbout} className='footer__sec--link'>Who</div></li>
                            <li><div onClick={scrollToProjects} className='footer__sec--link'>What</div></li>
                            <li><div onClick={scrollToContact} className='footer__sec--link'>Where</div></li>
                        </ul>
                        <p className='footer__text'>
                            © 2024 BrendaG.Dev | All rights reserved.
                        </p>
                        <p className='footer__text'>
                            Credit to <a className='footer__text--highlight' rel="noreferrer" target='_blank' href="https://unsplash.com/">Unsplash</a> for all project hero images!
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
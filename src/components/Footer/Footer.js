import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import './Footer.scss';

import GitHubIconAnim from '../../assets/animated icons/github-animated-icon.gif';
import GitHubIconStatic from '../../assets/animated icons/github-icon.svg';
import LinkedInIconAnim from '../../assets/animated icons/linkedin-animated-icon.gif';
import LinkedInIconStatic from '../../assets/animated icons/linkedin-icon.svg';

function Footer() {
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

    return (
        <>
            <footer className='footer'>
                <div className='footer__sec'>
                    <Link target='_blank' to='https://www.linkedin.com/in/bren-gonzalez/' className='footer__link'>
                        <img className='footer--icon icon-linkedin' src={LinkedInIconAnim} alt="LinkedIn Profile Link" />
                    </Link>
                    <Link target='_blank' to='https://github.com/BreadwWater' className='footer__link'>
                        <img className='footer--icon icon-github' src={GitHubIconAnim} alt="GitHub Profile Link" />
                    </Link>
                </div>

                <div className='footer__sec'>
                    <p className='footer__text'>
                        CopyRight © 2021 BrenDev | All Rights Reserved
                    </p>
                </div>
            </footer>
        </>
    );
}

export default Footer;
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
                <div className='footer__cont'>
                    <div className='footer__sec'>
                        <Link target='_blank' to='https://www.linkedin.com/in/bren-gonzalez/' className='footer__sec--socials'>
                            <img className='footer--icon icon-linkedin' src={LinkedInIconAnim} alt="LinkedIn Profile Link" />
                        </Link>
                        <Link target='_blank' to='https://github.com/BreadwWater' className='footer__sec--socials'>
                            <img className='footer--icon icon-github' src={GitHubIconAnim} alt="GitHub Profile Link" />
                        </Link>

                        <div className='footer__sec--group'>
                            <h3 className='footer__sec--name'>Brenda Gonzalez</h3>
                            <p className='footer__sec--text'>Software Engineer • Graphic Designer • 3D Modeler</p>
                            <div className='footer__sec--socials'>
                                Put Social Links Here
                            </div>
                        </div>
                    </div>

                    <div className='footer__sec'>
                        <ul className='footer__sec--sitenav'>
                            <li className='footer__sec--link'>Home</li>
                            <li className='footer__sec--link'>Who</li>
                            <li className='footer__sec--link'>What</li>
                            <li className='footer__sec--link'>Where</li>
                        </ul>
                        <p className='footer__text'>
                            CopyRight © 2021 BrenDev | All Rights Reserved
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
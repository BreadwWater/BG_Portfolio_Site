import { Link } from 'react-router-dom';
import './Footer.scss';

import GitHubIcon from '../../assets/animated icons/github-animated-icon.gif';
import LinkedInIcon from '../../assets/animated icons/linkedin-animated-icon.gif';

function Footer() {
    return (
        <>
            <footer className='footer'>
                <div className='footer__sec'>
                    <Link target='_blank' to='https://www.linkedin.com/in/bren-gonzalez/' className='footer__link'>
                        <img className='footer--icon' src={LinkedInIcon} alt="LinkedIn Profile Link" />
                    </Link>
                    <Link target='_blank' to='https://github.com/BreadwWater' className='footer__link'>
                        <img className='footer--icon' src={GitHubIcon} alt="GitHub Profile Link" />
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
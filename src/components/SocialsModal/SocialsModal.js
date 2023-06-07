import { Link } from 'react-router-dom';
import './SocialsModal.scss';

import GitHubIcon from '../../assets/animated icons/github-animated-icon.gif';
import LinkedInIcon from '../../assets/animated icons/linkedin-animated-icon.gif';

function SocialsModal() {
    return (
        <>
            <article className='socials-modal fade-in'>
                <div className='socials-modal__cont'>

                    <div className='socials-modal__title'>Socials</div>

                    <Link target='_blank' to='https://www.linkedin.com/in/bren-gonzalez/' className='socials-modal__link'>
                        <img className='socials-modal--icon' src={LinkedInIcon} alt="LinkedIn Profile Link" />
                    </Link>
                    <Link target='_blank' to='https://github.com/BreadwWater' className='socials-modal__link'>
                        <img className='socials-modal--icon' src={GitHubIcon} alt="GitHub Profile Link" />
                    </Link>
                </div>
            </article>
        </>
    );
}

export default SocialsModal;
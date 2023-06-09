import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import './SocialsModal.scss';

import GitHubIconAnim from '../../assets/animated icons/github-animated-icon.gif';
import GitHubIconStatic from '../../assets/animated icons/github-icon.svg';
import LinkedInIconAnim from '../../assets/animated icons/linkedin-animated-icon.gif';
import LinkedInIconStatic from '../../assets/animated icons/linkedin-icon.svg';

function SocialsModal() {
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
            <article className='socials-modal fade-in'>
                <div className='socials-modal__cont'>

                    <div className='socials-modal__title'>Socials</div>

                    <Link target='_blank' to='https://www.linkedin.com/in/bren-gonzalez/' className='socials-modal__link'>
                        <img className='socials-modal--icon icon-linkedin' src={LinkedInIconAnim} alt="LinkedIn Profile Link" />
                    </Link>
                    <Link target='_blank' to='https://github.com/BreadwWater' className='socials-modal__link'>
                        <img className='socials-modal--icon icon-github' src={GitHubIconAnim} alt="GitHub Profile Link" />
                    </Link>
                </div>
            </article>
        </>
    );
}

export default SocialsModal;
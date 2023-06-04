import React, { useEffect, useRef } from 'react';

import './AboutMe.scss';

import breadIcon from '../../assets/icons/Bread--icon.svg';
import profilePicMobile from '../../assets/images/Headshot_casual--mobile.png';
import profilePicDesktop from '../../assets/images//Headshot_casual--desktop.png';
import aboutMeIcon from '../../assets/animated icons/aboutme-animated-icon.gif';


function AboutMe() {

    const animatedTextRef = useRef(null);

    useEffect(() => {
        const animatedText = animatedTextRef.current;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    animatedText.classList.add('animation--underline');
                } else {
                    animatedText.classList.remove('animation--underline');
                }
            });
        });

        observer.observe(animatedText);

        return () => {
            observer.unobserve(animatedText);
        };
    }, []);

    return (
        <>
            <section id='aboutme' className='aboutme'>
                <articale id='aboutme' className='aboutme__cont'>

                    <div className='aboutme__body'>
                        <div className='aboutme__header'>
                            <div className='aboutme__header--title'>Who</div>
                            <div className='aboutme__header--info'>
                                <img className='aboutme__header--icon' src={aboutMeIcon} alt="about me icon" />
                                <h3 ref={animatedTextRef} className='aboutme__header--text'>Brenda Gonzalez</h3>
                            </div>
                        </div>
                        <div className='aboutme__mobile--body'>
                            <img className='aboutme__mobile--img' src={breadIcon} alt="Bread Icon" />
                            <img className='aboutme__mobile--profile' src={profilePicMobile} alt="selfie mobile" />
                            <img className='aboutme__mobile--img' src={breadIcon} alt="Bread Icon" />
                        </div>

                        <div className='aboutme__text'>
                            <p className='aboutme__desc'>I’m a Front End Software Engineer with a background in 3D art and animation, as well as game design and Commercial Art. Aside from my blatant love for art and tech (and bread), I have a passion for all thing’s related to video games, pet care, philosophy as well as related fields. I don’t know what to put here yet so this will be a place holder until I figure it out.</p>
                            <ul className='aboutme__list'>
                                <li className='aboutme__list--item'>* Things About Me</li>
                                <li className='aboutme__list--item'>* Things About Me</li>
                                <li className='aboutme__list--item'>* Things About Me</li>
                            </ul>
                        </div>
                    </div>


                    <div className='aboutme__desktop'>
                        <img className='aboutme__desktop--profile' src={profilePicDesktop} alt="my selfie dekstop" />
                    </div>
                </articale>
            </section>
        </>
    );
}

export default AboutMe;
export default AboutMe;
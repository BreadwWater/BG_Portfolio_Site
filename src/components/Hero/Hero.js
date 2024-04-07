import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeroButton from '../HeroButton/HeroButton';
import Button from '../Button/Button';

import HeroIcon from '../../assets/icons/3-Sparkle--icon.svg';
import HeroIcon2 from '../../assets/icons/2-Sparkle--icon.svg';

import '../Hero/Hero.scss';

function Hero() {
    return (
        <>
            <section id='hero' className='hero'>
                <article className='hero__cont'>
                    <div className='hero__sec'>

                        <div className='hero__info'>
                            <div className='hero__text'>
                                <h1 className='hero__title'>Brenda Gonzalez</h1>
                                <h2 className='hero__subtitle'>3D Modeler | Front-End Dev | Designer</h2>
                            </div>
                            <div className='hero__mobile--btn'>
                                <Button location={'#projects'} text='Projects' />
                            </div>
                            <div className='hero__desktop--btn'>
                                <HeroButton></HeroButton>
                            </div>
                        </div>

                        <div className='hero__info'>
                            <div className='hero__mobile--bg'>
                                <img className='hero__mobile--img' src={HeroIcon} alt="Sparkle Icon" />
                                <img className='hero__mobile--img' src={HeroIcon2} alt="Sparkle Icon" />
                            </div>
                        </div>
                    </div>
                </article>
            </section>
        </>
    );
}

export default Hero;
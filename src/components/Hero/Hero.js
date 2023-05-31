import React from 'react';
import HeroButton from '../HeroButton/HeroButton';
import Button from '../Button/Button';
import BreadModel from '../BreadModel/BreadModel';

import BreadIcon from '../../assets/icons/Bread--icon.svg';

import '../Hero/Hero.scss';

function Hero() {
    return (
        <>
            <section className='hero'>
                <div className='hero__sec'>

                    <div className='hero__info'>
                        <div className='hero__text'>
                            <h1 className='hero__title'>Brenda Gonzalez</h1>
                            <h2 className='hero__subtitle'>3D Modeler | Front-End Dev | Bread Lover</h2>
                        </div>
                        <div className='hero__mobile--btn'>
                            <Button text={'Contact'}></Button>
                            <Button text={'Projects'}></Button>
                        </div>
                        <div className='hero__btn--desktop'>
                            <HeroButton></HeroButton>
                        </div>
                    </div>

                    <div className='hero__info'>
                        <div className='hero__mobile--bg'>
                            <img className='hero__mobile--img' src={BreadIcon} alt="Bread Icon" />
                            <img className='hero__mobile--img' src={BreadIcon} alt="Bread Icon" />
                        </div>
                    </div>

                </div>
                <div className='hero__sec'>
                    <div className="hero__model">
                        <BreadModel />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;
import './Skills.scss';

import SectionHeader from '../SectionHeader/SectionHeader';

import ProgressCircle from '../../components/ProgressCircle/ProgressCircle';

import SkillsIconAnim from '../../assets/animated icons/stack-animated-icon.gif';
import SkillsIconStatic from '../../assets/animated icons/stack-icon.svg';

import HTMLIcon from '../../assets/icons/html--icon.svg';
import JsIcon from '../../assets/icons/js--icon.svg';
import SassIcon from '../../assets/icons/Sass--icon.svg';
import ReactIcon from '../../assets/icons/React--icon.svg';
import TypeScriptIcon from '../../assets/icons/TypeScript--icon.svg';
import SQLIcon from '../../assets/icons/mySQL--icon.svg';
import ThreeIcon from '../../assets/icons/Threejs--icon.svg';
import NextIcon from '../../assets/icons/Nextjs--icon.svg';


import FigmaIcon from '../../assets/icons/Figma--icon.svg';
import PhotoshopIcon from '../../assets/icons/Photoshop--icon.svg';
import AeIcon from '../../assets/icons/AfterEffect--icon.svg';
import AnimateIcon from '../../assets/icons/Animate--icon.svg';
import AiIcon from '../../assets/icons/Illustrator--icon.svg';
import IdIcon from '../../assets/icons/InDesign--icon.svg';
import MayaIcon from '../../assets/icons/Maya--icon.svg';
import { useEffect } from 'react';


function Skills() {
    const handleReplaceSrc = () => {
        if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            const iconElement = document.querySelector('.skills__header--icon');
            iconElement.setAttribute('src', SkillsIconStatic);
        }
    };

    useEffect(() => {
        handleReplaceSrc();
    }, []);


    return (
        <>
            <section id='skills' className='skills'>
                <article className='skills__body'>

                    <div className='skills__header'>
                        <img className='skills__header--icon' src={SkillsIconAnim} alt="Skills icon" />
                        <h3 className='skills__header--text'>Skills</h3>
                        <SectionHeader title={'What'} text={'Skills'} />
                    </div>

                    <div className='skills__main'>

                        <article className='skills__sec'>
                            <p className='skills__subheader'>Tech-Stack</p>
                            <div className='skills__cont'>
                                <div className='skills__group'>
                                    <ProgressCircle value={90} name={'HTML/CSS'} img={HTMLIcon}></ProgressCircle>
                                    <ProgressCircle value={70} name={'JavaScript'} img={JsIcon}></ProgressCircle>
                                    <ProgressCircle value={80} name={'Sass'} img={SassIcon}></ProgressCircle>
                                    <ProgressCircle value={80} name={'React'} img={ReactIcon}></ProgressCircle>
                                    <ProgressCircle value={55} name={'TypeScript'} img={TypeScriptIcon}></ProgressCircle>
                                    <ProgressCircle value={40} name={'mySQL'} img={SQLIcon}></ProgressCircle>
                                    <ProgressCircle value={50} name={'Three.js'} img={ThreeIcon}></ProgressCircle>
                                    <ProgressCircle value={40} name={'Next.js'} img={NextIcon}></ProgressCircle>
                                </div>
                            </div>
                        </article>

                        <article className='skills__sec'>
                            <p className='skills__subheader'>Design-Stack</p>
                            <div className='skills__cont'>
                                <div className='skills__group'>
                                    <ProgressCircle value={85} name={'Figma'} img={FigmaIcon}></ProgressCircle>
                                    <ProgressCircle value={90} name={'Photoshop'} img={PhotoshopIcon}></ProgressCircle>
                                    <ProgressCircle value={65} name={'Animate'} img={AnimateIcon}></ProgressCircle>
                                    <ProgressCircle value={40} name={'After Effects'} img={AeIcon}></ProgressCircle>
                                    <ProgressCircle value={85} name={'Illustrator'} img={AiIcon}></ProgressCircle>
                                    <ProgressCircle value={70} name={'InDesign'} img={IdIcon}></ProgressCircle>
                                    <ProgressCircle value={75} name={'Maya'} img={MayaIcon}></ProgressCircle>
                                </div>
                            </div>
                        </article>
                    </div>

                </article>
            </section>
        </>
    );
}

export default Skills;
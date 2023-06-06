import React, { useState } from 'react';
import './Projects.scss';

import ProjIcon from '../../assets/animated icons/projects-animated-icon.gif';
import SectionHeader from '../SectionHeader/SectionHeader';
import Button from '../Button/Button';
import IndivProject from '../IndivProject/IndivProject';

import ProjThumb1 from '../../assets/images/fetchfind-thumb.png';
import ProjThumb2 from '../../assets/images/2Ye-thumb.png';
import ProjThumb3 from '../../assets/images//UKG-thumb.png.png';

function Projects() {
    const [activeBtn, setActiveBtn] = useState('btn1'); // Set 'btn1' as the initial active button

    const handleBtnClick = (id) => {
        setActiveBtn(id);
    };
    return (
        <>
            <section id="projects" className="projects">

                <div className="projects__header">
                    <img className="projects__header--icon" src={ProjIcon} alt="Projects icon" />
                    <h3 className="projects__header--text">Projects</h3>
                    <SectionHeader title={'What'} text={'Projects'} />
                </div>

                <div className="projects__body">

                    <div className='projects__sec'>
                        <p className='projects__text'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, deserunt saepe ut numquam porro odit illum
                            iusto magni expedita inventore aut reprehenderit dicta officia sequi repellendus cum corrupti itaque dolorem?
                        </p>
                        <div className="projects__opts">
                            <Button
                                newId={activeBtn === 'btn1' ? 'btn--active' : 'btn--inactive'}
                                text="Code"
                                onClick={() => handleBtnClick('btn1')}
                            />
                            <Button
                                newId={activeBtn === 'btn2' ? 'btn--active' : 'btn--inactive'}
                                text="Design"
                                onClick={() => handleBtnClick('btn2')}
                            />
                        </div>
                    </div>

                    <div className='projects__sec'>
                        <div className='projects__group'>
                            <IndivProject
                                Title={'Fetchfind'}
                                Img={ProjThumb1}
                                DescShort={`Using the fetchfinder API, I've created a dog adoption platform, and created every asset on the site.`}
                                DescLarge={`Using the fetchfinder API, I've created a dog adoption platform, and created every asset on the site. I used this lorem to the ipsum ultimate`}
                            />
                            <IndivProject
                                Title={'2Ye | Clothing Brand'}
                                Img={ProjThumb2}
                                DescShort={''}
                                DescLarge={''}
                            />
                            <IndivProject
                                Title={'UKG | Industry Project'}
                                Img={ProjThumb3}
                                DescShort={''}
                                DescLarge={''}
                            />
                            <IndivProject
                                Title={''}
                                Img={ProjThumb1}
                                DescShort={''}
                                DescLarge={''}
                            />
                            <IndivProject
                                Title={''}
                                Img={ProjThumb1}
                                DescShort={''}
                                DescLarge={''}
                            />
                            <IndivProject
                                Title={''}
                                Img={ProjThumb1}
                                DescShort={''}
                                DescLarge={''}
                            />

                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}

export default Projects;

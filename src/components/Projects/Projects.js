import React, { useState } from 'react';
import './Projects.scss';
import ProjIcon from '../../assets/animated icons/projects-animated-icon.gif';
import SectionHeader from '../SectionHeader/SectionHeader';
import Button from '../Button/Button';
import IndivProject from '../IndivProject/IndivProject';

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
                                location="#projects"
                                text="Code"
                                onClick={() => handleBtnClick('btn1')}
                            />
                            <Button
                                newId={activeBtn === 'btn2' ? 'btn--active' : 'btn--inactive'}
                                location="#projects"
                                text="Design"
                                onClick={() => handleBtnClick('btn2')}
                            />
                        </div>
                    </div>

                    <div className='projects__sec'>
                        <div className='projects__group'>
                            <IndivProject
                                Title={'Fetchfind'}
                                Img={''}
                                DescShort={''}
                                DescLarge={''} />

                            <IndivProject
                                Title={''}
                                Img={''}
                                DescShort={''}
                                DescLarge={''} />

                            <IndivProject
                                Title={''}
                                Img={''}
                                DescShort={''}
                                DescLarge={''} />

                            <IndivProject
                                Title={''}
                                Img={''}
                                DescShort={''}
                                DescLarge={''} />

                            <IndivProject
                                Title={''}
                                Img={''}
                                DescShort={''}
                                DescLarge={''} />

                            <IndivProject
                                Title={''}
                                Img={''}
                                DescShort={''}
                                DescLarge={''} />

                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}

export default Projects;

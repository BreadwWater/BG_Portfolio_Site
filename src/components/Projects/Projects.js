import React, { useEffect, useState } from 'react';
import './Projects.scss';

import ProjIconAnim from '../../assets/animated icons/projects-animated-icon.gif';
import ProjIconStatic from '../../assets/animated icons/projects-icon.svg';

import SectionHeader from '../SectionHeader/SectionHeader';
import Button from '../Button/Button';

import ProjCard from '../ProjCard/ProjCard';

function Projects() {
    const [activeBtn, setActiveBtn] = useState('btn1'); // Set 'btn1' as the initial active button
    const [showDesignProjects, setShowDesignProjects] = useState(false);

    const handleBtnClick = (id) => {
        if (id === 'btn2') {
            setShowDesignProjects(true);
        } else {
            setShowDesignProjects(false);
        }
        setActiveBtn(id);
    };

    const handleReplaceSrc = () => {
        if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            const iconElement = document.querySelector('.contact__header--icon');
            iconElement.setAttribute('src', ProjIconStatic);
        }
    };

    useEffect(() => {
        handleReplaceSrc();
    }, []);
    return (
        <>
            <section id="projects" className="projects">
                <div className="projects__header">
                    <img className="projects__header--icon" src={ProjIconAnim} alt="Projects icon" />
                    <h3 className="projects__header--text">Projects</h3>
                    <SectionHeader title={'What'} text={'Projects'} />
                </div>

                <div className="projects__body">
                    <div className='projects__sec'>
                        <p className='projects__text'>
                            Explore my latest projects which are a testament to my growth in the field. Some are still in progress, reflecting my journey; I'll periodically update my showcase, sharing my favorite or most remarkable creations.                        </p>
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

                    {showDesignProjects ? (
                        <div className='projects__sec'>
                            <div className='projects__group'>
                                {/* Design Projects */}
                                <ProjCard
                                    projLink={`stairbox`}
                                    Title={`Stair Box`}
                                    Desc={`The UK's number one staircase manufacturer.`}
                                    Thumb={require('../../assets/images/projects/design/project-1/image-1.jpg')}
                                />

                                <ProjCard
                                    projLink={`letschill`}
                                    Title={`Let's Chill`}
                                    Desc={`Homemade and veteran owned ice cream parlor in south florida.`}
                                    Thumb={require('../../assets/images/projects/design/project-2/image-1.jpg')}
                                />

                                <ProjCard
                                    projLink={`eternalframes`}
                                    Title={`Eternal Frames`}
                                    Desc={`A small framing studio in the country side of England.`}
                                    Thumb={require('../../assets/images/projects/design/project-3/image-1.jpg')}
                                />

                                <ProjCard
                                    projLink={`myportfolio`}
                                    Title={`My Portfolio Site`}
                                    Desc={`The most recent version of my personal portfolio website.`}
                                    Thumb={require('../../assets/images/projects/design/project-4/image-1.jpg')}
                                />

                                <ProjCard
                                    projLink={`odysseycruisline`}
                                    Title={`Odyssey Cruiseline`}
                                    Desc={`Website design for an ancient Greek themed Cruiseline as part of a 2 day design sprint challenge.`}
                                    Thumb={require('../../assets/images/projects/design/project-5/image-1.jpg')}
                                />

                                <ProjCard
                                    projLink={`raccoon3d`}
                                    Title={`Raccoon 3D Model`}
                                    Desc={`A 3d model of a raccoon with a basket of bread; originally inteded to be personal mascot.`}
                                    Thumb={require('../../assets/images/projects/design/project-6/image-5.jpg')}
                                />
                            </div>
                        </div>
                    ) : (
                        <div className='projects__sec'>
                            <div className='projects__group'>
                                {/* Code Projects */}
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}

export default Projects;

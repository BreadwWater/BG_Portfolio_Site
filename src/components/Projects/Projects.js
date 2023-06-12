import React, { useEffect, useState } from 'react';
import './Projects.scss';

import ProjIconAnim from '../../assets/animated icons/projects-animated-icon.gif';
import ProjIconStatic from '../../assets/animated icons/projects-icon.svg';

import SectionHeader from '../SectionHeader/SectionHeader';
import Button from '../Button/Button';
import IndivProject from '../IndivProject/IndivProject';

import ProjThumb1 from '../../assets/images/fetchfind-thumb.png';
import ProjThumb2 from '../../assets/images/2Ye-thumb.png';
import ProjThumb3 from '../../assets/images/UKG-thumb.png.png';
import ProjThumb4 from '../../assets/images/BrainFlix-thumb.png';
import ProjThumb5 from '../../assets/images/Bandsite-thumb.png';
import ProjThumb6 from '../../assets/images/TravelSite-thumb.png';

import ProjThumb7 from '../../assets/images/cruiseline--thumb.png';
import ProjThumb8 from '../../assets/images/TheFlock--thumb.png';
import ProjThumb9 from '../../assets/images/Windenfields--thumb.png';
import ProjThumb10 from '../../assets/images/SaveGame--vid.gif';
import ProjThumb11 from '../../assets/images/raccoon--thumb.png';

function Projects() {
    const handleReplaceSrc = () => {
        if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            const iconElement = document.querySelector('.projects__header--icon');
            iconElement.setAttribute('src', ProjIconStatic);
        }
    };

    useEffect(() => {
        handleReplaceSrc();
    }, []);

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
                                <IndivProject
                                    Title={'Odyssey Cruiseline'}
                                    Img={ProjThumb7}
                                    DescShort={`Concept for a faux Cruiseline Website that I plan on building out as a side project.`}
                                    DescLarge={`Concept for a faux Cruiseline Website that I plan on building out as a side project with two pages completed as of now; I plan on making a full page map next.`}
                                    url={''}
                                />
                                <IndivProject
                                    Title={'The Flock.'}
                                    Img={ProjThumb8}
                                    DescShort={`A website for a family run blog account about there pet chickens and the homestead.`}
                                    DescLarge={`A website for a family run blog account about there pet chickens and the homestead. Simple blog style layout design.`}
                                    url={''}
                                />
                                <IndivProject
                                    Title={'Winden Fields Sanctuary'}
                                    Img={ProjThumb9}
                                    DescShort={`Site for a sanctuary that breeds King Charles Spaniel's of all types such as special needs.`}
                                    DescLarge={`Site for a sanctuary that breeds, houses, and accepts Cavalier King Charles Spaniel's of all types such as special needs.`}
                                    url={''}
                                />
                                <IndivProject
                                    Title={'SaveGame'}
                                    Img={ProjThumb10}
                                    DescShort={`Game key vendor website; mainly used to test out design concept of hover scaled replacable images for different genres.`}
                                    DescLarge={`Video game key vendor website; mainly used to test out design concept of hover scaled replacable images for different genres.`}
                                    url={''}
                                />
                                <IndivProject
                                    Title={'Raccoon Kid'}
                                    Img={ProjThumb11}
                                    DescShort={`A 3D Model of my personal website mascot that is currently in the texturing phase; I plan on adding him to my websites hero soon!`}
                                    DescLarge={`A raccoon mascot for my personal website that is still in the works!`}
                                    url={''}
                                />
                            </div>
                        </div>
                    ) : (
                        <div className='projects__sec'>
                            <div className='projects__group'>
                                <IndivProject
                                    Title={'Fetchfind'}
                                    Img={ProjThumb1}
                                    DescShort={`Find and adopt dogs in need. Real-time data, contact form, and donation links. Easily accessible online.`}
                                    DescLarge={`Discover and embrace the joy of adopting dogs in need. Explore real-time data, connect through contact form, and support with donation links. Accessible online, making forever homes possible.`}
                                    url={''}
                                />
                                <IndivProject
                                    Title={'2Ye | Clothing Brand'}
                                    Img={ProjThumb2}
                                    DescShort={'A faux clothing line made for Kanye West; completed in under 6 hours. Includes AI voice, and Kanye Quotes API.'}
                                    DescLarge={'A faux clothing line made for Kanye West; won 2nd place in 6 hour Hackathon, completed from Design to code. Also includes AI generated voice, and a Kanye Quotes API.'}
                                    url={''}
                                />
                                <IndivProject
                                    Title={'UKG | Industry Project'}
                                    Img={ProjThumb3}
                                    DescShort={'Winning project for UKG; created the concept & coded an app with a voting system to plan weekly after work events.'}
                                    DescLarge={'Winning project for UKG HR & Workforce Management. Worked with UI designers and created the concept for an app with a voting based system to plan weekly after work events.'}
                                    url={''}
                                />
                                <IndivProject
                                    Title={'BrainFlix'}
                                    Img={ProjThumb4}
                                    DescShort={'Youtube style website that updates video data upon switching selected video; fully responsive.'}
                                    DescLarge={'Youtube style website that updates video data upon switching selected video; fully responsive and functioning content navigation.'}
                                />
                                <IndivProject
                                    Title={'Bandsite'}
                                    Img={ProjThumb5}
                                    url={''}
                                    DescShort={'Website for a band to that shows ticket dates; uses a Soundecloud embedded song, and upload comment feature.'}
                                    DescLarge={'A responsive site for a band to host info about the band as well as available ticket dates; includes the use of embedded Soundcloud site, and an upload comment feature.'}
                                />
                                <IndivProject
                                    Title={'TravelSite'}
                                    Img={ProjThumb6}
                                    DescShort={'Site for an agency hosting trips and excursions that are available; first full sprint completed at Brainstation.'}
                                    DescLarge={'Travel Site for an agency hosting multiple trips and excursions that are available; first full sprint completed at Brainstation.'}
                                    url={''}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}

export default Projects;

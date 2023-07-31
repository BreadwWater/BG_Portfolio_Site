import React, { useEffect, useState } from 'react';
import './Projects.scss';

import ProjIconAnim from '../../assets/animated icons/projects-animated-icon.gif';
import ProjIconStatic from '../../assets/animated icons/projects-icon.svg';

import SectionHeader from '../SectionHeader/SectionHeader';
import Button from '../Button/Button';
import IndivProject from '../IndivProject/IndivProject';

import ProjThumb1 from '../../assets/images/fetchfind-thumbnail.png';
import ProjThumb2 from '../../assets/images/2Ye-thumb.png';
import ProjThumb3 from '../../assets/images/UKG-thumb.png.png';
import ProjThumb4 from '../../assets/images/BrainFlix-thumb.png';
import ProjThumb5 from '../../assets/images/Bandsite-thumb.png';
import ProjThumb6 from '../../assets/images/TravelSite-thumb.png';

import ProjThumb7 from '../../assets/images/cruiseline-thumb.png';
import ProjThumb8 from '../../assets/images/portfolio-img2.png';
import ProjThumb9 from '../../assets/images/Windenfields-thumb.png';
import ProjThumb10 from '../../assets/images/SaveGame-thumb.gif';
import ProjThumb11 from '../../assets/images/raccoon-thumb.png';

import Proj1ModalImg1 from '../../assets/images/fetchfind-img1.png';
import Proj1ModalImg2 from '../../assets/images/fetchfind-img2.png';
import Proj1ModalImg3 from '../../assets/images/fetchfind-img3.png';

import Proj2ModalImg1 from '../../assets/images/2ye-img1.png';
import Proj2ModalImg2 from '../../assets/images/2ye-img2.png';

import Proj3ModalImg1 from '../../assets/images/ukg-img1.png';
import Proj3ModalImg2 from '../../assets/images/ukg-img2.png';
import Proj3ModalImg3 from '../../assets/images/ukg-img3.png';

import Proj4ModalImg1 from '../../assets/images/brainflix-img1.png';
import Proj4ModalImg2 from '../../assets/images/brainflix-img2.png';
import Proj4ModalImg3 from '../../assets/images/brainflix-img3.png';
import Proj4ModalImg4 from '../../assets/images/brainflix-img4.gif';

import Proj5ModalImg1 from '../../assets/images/bandsite-img1.png';
import Proj5ModalImg2 from '../../assets/images/bandsite-img1.png';
import Proj5ModalImg3 from '../../assets/images/bandsite-img3.gif';

import Proj6ModalImg1 from '../../assets/images/TravelSite-thumb.png';
import Proj6ModalImg2 from '../../assets/images/travelsite-img1.gif';

import Proj7ModalImg1 from '../../assets/images/cruiseline-img1.png';
import Proj7ModalImg2 from '../../assets/images/cruiseline-img2.png';

import Proj8ModalImg1 from '../../assets/images/portfolio-img1.png';
import Proj8ModalImg2 from '../../assets/images/portfolio-img2.png';

import Proj9ModalImg1 from '../../assets/images/windenfields-img1.png';

import Proj10ModalImg1 from '../../assets/images/SaveGame-thumb.gif';

import Proj11ModalImg1 from '../../assets/images/raccoon-img1.png';
import Proj11ModalImg2 from '../../assets/images/raccoon-img2.png';
import Proj11ModalImg3 from '../../assets/images/raccoon-img3.png';
import Proj11ModalImg4 from '../../assets/images/raccoon-img4.png';


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
                                    Thumb={ProjThumb7}
                                    DescShort={`Concept for a faux Cruiseline Website that I plan on building out as a side project.`}
                                    DescLarge={`Concept for a faux Cruiseline Website that I plan on building out as a side project with two pages completed as of now; I plan on making a full page map next.`}
                                    Imgs={[Proj7ModalImg1, Proj7ModalImg2,]}
                                    stacks={['Figma', 'Illustrator']}
                                    modalDesc={`I have been working on a faux Cruiseline Website concept, and I have already completed two pages. My plan is to create a full-page map as the next step. This has been an exciting opportunity for me to showcase not only my love for cruises, but my design abilities as well. I look forward to continuing the project and seeing it become a fully realized website.`}
                                    githubLink={'https://github.com/BreadwWater'}
                                    hasWebsite={false}
                                    websiteLink={''}
                                />
                                <IndivProject
                                    Title={'Portfolio Site'}
                                    Thumb={ProjThumb8}
                                    DescShort={`The creation and design of my own portfolio wesbite.`}
                                    DescLarge={`The creation and design of my own portfolio wesbite, including breakpoint sizes and plans to intigrate my 3D Model.`}
                                    Imgs={[Proj8ModalImg1, Proj8ModalImg2]}
                                    stacks={['Figma', 'React', 'Sass']}
                                    modalDesc={`The design for my portfolio site took a while, since I had to find a balance between showing a bit of my personality, without scaring away potential employers! I needed to find a balance between my fun side while still mantaining some level of professionality, and hopefully, i've achieved just that.`}
                                    githubLink={'https://github.com/BreadwWater'}
                                    hasWebsite={true}
                                    websiteLink={'https://www.brendag.dev/'}
                                />
                                <IndivProject
                                    Title={'Winden Fields Sanctuary'}
                                    Thumb={ProjThumb9}
                                    DescShort={`Site for a sanctuary that breeds King Charles Spaniel's of all types such as special needs.`}
                                    DescLarge={`Site for a sanctuary that breeds, houses, and accepts Cavalier King Charles Spaniel's of all types such as special needs.`}
                                    Imgs={[Proj9ModalImg1]}
                                    stacks={['Illustrator']}
                                    modalDesc={`One of my initial projects involved creating a fictitious sanctuary dedicated to breeding, housing, and caring for Cavalier King Charles Spaniels, including those with special needs. This endeavor served as a valuable learning experience for both design and coding processes. As I delved into the project, I gained insights into the intricate aspects of designing and developing a website.`}
                                    githubLink={'https://github.com/BreadwWater'}
                                    hasWebsite={false}
                                    websiteLink={''}
                                />
                                <IndivProject
                                    Title={'SaveGame'}
                                    Thumb={ProjThumb10}
                                    DescShort={`Game key vendor website; mainly used to test out design concept of hover scaled replacable images for different genres.`}
                                    DescLarge={`Video game key vendor website; mainly used to test out design concept of hover scaled replacable images for different genres.`}
                                    Imgs={[Proj10ModalImg1]}
                                    stacks={['Figma', 'Illustrator']}
                                    modalDesc={`For my design exploration, I created a video game key vendor website that primarily served as a platform for testing out a unique design concept. The concept focused on hover-scaled replaceable images, specifically tailored to different game genres. This project allowed me to delve into the world of web design and experiment with visually engaging elements. `}
                                    githubLink={'https://github.com/BreadwWater'}
                                    hasWebsite={false}
                                    websiteLink={''}
                                />
                                <IndivProject
                                    Title={'Raccoon Kid'}
                                    Thumb={ProjThumb11}
                                    DescShort={`A 3D Model of my personal website mascot that is currently in the texturing phase; I plan on adding him to my websites hero soon!`}
                                    DescLarge={`A raccoon mascot for my personal website that is still in the works!`}
                                    Imgs={[Proj11ModalImg1, Proj11ModalImg2, Proj11ModalImg3, Proj11ModalImg4]}
                                    stacks={['Photoshop', 'Maya', 'Three.js']}
                                    modalDesc={`A custom model created for the Hero section of my website as a fun little add-on using Three.js; I plan on adding him once I finish texturing him which will be in phase 3 of my website.`}
                                    githubLink={'https://github.com/BreadwWater'}
                                    hasWebsite={false}
                                    websiteLink={''}
                                />
                            </div>
                        </div>
                    ) : (
                        <div className='projects__sec'>
                            <div className='projects__group'>
                                <IndivProject
                                    Title={'Fetchfind'}
                                    Thumb={ProjThumb1}
                                    DescShort={`Find and adopt dogs in need. Real-time data, contact form, and donation links. Easily accessible online.`}
                                    DescLarge={`Discover and embrace the joy of adopting dogs in need. Explore real-time data, connect through contact form, and support with donation links. Accessible online, making forever homes possible.`}
                                    Imgs={[Proj1ModalImg1, Proj1ModalImg2, Proj1ModalImg3,]}
                                    stacks={['React', 'Sass', 'Figma']}
                                    modalDesc={`This website was my final project while in the Brainstation bootcamp; it was the first time we had full reign's to create an application that could show our abilities. I focused on highlighting the design of the website, drawing from my background in commercial art and product design; I created all the assets used in it's development.`}
                                    githubLink={'https://github.com/BreadwWater/FetchFind'}
                                    hasWebsite={true}
                                    websiteLink={'https://fetch-find-h2y97ej6n-breadwwater.vercel.app/'}
                                />
                                <IndivProject
                                    Title={'2Ye | Clothing Brand'}
                                    Thumb={ProjThumb2}
                                    DescShort={'A faux clothing line made for Kanye West; completed in under 6 hours. Includes AI voice, and Kanye Quotes API.'}
                                    DescLarge={'A faux clothing line made for Kanye West; won 2nd place in 6 hour Hackathon, completed from Design to code. Also includes AI generated voice, and a Kanye Quotes API.'}
                                    Imgs={[Proj2ModalImg1, Proj2ModalImg2,]}
                                    stacks={['HTML', 'React', 'Sass', 'JSX']}
                                    modalDesc={`With a team of 4, we completed this websites design and code in less than six hours. I took the lead in designing the concept and proposing the idea, which was enthusiastically accepted by the group. With the help of an AI voice application, we collaborated to bring Kanye West's fictional clothing brand, 2Ye, to life! Additionally, we integrated an API to generate some of Kanye's quotes.`}
                                    githubLink={'https://github.com/AnthonyQuispe/2Ye-Apparel'}
                                    hasWebsite={false}
                                    websiteLink={''}
                                />
                                <IndivProject
                                    Title={'UKG | Industry Project'}
                                    Thumb={ProjThumb3}
                                    DescShort={'Winning project for UKG; created the concept & coded an app with a voting system to plan weekly after work events.'}
                                    DescLarge={'Winning project for UKG HR & Workforce Management. Worked with UI designers and created the concept for an app with a voting based system to plan weekly after work events.'}
                                    Imgs={[Proj3ModalImg1, Proj3ModalImg2, Proj3ModalImg3,]}
                                    stacks={['React', 'Sass', 'JSX']}
                                    modalDesc={`In the Hackathon, our team was tasked with solving a problem presented by UKG. I am humbled to share that my proposed solution, a vote-based system for weekly after-work activities, led us to win among eight other teams. We felt honored to be chosen, and our solution was commended for its effective simplicity. Participating in the Hackathon was an amazing and humbling experience!`}
                                    githubLink={'https://github.com/luke-mar/industry-front-end'}
                                    hasWebsite={false}
                                    websiteLink={''}
                                />
                                <IndivProject
                                    Title={'BrainFlix'}
                                    Thumb={ProjThumb4}
                                    DescShort={'Youtube style website that updates video data upon switching selected video; fully responsive.'}
                                    DescLarge={'Youtube style website that updates video data upon switching selected video; fully responsive and functioning content navigation.'}
                                    Imgs={[Proj4ModalImg1, Proj4ModalImg2, Proj4ModalImg3, Proj4ModalImg4]}
                                    stacks={['React', 'Sass']}
                                    modalDesc={`Creating this YouTube-inspired website marked my first time tackling responsive design, which posed a significant challenge for me as a newcomer. I embraced the opportunity to learn and grow from the experience. One notable aspect of this project involved developing and utilizing our custom API to fetch video data, presenting an enjoyable and rewarding challenge.`}
                                    githubLink={'https://github.com/BreadwWater/brenda-gonzalez-brainflix'}
                                    hasWebsite={false}
                                    websiteLink={''}
                                />
                                <IndivProject
                                    Title={'Bandsite'}
                                    Thumb={ProjThumb5}
                                    DescShort={'Website for a band to that shows ticket dates; uses a Soundecloud embedded song, and upload comment feature.'}
                                    DescLarge={'A responsive site for a band to host info about the band as well as available ticket dates; includes the use of embedded Soundcloud site, and an upload comment feature.'}
                                    Imgs={[Proj5ModalImg1, Proj5ModalImg2, Proj5ModalImg3]}
                                    stacks={['HTML', 'Sass', 'JavaScript']}
                                    modalDesc={`This project involved showcasing band information, integrating an embedded Soundcloud site, and implementing a comment feature for user uploads. The process challenged me to enhance my skills and knowledge in JavaScript, and I thoroughly enjoyed working on it.`}
                                    githubLink={'https://github.com/BreadwWater/Brenda-Gonzalez-BandSite'}
                                    hasWebsite={false}
                                    websiteLink={''}
                                />
                                <IndivProject
                                    Title={'TravelSite'}
                                    Thumb={ProjThumb6}
                                    DescShort={'Site for an agency hosting trips and excursions that are available; first full sprint completed at Brainstation.'}
                                    DescLarge={'Travel Site for an agency hosting multiple trips and excursions that are available; first full sprint completed at Brainstation.'}
                                    Imgs={[Proj6ModalImg1, Proj6ModalImg2,]}
                                    stacks={['HTML', 'CSS']}
                                    modalDesc={`This project marked a milestone for me as it was my first complete sprint at Brainstation. The project involved developing a website that showcases multiple travel options and provides information about each excursion. It was an exciting opportunity to gain valuable experience about the process of creating a website, such as following and understanding Mockups.`}
                                    githubLink={'https://github.com/BreadwWater/Brenda-Gonzalez-TravelSite'}
                                    hasWebsite={false}
                                    websiteLink={''}
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

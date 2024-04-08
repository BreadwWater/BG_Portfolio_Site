import React from 'react';
import { useEffect } from 'react';
import AboutMe from '../../components/AboutMe/AboutMe';
import Hero from '../../components/Hero/Hero';
import Projects from '../../components/Projects/Projects';
import Skills from '../../components/Skills/Skills';
import ContactMe from '../../components/ContactMe/ContactMe';
import SocialsModal from '../../components/SocialsModal/SocialsModal';

import './HomePage.scss';

function Home() {
    useEffect(() => {
        const scrollToAbout = () => {
            const aboutMeSection = document.getElementById('aboutme');
            if (aboutMeSection) {
                aboutMeSection.scrollIntoView();
            }
        };

        if (window.location.hash === '#aboutme') {
            scrollToAbout();
        }
        const scrollToProjects = () => {
            const projectsSection = document.getElementById('projects');
            if (projectsSection) {
                projectsSection.scrollIntoView();
            }
        };

        if (window.location.hash === '#projects') {
            scrollToProjects();
        }

        const scrollToContact = () => {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView();
            }
        };

        if (window.location.hash === '#contact') {
            scrollToContact();
        };
    }, []);

    return (
        <div>
            <SocialsModal />
            <Hero />
            <AboutMe />
            <Skills />
            <Projects />
            <ContactMe />
        </div>
    );
}

export default Home;
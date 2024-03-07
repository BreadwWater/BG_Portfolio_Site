import React from 'react';
import AboutMe from '../../components/AboutMe/AboutMe';
import Hero from '../../components/Hero/Hero';
import Projects from '../../components/Projects/Projects';
import Skills from '../../components/Skills/Skills';
import ContactMe from '../../components/ContactMe/ContactMe';
import SocialsModal from '../../components/SocialsModal/SocialsModal';
import Skeleton from '../../components/Skeleton/Skeleton';

import './HomePage.scss';

function Home() {
    return (
        <div>
            {/* <Skeleton /> */}
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
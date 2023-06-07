import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AboutMe from './components/AboutMe/AboutMe';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';
import SocialsModal from './components/SocialsModal/SocialsModal';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <SocialsModal />
        <Hero />
        <AboutMe />
        <Skills />
        <Projects />
        <ContactMe />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

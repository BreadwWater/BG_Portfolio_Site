import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
import AboutMe from './components/AboutMe/AboutMe';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';
import SocialsModal from './components/SocialsModal/SocialsModal';
// import { Route, Routes } from 'react-router-dom';
import IndivProj from './pages/IndivProj/IndivProj';

function App() {
  return (
    <div>
      <Header />
      {/* <IndivProj /> */}
      {/* <SocialsModal /> */}
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AboutMe from './components/AboutMe/AboutMe';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Hero />
        <AboutMe />
        <Skills />
        <Projects />
      </div>
    </Router>
  );
}

export default App;

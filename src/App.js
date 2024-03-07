import React from 'react';

import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/Home/HomePage';
import ProjectPage from './pages/ProjectPage/ProjectPage';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (<>
    <Header />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/project/:projectId' element={<ProjectPage />} />
    </Routes>
    <Footer />
  </>
  );
}

export default App;

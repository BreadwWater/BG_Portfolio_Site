import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import ProjectPage from './pages/ProjectPage/ProjectPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomeSkeleton from './components/HomeSkeleton/HomeSkeleton';
import NotFound from './pages/NotFound/NotFound';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<HomeSkeleton><HomePage /></HomeSkeleton>}
        />

        <Route
          path="/project/:projectId"
          element={<ProjectPage />}
        />

        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

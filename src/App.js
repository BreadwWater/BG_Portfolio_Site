import AboutMe from './components/AboutMe/AboutMe';
import Header from './components/Header/Header';
import Hero from "./components/Hero/Hero";
import ProgressCircle from './components/ProgressCircle/ProgressCircle';

import MayaIcon from './assets/icons/Maya--icon.svg';

function App() {
  return (
    <div>
      <Header />
      <Hero></Hero>
      <AboutMe></AboutMe>
      <ProgressCircle value={92} name={'Maya'} img={MayaIcon}></ProgressCircle>
    </div>
  );
}

export default App;

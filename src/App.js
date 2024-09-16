
import './navbar.css';
import { useState,useEffect } from 'react';

import Navbar from './components/Navbar';
import BackgroundVideo from './components/BackgroundVideo';
import Heading from './components/Heading';
import Skills from './components/Skills';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import Qualifications from './components/Qualifications';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import backgroundVideo from "./assets/img/video.mp4";


function App() {
  const [isSamsung, setIsSamsung] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent;
    if (/SamsungBrowser/.test(userAgent)) {
      setIsSamsung(true);
    }
  }, []);

  
  return (
    <div className="App" >
      
     {!isSamsung? <BackgroundVideo />:null}
      <Navbar/>
      <Heading/>
      <AboutMe/>
      <Qualifications/>
      <Skills/>
      <Projects/>
      <ContactMe/>
      <Footer/>
      
      
    </div>
  );
}

export default App;


import './navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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
import Alert from './components/AlertMessage';




function App() {
  const [isSamsung, setIsSamsung] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
 useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    // Set the initial state
    setIsDarkMode(darkModeMediaQuery.matches);

    // Event listener to update state on change
    const handleChange = (event) => {
      setIsDarkMode(event.matches);
    };

    darkModeMediaQuery.addEventListener('change', handleChange);

    // Cleanup event listener on component unmount
    return () => {
      darkModeMediaQuery.removeEventListener('change', handleChange);
    };
  }, []);
    console.log(isDarkMode);

  useEffect(() => {
    const userAgent = navigator.userAgent;
    if (/SamsungBrowser/.test(userAgent)) {
      setIsSamsung(true);
    }
  }, []);



  const [samsungVersion, setSamsungVersion] = useState("initial");

  useEffect(() => {
    const userAgent = navigator.userAgent;
    console.log('User Agent:', userAgent); // For debugging

    // Refined regex pattern to capture Samsung Internet version
    const samsungBrowserMatch = userAgent.match(/SamsungBrowser\/([\d.]+)/);

    if (samsungBrowserMatch) {
      setSamsungVersion(samsungBrowserMatch[1]); // Extracts the version number
    } else {
      setSamsungVersion('Version not detected');
    }
    alert(samsungVersion)
  }, []);
  return (
    <div className="App" >
     {/* {isSamsung&&isDarkMode?<Alert content="Your device is in dark mode" /> :null}
    {!isSamsung ?<BackgroundVideo />:<Alert content="Use another browser to get better experience" />} */}
    <Alert content={samsungVersion}/>
    <BackgroundVideo />
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


import './navbar.css';
import '../src/components/loadingspinner.css';
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





function App() {
  const [loading, setLoading] = useState(true);

  // Function to handle image load
  const handleImageLoad = () => {
    console.log("Loading stopped");
    setLoading(false);
  };

  const handleImageError = () => {
    console.error("Image failed to load.");
    setLoading(false); // Stop loading even if the image fails
};
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

//Check samsung version
// version 26.o above has fixed dark theme issue

  const [samsungVersion, setSamsungVersion] = useState("initial");

  useEffect(() => {
    const userAgent = navigator.userAgent;
    // alert('User Agent:', userAgent); // For debugging

    // Refined regex pattern to capture Samsung Internet version
    const samsungBrowserMatch = userAgent.match(/SamsungBrowser\/([\d.]+)/);
    // alert(samsungBrowserMatch)

    if (samsungBrowserMatch) {
      setSamsungVersion(samsungBrowserMatch[1]); // Extracts the version number
      // alert(samsungBrowserMatch[1]) //26.0
      // if(parseFloat(samsungBrowserMatch[1])>25.0){
      //   setIsSamsung(false);
      // }
    } else {
      setSamsungVersion('Version not detected');
    }
 
  }, []);
  return (
    <div className="App" >
     {/* Loading Screen */}
      {loading && (
        <div className="loading-overlay">
          <div className="loader"></div> 
        </div>
      )}
    {!isSamsung && !loading ?<BackgroundVideo />:null}
    
   {/* <BackgroundVideo /> */}
   <Heading onImageLoad={handleImageLoad} handleImageError={handleImageError}/>
     {!loading && (
  <>
    <Navbar />
    
    <AboutMe />
    <Qualifications />
    <Skills />
    <Projects />
    <ContactMe />
    <Footer />
  </>
)}
      
    </div>
  );
}

export default App;

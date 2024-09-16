
import './navbar.css';
import { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
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
  // const [isSamsung, setIsSamsung] = useState(false);

  // useEffect(() => {
  //   const userAgent = navigator.userAgent;
  //   if (/SamsungBrowser/.test(userAgent)) {
  //     setIsSamsung(true);
  //   }
  // }, []);

  // if (isSamsung) {
  //   // Optionally, redirect or display a message
  //   // window.location.href = 'https://example.com'; // Redirect to another page
  //   return <div>Please use a different browser to access this website.</div>;
  // }
  return (
    <div className="App">
       <BackgroundVideo/>
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


import './navbar.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import BackgroundVideo from './components/BackgroundVideo';
import Heading from './components/Heading';
import Skills from './components/Skills';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import Qualifications from './components/Qualifications';
import Projects from './components/Projects';


function App() {
  return (
    <div className="App">
       <BackgroundVideo/>
      <Navbar/>
      <Heading/>
      <AboutMe/>
      <Qualifications/>
      <Skills/>
      <Projects/>
      <Footer/>
      
      
    </div>
  );
}

export default App;

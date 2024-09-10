
import './navbar.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import BackgroundVideo from './components/BackgroundVideo';
import Heading from './components/Heading';
import Skills from './components/Skills';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import Qualifications from './components/Qualifications';


function App() {
  return (
    <div className="App">
       <BackgroundVideo/>
      <Navbar/>
      <Heading/>
      <AboutMe/>
      <Qualifications/>
      <Skills/>
      <Footer/>
      
      
    </div>
  );
}

export default App;

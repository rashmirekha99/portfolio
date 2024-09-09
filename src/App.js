
import './navbar.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import BackgroundVideo from './components/BackgroundVideo';
import Heading from './components/Heading';
import Skills from './components/Skills';
import AboutMe from './components/AboutMe';


function App() {
  return (
    <div className="App">
       <BackgroundVideo/>
      <Navbar/>
      <Heading/>
      <AboutMe/>
      
      <Skills/>
      
      
    </div>
  );
}

export default App;

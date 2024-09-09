
import './navbar.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import BackgroundVideo from './components/BackgroundVideo';
import Heading from './components/Heading';
import AboutUs from './components/AboutUs';


function App() {
  return (
    <div className="App">
       <BackgroundVideo/>
      <Navbar/>
      <Heading/>
      <AboutUs/>
      
    </div>
  );
}

export default App;

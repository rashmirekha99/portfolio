
import './navbar.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import BackgroundVideo from './components/BackgroundVideo';
import Heading from './components/Heading';


function App() {
  return (
    <div className="App">
       <BackgroundVideo/>
      <Navbar/>
      <Heading/>
      
    </div>
  );
}

export default App;


import './navbar.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import BackgroundVideo from './components/BackgroundVideo';


function App() {
  return (
    <div className="App">
       <BackgroundVideo/>
      <Navbar/>
      
    </div>
  );
}

export default App;

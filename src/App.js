import './pages/nav.css'
import HomePage from "./pages/HomePage";
import NaguSaabsan from './pages/NaguSaabsan';
import Talooyin from './pages/Talooyin';
import Furaysha from './pages/Furaysha';
import Emergency from './pages/Emergency';
import ContactUs from './pages/ContactUs';
import SiiAkhri from './pages/SiiAkhri';
import Forum from './pages/Forum';

function App() {
  return (
    <div className="App">
     <HomePage/>
     <SiiAkhri/>
     <NaguSaabsan/>
     <Talooyin/>
     <Furaysha/>
     <Emergency/>
     <Forum/>
     <ContactUs/>
    </div>
  );
}

export default App;

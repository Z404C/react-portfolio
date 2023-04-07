import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navigation from './components/navigation';

import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
//presented with containing a header, a section for content, and a footer
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path='/about' element={<About />}   />
          <Route path='/portfolio' element={<Portfolio />}   />
          <Route path='/contact' element={<Contact />}   />
          <Route path='/resume' element={<Resume />}   />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

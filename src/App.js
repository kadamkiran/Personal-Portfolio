import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutMe from './component/AboutMe';
import Home from './component/Home';
import NavBar from './component/NavBar';
import Skills from './component/Skills';
import Contact from './component/Contact';
import Projects from './component/Projects';
import { Routes ,Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar />

        <Routes>
          
          <Route path="/" element={<Home/>}/>
          <Route path="/About" element={<AboutMe/>}/>
          <Route path="/Skill" element={<Skills/>}/>
          <Route path="/Projects" element={<Projects/>}/>
          <Route path="/Contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;

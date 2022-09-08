import React, {useState} from 'react'
import Home from './pages';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Mission from './components/Mission';
import Team from './components/Team';
import Sponsors2022 from './components/Sponsors/2022';
import ProjectScroll from './components/ProjectScroll';
import { JatunPampa, KeenBridge, Humapirhua } from './components/ProjectScroll/ProjectData';
import Projects from './components/Projects';
import ProjectDetails from './components/ProjectDetails';
import Footer from './components/Footer';
import { JatunPampaData } from './components/ProjectDetails/SiteData';
import Sidebar from './components/Sidebar';


function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
    window.scrollTo(0,0)
  }
  
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<Mission />} />
        <Route path='/ourteam' element={<Team />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/projects/jatunpampa' element={<ProjectDetails {...JatunPampaData}/>} />
        <Route path='/projects/keen' element={<ProjectScroll {...KeenBridge} id='2021'/>} />
        <Route path='/projects/humapirhua' element={<ProjectScroll {...Humapirhua} id='2019'/>} />

        <Route path='/sponsorships' element={<Sponsors2022 />} />
      </Routes>
      <Footer />
    {/* <Router>
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
    </Router> */}
    </>
  );
}

export default App;

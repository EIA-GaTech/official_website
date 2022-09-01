import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Hero from '../components/Hero'
import Info from '../components/Info'
import { whyBridge, ourTeam, Sponsorships, OurProjects } from '../components/Info/Data'
import ProjectScroll from '../components/ProjectScroll'
import Projects from '../components/Projects'
import Team from '../components/Team'
import { KeenBridge, Humapirhua } from '../components/ProjectScroll/ProjectData'
import Sponsors from '../components/Sponsors'
import Footer from '../components/Footer'
import Mission from '../components/Mission'
import YouTubeEmbed from '../components/YouTube'
import WhatsNext from '../components/WhatsNext'

const Home = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <Info {...whyBridge} />
      <Mission />
      <Info {...ourTeam} />
      <Team />
      <Info {...OurProjects} />
      <ProjectScroll {...KeenBridge} id='2021' />
      <YouTubeEmbed />
      <ProjectScroll {...Humapirhua} id='2019' />
      <WhatsNext></WhatsNext>
      <Info {...Sponsorships} />
      <Sponsors id='sponsors' />
      <Footer />
    </>
  )
}

export default Home
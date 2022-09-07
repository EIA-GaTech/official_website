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
import Sponsors2022 from '../components/Sponsors/2022'
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
      <Hero />
      <Info {...OurProjects} />
      <Sponsors2022 />
      <WhatsNext></WhatsNext>
    </>
  )
}

export default Home
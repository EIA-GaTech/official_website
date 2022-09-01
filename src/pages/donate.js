import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Hero from '../components/Hero'
import Info from '../components/Info'
import { whyBridge, ourTeam, Sponsorships, OurProjects } from '../components/Info/Data'

const Donate = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      {/* <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} /> */}
      <Info {...whyBridge} />
      <h1>Sss</h1>
    </>
  )
}

export default Donate
import React, { useState, useEffect } from 'react';
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements';
import { animateScroll as scroll } from 'react-scroll';
import eialogo from '../../images/eialogo.png';


const Navbar = ({toggle}) => {
  const [scrollNav, setScrollNav] = useState(false);
  

  const changeNav = () => {
    if (window.location.pathname != '/' | window.scrollY >= window.innerHeight-80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('load', changeNav);
    window.addEventListener('scroll', changeNav);
    window.addEventListener('click', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  const goTop = () => {
    window.scrollTo(0, 0)
  };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to='/' onClick={toggleHome}>Engineers in Action @Georgia Tech</NavLogo>
          {/* <NavLogo to='/' onClick={toggleHome} img={eialogo}></NavLogo> */}
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              {/* <NavLinks to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Vision</NavLinks> */}
              <NavLinks to='/about' onClick={goTop}>Why Bridges?</NavLinks>
            </NavItem>
            <NavItem>
              {/* <NavLinks to='team' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Our Team</NavLinks> */}
              <NavLinks to='/ourteam' onClick={goTop}>Our Team</NavLinks>
            </NavItem>
            <NavItem>
              {/* <NavLinks to='projects' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Projects</NavLinks> */}
              <NavLinks to='/projects' onClick={goTop}>Projects</NavLinks>
            </NavItem>
            <NavItem>
              {/* <NavLinks to='sponsorships' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Sponsorships</NavLinks> */}
              <NavLinks to='/sponsorships' onClick={goTop} >Sponsorships</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink href='https://engineersinaction.networkforgood.com/projects/151953-georgia-tech-engineers-in-action-2022' target="_blank" smooth={true} style={{textDecoration: 'none', color: '#010606'}}>Donate</NavBtnLink>
          </NavBtn>

        </NavbarContainer>
      </Nav>
    
    </>
  )
}

export default Navbar;

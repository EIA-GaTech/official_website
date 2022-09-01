import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='about' onClick={toggle}>Vision</SidebarLink>
          <SidebarLink to='team' onClick={toggle}>Our Team</SidebarLink>
          <SidebarLink to='projects' onClick={toggle}>Projects</SidebarLink>
          <SidebarLink to='sponsorships' onClick={toggle}>Sponsorships</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute href='https://engineersinaction.networkforgood.com/projects/146453-georgia-tech-eia-year-end-campaign-2021' target="_blank" smooth={true} style={{textDecoration: 'none', color: '#010606'}} onClick={toggle}>Donate</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar

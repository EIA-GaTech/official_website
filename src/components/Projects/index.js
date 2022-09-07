import React from 'react'
import {ProjectsContainer } from './ProjectsElements'
import ProjectScroll from '../ProjectScroll'
import { Humapirhua, KeenBridge, JatunPampa} from '../ProjectScroll/ProjectData'


const Projects = () => {
  return (
    <ProjectsContainer id="Projects">

    <ProjectScroll {...JatunPampa} />
    <ProjectScroll {...KeenBridge} />
    <ProjectScroll {...Humapirhua} />
    </ProjectsContainer>
  )
}                        

export default Projects

import React from 'react'
import Icon1 from '../../images/Keen1.jpg'
import Icon2 from '../../images/Bolivia_2019_1.jpg'
import {ProjectsContainer, ProjectsWrapper, ProjectsCard, ProjectsIcon, ProjectsH2, ProjectsP} from './ProjectsElements'

const Projects = () => {
  return (
    <ProjectsContainer id="Projects">
      <ProjectsWrapper>
        <ProjectsCard>
          <ProjectsIcon src={Icon1} />
          <ProjectsH2>Keen Bridge, WV </ProjectsH2>
          <ProjectsP> 2021</ProjectsP>
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsIcon src={Icon2} />
          <ProjectsH2>Humapirhua, Bolivia</ProjectsH2>
          <ProjectsP> 2019</ProjectsP>
        </ProjectsCard>
      </ProjectsWrapper>
    </ProjectsContainer>
  )
}

export default Projects

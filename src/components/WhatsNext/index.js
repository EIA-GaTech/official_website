import { LinearProgress } from '@mui/material';
import React from 'react'
import { SectionWrapper, Title, Year, ProjectName, BarWrapper, Goal, Description, ImageWrapper, Image, ProjectWrapper, TextWrapper, Sentences } from './NextComponents'

const ProgressBar = ({value, max}) => {
  return (
    <progress value={value} max={max}  />
  )
};

const WhatsNext = () => {
  return (
    <SectionWrapper>
      <Title>Next Project</Title>
      <ProjectWrapper>
        <TextWrapper>
      <Year>2023</Year>
      <ProjectName>TBD</ProjectName>
      {/* <Description> Project with University of Delaware & Eastern Mennonite University </Description>
      <Description> 109m Suspended Pedestrian Bridge </Description>
      <Sentences>This bridge will serve 330 inhabitants in Jatun Pampa and Toto Loma communities. </Sentences>
      <Sentences>We are currently in the fundraising & designing process. </Sentences> */}
      </TextWrapper>
      <ImageWrapper>
        <Image src={require('../../images/Jatun_Pampa.jpg').default}>
        </Image>
      </ImageWrapper>
      </ProjectWrapper>
      <Title>Current Fundraising Status</Title>
      <BarWrapper>
      <Goal> $0 Raised / $25,125 Goal</Goal>
      <LinearProgress variant='determinate' color='secondary' value={0} />
      </BarWrapper>
    </SectionWrapper>
  )
}

export default WhatsNext

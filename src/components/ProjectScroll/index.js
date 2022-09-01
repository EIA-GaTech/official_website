import React from 'react'
import {useRef} from 'react';
import { ProjectWrapper, ProjectName, Image, BeforeImage, ImageWrapper, Description, Year, TextWrapper, Sentences, SectionWrapper } from './ProjectElements';
// import { Observer } from '../Observer';
import { BeforeImgObserver } from './BeforeImgObserver';



const ProjectScroll = ({id, year, projectName, location, projectType, description, sentences, image, imageBefore}) => {
  const beforeImgRef = useRef(null);
  // const fadeRef = useRef(null);
  const isImageVisible = BeforeImgObserver({
    root: null,
    rootMargin: '0px 30px',
    threshold: 0.85
  }, beforeImgRef)

  // const apperOnScroll = Observer({
  //   root: null,
  //   rootMargin: '-120px 0px',
  //   threshold: 0.3
  // }, fadeRef)




  

  return (
    <SectionWrapper>
    <ProjectWrapper id={id}>
      <TextWrapper>
        <Year>{year}</Year>
        <ProjectName>{projectName}, {location}</ProjectName>
        <Description>{projectType}</Description>
        <Description>{description}</Description>
        <Sentences>{sentences}</Sentences>
        {/* <ProjectName>{isImageVisible ? 'After': 'Before'}</ProjectName> */}
      </TextWrapper>
      <ImageWrapper >
      <BeforeImage ref={beforeImgRef} isVisible={isImageVisible} src={imageBefore}  ></BeforeImage>
      <Image src={image}  ></Image>
      </ImageWrapper>
    </ProjectWrapper>
    </SectionWrapper>
  )
}

export default ProjectScroll

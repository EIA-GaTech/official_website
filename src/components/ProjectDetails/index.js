import React from 'react'
import ImageGallery from "react-image-gallery";
import Sponsors2022 from '../Sponsors/2022';
import { HeaderWrapper, KeyInfoWrapper, LocationImage, Title, ProjectContainer, Description, KeyInfo, ImageColumn, SentenceColumn, GalleryWrapper, ImageWrapper, CompletionImage, Subtitle} from './ProjectPageElements'


const ProjectDetails = ({title,description, location, grouppic, keyinfo, team, images, comp1, comp2}) => {
  return (
    <ProjectContainer>
      <HeaderWrapper>
        <Title> {title}</Title>
        <Description> {description}</Description>
        <ImageWrapper>
          <CompletionImage src ={comp1}></CompletionImage>
          <CompletionImage src ={comp2}></CompletionImage>
        </ImageWrapper>
      </HeaderWrapper>
      <Subtitle> Project Location & Key Stats</Subtitle>
      <KeyInfoWrapper>
        <ImageColumn>
        <LocationImage src={location}></LocationImage>
        </ImageColumn>
        <SentenceColumn>
        <KeyInfo>{keyinfo}</KeyInfo>
        </SentenceColumn>
      </KeyInfoWrapper>
      <Subtitle>Project Team</Subtitle>
      <KeyInfoWrapper>
        <ImageColumn>
        <LocationImage src={grouppic}></LocationImage>
        </ImageColumn>
        <SentenceColumn>
        <KeyInfo>{team}</KeyInfo>
        </SentenceColumn>
      </KeyInfoWrapper>
      <Subtitle>Project Gallery</Subtitle>
      <GalleryWrapper>
      <ImageGallery items={images} autoPlay={true} showFullscreenButton={false} showNav={false} />
      </GalleryWrapper>

      <Sponsors2022 />

    </ProjectContainer>
    )
}

export default ProjectDetails
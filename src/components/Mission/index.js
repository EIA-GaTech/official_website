import React from 'react'
import { SubsectionContainer, Sentence, MissionStatement, MissionStatementContainer, Title, SectionContainer, ImageContainer, Image, SentenceContainer} from './MissionComponents'
import Impact1 from '../../images/Impact1.png';
import Impact2 from '../../images/Impact2.png';
import Impacts from '../../images/impacts.png';
import Info from '../Info';
import { mission } from '../Info/Data';

const Mission = () => {
  return (
    <SectionContainer>
      <Info {...mission} />
      {/* <Title> Our Mission</Title> */}
      <MissionStatementContainer>
      <Sentence>We strive to connect isolated communities to essential resources through bridge-building. Ultimately, our goal is to improve their quality of life and equalize access to opportunities. As students early in our engineering careers, we aim to make a global impact using skills we learn both in and out of the classroom. 
          </Sentence>
      </MissionStatementContainer>

      {/* <Title> Impact</Title> */}
      <SubsectionContainer>        
        <ImageContainer>
          <Image src={Impact1} />
        </ImageContainer>
        <SentenceContainer>
          <Sentence>
            Rural isolation is a major cause of poverty, and people have to stay home or take tremendous risks to access their resources when a water level is high. 
            This situation that geography determines people’s accessibility to opportunities is unfair. 
            Therefore, we, the EIA Georgia Tech chapter, believe what we can do is to support the communities using our engineering knowledge.
          </Sentence>
          <Sentence>
            EIA has constructed 99 bridges in 11 different countries, serving 150,000 previously isolated individuals worldwide. 
            Past EIA bridges have brought: about a 12% increase in children enrolled in school, an 18% increase in healthcare treatment, a 30% increase in labor market income, a 59% increase in women in the labor market, and a 75% increase in farm profits. 
          </Sentence>
        </SentenceContainer>
        </SubsectionContainer>
      
        <ImageContainer>
          <Image src={Impacts} />
        </ImageContainer>

      <SubsectionContainer>
      <SentenceContainer>
        <Sentence>
        
        This level of impact is unparalleled in the realm of community-level development projects! 
        As part of the EIA program, student members learn a wide range of technical and communication skills. 
        This real-world engineering experience allows students to take part in the project development process from initial conceptualization and site layout to final implementation. 
        Students learn technical hard skills in addition to soft skills like teamwork and cultural competence, which are applicable to their future careers.
        </Sentence>
        </SentenceContainer>
        <ImageContainer>
        <Image src={Impact2} />
        </ImageContainer>
      </SubsectionContainer>
    </SectionContainer>
  )
}

export default Mission

import styled from "styled-components"

export const SectionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  flex-direction: column;
  background-color: #fff9ea;
  
  @media screen and (max-width: 768px){
    padding: 14px;
  }
`


export const Title = styled.h1`
  font-size: 50px;
  text-align: center;
  padding-bottom: 20px;
  font-family: 'Ubuntu', sans-serif;

  @media screen and (max-width: 768px){
    padding-bottom: 0px;
    padding-top: 20px;
    font-size: 40px;
  }
`
export const SubsectionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  padding: 20px;
  flex-direction: column;
  
  @media screen and (max-width: 1280px){
    grid-template-columns: 1fr;
    padding: 0px;
    /* margin: 20px 0px; */
  }
  @media screen and (max-width: 900px){
    grid-template-columns: 1fr;
    
  }
`

export const MissionStatementContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 50px;

  @media screen and (max-width: 768px){
    margin: 25px;
  }
`
export const MissionStatement = styled.h2`
  font-size: 25px;
  font-weight: 500;

  @media screen and (max-width: 768px){
    font-size: 20px;
  }
`
export const SentenceContainer = styled.div`
  padding: 15px;
  

`
export const Sentence = styled.h4`
  font-size: 21px;
  font-weight: 400;
  padding: 0px 15px;
  line-height: 32px;

  @media screen and (max-width: 900px){
    margin: 30px 0px;
    font-size: 16px;
  }
`

export const ImageContainer = styled.div`
  padding: 15px;
`
export const Image = styled.img`
  max-width: 100%;
`

export const ImpactWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 500px;
  width: 100%;
  font-size: 30px;
  padding-left: 30px;
  padding-right: 30px;
  background: #feb101;
  justify-content: center;
  align-items: center;
`
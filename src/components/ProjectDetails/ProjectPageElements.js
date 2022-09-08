import styled from "styled-components";


export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff9ea;
  padding-top: 80px;
`

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px 100px;

  @media screen and (max-width: 1140px) {
    margin: 40px;
  }
  @media screen and (max-width: 768px) {
    margin: 5px;
  }
  
  

`
export const Title = styled.h1`
  font-size: 48px;
  color: #feb101;;
  padding: 20px;
  font-family: 'Lobster Two', cursive;
  @media screen and (max-width: 768px) {
    font-size: 36px;
  }
 `

 export const Subtitle = styled.h1`
  font-size: 36px;
  color: #000;
  padding-top: 60px;
  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
 `

export const Description = styled.h3`
  font-size: 1.2em;
  font-weight: 500;
  margin: 20px;
  letter-spacing: .05em
  color: #333;
  @media screen and (max-width: 768px) {
    font-size: 1em;
  }
`
export const ImageWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;

  @media screen and (max-width: 1140px) {
    display:flex;
    flex-direction: column;
    margin:0px;
    margin-bottom: 40px;

`
export const CompletionImage = styled.img`
  max-width: 100%;
  max-height: 60vh;
  margin: 20px;
  @media screen and (max-width: 1140px) {
    max-height: none;
  }
`

export const KeyInfoWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 40px;

  @media screen and (max-width: 1140px) {
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    margin:0;
    margin-bottom: 40px;
    max-width: 100%
  }
`
export const ImageColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-contents: center;
  padding: 20px;
  align-items: center;
  @media screen and (max-width: 1140px) {
    margin: 30px;
    grid-column: none;
  }
  @media screen and (max-width: 768px) {
    margin: 0;
    margin-top: 40px;
    padding: 0;
  }

`
export const SentenceColumn = styled.div`
  padding: 40px;
  @media screen and (max-width: 1140px) {
    grid-column: none;
  }
  @media screen and (max-width: 768px) {
    padding: 30px 5px;
  }
`

export const LocationImage = styled.img`
  // height: 60vh;
  max-height: 50vh;
  max-width: 100%;
`
export const KeyInfo = styled.h2`
  line-height: 40px;
  font-size: 1.2em;
  white-space: pre-wrap;
  font-weight: 500;
  @media screen and (max-width: 1140px) {
    font-size: 1em;
  }
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`
export const GalleryWrapper = styled.div`
  width: 900px;
  margin: 40px;
  @media screen and (max-width: 1140px) {
    width: 100vw;
  }
`

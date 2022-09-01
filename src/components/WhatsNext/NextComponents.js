import styled from "styled-components";

export const SectionWrapper = styled.div`
width: 100%;
background-color: #fff9ea;
`
export const ProjectWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  position: relative;
  padding: 40px;
  
  z-index: 1;

  @media screen and (max-width: 1100px){
    /* height: 900px; */
    padding: 20px;
    display: flex;
    flex-direction: column;
  }
  
`
export const TextWrapper = styled.div`
  padding: 0 30px;
  height: 100%;
  grid-column: 1/span 2;
  grid-row: 3/span 2;

  @media screen and (max-width: 1100px){
    align-items: center;
    width: 100%;
    padding-left: 0px; 
    grid-column: 2/span 3;
    grid-row: 1/span 2;
  }
  
`

export const Title = styled.h1`
  font-size: 50px;
  text-align: center;
  padding-top: 40px;
  padding-bottom: 20px;
  font-family: 'Ubuntu', sans-serif;

  @media screen and (max-width: 768px){
    padding-bottom: 0px;
    padding-top: 20px;
    font-size: 40px;
  }
`

export const BarWrapper = styled.div`
  padding: 10px 10px 40px 200px;
  height: 100px;
  @media screen and (max-width: 768px){
    padding: 10px;
  }
`

export const Goal = styled.h2`
  font-size: 27px;
  font-weight: 500;
  @media screen and (max-width: 768px){
    font-size: 20px;
  }
`

export const Year = styled.h3`
  font-size: 24px;
  font-weight: 700;
`

export const ProjectName = styled.h1`
  color: #feb101;
  font-size: 50px;
  line-height: 1.1;
  font-weight: 500;
  font-family: 'Lobster Two', cursive;
  /* font-family: 'Dancing Script', cursive; */
  /* font-family: 'Caveat', cursive; */
  @media screen and (max-width: 1100px){
    padding-left: 0px; 
    grid-column: 1/span 5;
    grid-row: 1/span 2;
  }

`

export const Description = styled.h5`
  font-size: 19px;
  font-weight: 400;
  padding-top: 20px;
`

export const ImageWrapper = styled.div`
  display: grid; 
  grid-column: 3/span 3;
  grid-row: 2/span 3;
  
  @media screen and (max-width: 1100px){
    grid-column: 1/span 5;
    grid-row: 3/span 3;
    padding: 40px;
  }
`
export const Image = styled.img`
  min-width: auto;
  min-height: auto;
  width: 100%;
  grid-column: 3/span 3;
  grid-row: 2/span 3;
  z-index: 1;

  @media screen and (max-width: 1100px){
    grid-column: 1/span 5;
    grid-row: 3/span 3;
  } 

`
export const Sentences = styled.p`
  font-size: 17px;
  font-weight: 400;
  font-style: italic;
  padding-top: 0px;
  line-height: 24px;
`
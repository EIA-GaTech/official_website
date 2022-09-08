import styled from "styled-components";
import { Link } from "react-router-dom";
import { Link as LinkV } from '@mui/material';

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
  @media screen and (max-width: 768px){
    padding: 10px;
  }
  
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
  @media screen and (max-width: 1100px){
    padding: 5px;
    padding-bottom: 50px;
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
export const BeforeImage = styled.img`
  min-width: auto;
  min-height: auto;
  width: 100%;
  grid-column: 3/span 3;
  grid-row: 2/span 3;
  z-index: 2;
  opacity: ${({isVisible}) => (isVisible ? '0': '1')};
  transition: 3s ease-in-out;
  transition-delay: 0.5s;

  @media screen and (max-width: 1100px){

    grid-column: 1/span 5;
    grid-row: 3/span 3;
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
  @media screen and (max-width: 500px){
    padding: 0px; 
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
  // font-weight: 500;
  font-family: 'Lobster Two', cursive;
  /* font-family: 'Dancing Script', cursive; */
  /* font-family: 'Caveat', cursive; */
  @media screen and (max-width: 1100px){
    padding-left: 0px; 
    grid-column: 1/span 5;
    grid-row: 1/span 2;
  }
  @media screen and (max-width: 768px){
    font-size: 45px; 
  }

  
`


export const Description = styled.h5`
  font-size: 18px;
  font-weight: bold;
  padding-top: 12px;
  
`

export const Sentences = styled.p`
  font-size: 15px;
  font-weight: 400;
  font-style: italic;
  padding-top: 20px;
  line-height: 24px;
  @media screen and (max-width: 768px){
    font-size: 13px; 
  }
`
export const ButtonContainer = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 1fr 1fr 1fr;
`

export const ButtonWrapper = styled.div`
`
export const Button = styled(Link)`
  text-decoration: none;
  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`

export const VideoButton = styled(LinkV)`
  outline: none;
  text-decoration: none;
  border: none;
  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`
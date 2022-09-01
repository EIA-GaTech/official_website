import styled from "styled-components";
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  position: relative;
  z-index: 1;

  :before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(0,0,0,0.45) 0%, transparent 100%);
    /* ,
    linear-gradient(180deg, rgba(0,0,0,0.2) 0%, ); */
    z-index: 2;
  }
  //add before styles 
`

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  /* position: absolute; */
	/* bottom: 120px;
  right: 150px; */
  /* padding: 8px 24px; */
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 1000px){
    position: static;
    align-items: center;
  }
`

export const HeroH1 = styled.h1`
  color: #feb201;
  color: transparent;
  font-size: 100px;
  text-align: center;
  font-weight: 500;
  /* text-shadow: #000 0px 0px 6px; */
  -webkit-text-stroke: 0.8px #fff;
  /* font-family: 'Dancing Script', cursive; */
  font-family: 'Caveat', cursive;
  /* font-family: 'Lobster Two', cursive; */
  /* font-family: 'Playball', cursive; */
  
  

  @media screen and (max-width: 768px){
    font-size: 70px;
  }
  @media screen and (max-width: 480px){
    font-size: 40px;
  }
`

export const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: right;
  max-width: 600px;

  @media screen and (max-width: 768px){
    font-size: 24px;
  }
  @media screen and (max-width: 480px){
    font-size: 18px;
  }
`

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  align-self: right;
  /* flex-direction: column; */
  /* align-items: center; */
`

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`
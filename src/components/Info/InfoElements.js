import styled from "styled-components";
import { Link } from '@mui/material';


export const InfoContainer = styled.div`
  color: #fff;
  background:  #0b0031;

  @media screeen and (max-width: 1068px) {
    /* margin: 100px 0; */
  }
`

export const InfoWrapper = styled.div`
  display: grid;
  /* flex-direction: column; */
  z-index: 1;
  max-height: 590px;
  width: 100%;
  max-width: 1500px;
  margin-right: auto;
  margin-left: auto;
  /* justify-content: center; */
  @media screen and (max-width: 768px){
    display: flex;
  }
`
export const InfoRow = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  max-height: 590px;
  /* list-style: none; */
  /* grid-auto-columns: minmax(auto, 2fr); */
  /* align-items: center; */

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(4, 1fr);

  }
`
export const Column1 = styled.div`
  /* margin-bottom:  15px;
  padding: 0 15px; */
  grid-area: col1;
  z-index: 2;
  grid-column: 1/span 4;
  grid-row: 2/span 3;
  padding: 40px;
  @media screen and (max-width: 768px) {
    grid-column: 1/span 4;
    grid-row: 2/span 3;
  }
`
export const Column2 = styled.div`
  /* margin-bottom:  15px; */
  /* padding: 0 15px; */
  grid-area: col2;
  grid-column: 3/span 3;
  grid-row: 1/span 5;
  z-index: 1;
  @media screen and (max-width: 768px) {
    grid-column: 1/span 4;
    grid-row: 1/span 4;
    opacity: 0.5;
  }
  
`
export const TextWrapper = styled.div`
  /* max-width: 700px; */
  margin: 30px;
  padding-top: 0;
  padding-bottom: 60px;
  /* max-width: 60%; */
  @media screen and (max-width: 768px) {
    margin: 0;
  }
`
export const TopLine = styled.h3`
  color: #feb101;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`
export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 400;
  white-space: nowrap; 
  color: ${({lightText}) => (lightText ? '#fff' : '#010606')};
  font-style: italic;
  /* font-family: 'Playball', cursive; */
  /* font-family: 'Dancing Script', cursive; */
  font-family: 'Ubuntu', sans-serif;
  /* font-family: 'Caveat', cursive; */
  /* font-family: 'Lobster Two', cursive; */

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`

export const Subtitle = styled.h5`
  max-width: 640px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  font-weight: 400;
  font-style: italic;
  white-space: pre-wrap; 
  color: ${({darkText}) => (darkText ? '#010606' : '#fff')};

  @media screen and (max-width: 1480px) {
    white-space: pre-wrap;
  }


`
export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`

export const ImgWrap = styled.div`
  max-height: 768px;
`

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`



export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({primary}) => (primary ? '#feb101' : '#010606')};
  white-space: nowrap;
  padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
  font-size: ${({fontBig}) => (fontBig ? '20px': '16px')};
  outline: none;
  text-decoration: none;
  border: none;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ? '#fff': '#feb101')};
  }

`
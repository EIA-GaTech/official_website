import styled from "styled-components";


export const SponsorContainer = styled.div`
   display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  width: 100%;
`

export const Header = styled.h1`
  font-size: 50px;
  font-weight: 500;
  font-family: 'Ubuntu', sans-serif;

  @media screen and (max-width: 768px){
    font-size: 35px;
  }

`

export const ImageWrapper = styled.div`
  justify-content: center;
  align-items: center;

  margin: 20px;
`
export const LevelImage = styled.img`
  max-width: 100%;
  
`
export const CurrentLogoWrapper = styled.div`
  padding-top: 60px;
  justify-content: center;
  align-items: center;
  /* display: grid;
  grid-template-columns: 1fr; */
  `

export const LogoWrapper = styled.div`
  justify-content: center;
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 768px){
    grid-template-columns: 1fr;
  }
`
export const SponsorLink = styled.a`
  padding: 20px;
`
export const CurrentSponsorLogo = styled.img`
  max-width: 450px;
  
`
export const SponsorLogo = styled.img`
  max-width: 300px;
  
`
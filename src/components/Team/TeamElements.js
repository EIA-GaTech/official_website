import styled from "styled-components";


export const TeamContainer = styled.div`
  padding: 30px;
  padding-top: 120px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  background-color: #fff9ea;

`
export const TeamWrapper = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr 1fr 1fr;

  @media screen and (max-width: 1200px){
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px){
    grid-template-columns: 1fr;
  }
`

export const MemberWrapper = styled.div`
  max-width: 290px;
  
  align-items: center;
  margin: 40px 50px;
`

export const MemberImage = styled.img`
height: 200px;
width: 200px;
margin-left: 50px;
margin-right: 50px;
margin-bottom: 10px;
`

export const NameH1 = styled.h1`
  font-size: 1.4rem;
  color: #010606;
  text-align: center;
  font-weight: 600;
`
export const PositionP = styled.h2`
  font-size: 1.1rem;
  text-align: center;
  font-weight: 500;
  white-space: nowrap; 
  padding-bottom: 12px;
`

export const TextBox = styled.div`
  width: 250px;
  align-items: center;
  justify-content: center;
  margin: 0 25px;

`
export const IntroH5 = styled.h5`
  font-size: 1rem;
  text-align: center;
  padding: 4px;
  white-space: nowrap; 
  font-weight: 500;
`
export const IntroText = styled.h6`
  font-size: 1rem;
  text-align: center;
  font-weight: 400;
  font-style: italic;
  padding: 5px 0;
  
`
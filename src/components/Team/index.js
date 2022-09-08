import React from 'react'
// import Yudai from '../../images/Yudai.png';
// import Katie from '../../images/Katie.png';
// import Lucas from '../../images/Lucas.png';
// import Helen from '../../images/Helen.png';
// import Varun from '../../images/Varun.png';
// import Taylor from '../../images/Taylor.png';
// import Tati from '../../images/Tati.png';
// import Aji from '../../images/Aji.png';
// import PJ from '../../images/PJ.png';
import { TeamContainer, TeamWrapper, MemberImage, MemberWrapper, NameH1, PositionP, TextBox, IntroText, IntroH5 } from './TeamElements';
import { Yudai, Isaac, Lucas, Varun, Taylor, Helen, Tati, PJ, Rex, Zureick } from './TeamData';

const Team = () => {
  return (
    <TeamContainer id='team'>
      <TeamWrapper>
      <MemberWrapper>
        <MemberImage src={Isaac.image} />
        <NameH1>{Isaac.name}</NameH1>
        <PositionP>{Isaac.position}</PositionP>
        <TextBox>
          <IntroH5>Hometown: {Isaac.hometown}</IntroH5>
          <IntroH5>Year: {Isaac.year}</IntroH5>
          <IntroH5>Major: {Isaac.major}</IntroH5>
          {/* <IntroText>I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder</IntroText> */}
        </TextBox>
      </MemberWrapper>
      <MemberWrapper>
      <MemberImage src={Lucas.image} />
        <NameH1>{Lucas.name}</NameH1>
        <PositionP>{Lucas.position}</PositionP>
        <TextBox>
          <IntroH5>Hometown: {Lucas.hometown}</IntroH5>
          <IntroH5>Year: {Lucas.year}</IntroH5>
          <IntroH5>Major: {Lucas.major}</IntroH5>
          {/* <IntroText>I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder</IntroText> */}
        </TextBox>
      </MemberWrapper>
      <MemberWrapper>
      <MemberImage src={PJ.image} />
        <NameH1>{PJ.name}</NameH1>
        <PositionP>{PJ.position}</PositionP>
        <TextBox>
          <IntroH5>Hometown: {PJ.hometown}</IntroH5>
          <IntroH5>Year: {PJ.year}</IntroH5>
          <IntroH5>Major: {PJ.major}</IntroH5>
          {/* <IntroText>I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder</IntroText> */}
        </TextBox>
      </MemberWrapper>
      <MemberWrapper>
      <MemberImage src={Taylor.image} />
        <NameH1>{Taylor.name}</NameH1>
        <PositionP>{Taylor.position}</PositionP>
        <TextBox>
          <IntroH5>Hometown: {Taylor.hometown}</IntroH5>
          <IntroH5>Year: {Taylor.year}</IntroH5>
          <IntroH5>Major: {Taylor.major}</IntroH5>
          {/* <IntroText>I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder</IntroText> */}
        </TextBox>
      </MemberWrapper>
      <MemberWrapper>
      <MemberImage src={Varun.image} />
        <NameH1>{Varun.name}</NameH1>
        <PositionP>{Varun.position}</PositionP>
        <TextBox>
          <IntroH5>Hometown: {Varun.hometown}</IntroH5>
          <IntroH5>Year: {Varun.year}</IntroH5>
          <IntroH5>Major: {Varun.major}</IntroH5>
          {/* <IntroText>I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder</IntroText> */}
        </TextBox>
      </MemberWrapper>
      {/* <MemberWrapper>
      <MemberImage src={Helen.image} />
        <NameH1>{Helen.name}</NameH1>
        <PositionP>{Helen.position}</PositionP>
        <TextBox>
          <IntroH5>Hometown: {Helen.hometown}</IntroH5>
          <IntroH5>Year: {Helen.year}</IntroH5>
          <IntroH5>Major: {Helen.major}</IntroH5>
        </TextBox>
      </MemberWrapper>
      <MemberWrapper>
      <MemberImage src={Rex.image} />
        <NameH1>{Rex.name}</NameH1>
        <PositionP>{Rex.position}</PositionP>
        <TextBox>
          <IntroH5>Hometown: {Rex.hometown}</IntroH5>
          <IntroH5>Year: {Rex.year}</IntroH5>
          <IntroH5>Major: {Rex.major}</IntroH5>
        </TextBox>
      </MemberWrapper> */}
      <MemberWrapper>
      <MemberImage src={Yudai.image} />
        <NameH1>{Yudai.name}</NameH1>
        <PositionP>{Yudai.position}</PositionP>
        <TextBox>
          <IntroH5>Hometown: {Yudai.hometown}</IntroH5>
          <IntroH5>Year: {Yudai.year}</IntroH5>
          <IntroH5>Major: {Yudai.major}</IntroH5>
          {/* <IntroText>I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder</IntroText> */}
        </TextBox>
      </MemberWrapper>
      <MemberWrapper>
      <MemberImage src={Zureick.image} />
        <NameH1>{Zureick.name}</NameH1>
        <PositionP>{Zureick.position}</PositionP>
        <TextBox>
          <IntroH5>Hometown: {Zureick.hometown}</IntroH5>
          {/* <IntroText>I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder</IntroText> */}
        </TextBox>
      </MemberWrapper>
      </TeamWrapper>      
    </TeamContainer>    
  )
}

export default Team;
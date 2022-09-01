import React from 'react'
import Yudai from '../../images/Yudai.png';
import Katie from '../../images/Katie.png';
import Lucas from '../../images/Lucas.png';
import Helen from '../../images/Helen.png';
import Varun from '../../images/Varun.png';
import Taylor from '../../images/Taylor.png';
import Tati from '../../images/Tati.png';
import Aji from '../../images/Aji.png';
import PJ from '../../images/PJ.png';
import { TeamContainer, TeamWrapper, MemberImage, MemberWrapper, NameH1, PositionP, TextBox, IntroText, IntroH5 } from './TeamElements';

const Team = () => {
  return (
    <TeamContainer id='team'>
      <TeamWrapper>
      <MemberWrapper>
        <MemberImage src={Katie} />
        <NameH1>Katie Popp</NameH1>
        <PositionP>Co-President</PositionP>
        <TextBox>
          <IntroH5>Hometown: Woodstock, GA</IntroH5>
          <IntroH5>Year: Master (BS/MS)</IntroH5>
          <IntroH5>Major: Civil Engineering</IntroH5>
          <IntroH5>Focus: Transportation Systems</IntroH5>
          {/* <IntroText>I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder</IntroText> */}
        </TextBox>
      </MemberWrapper>
      <MemberWrapper>
        <MemberImage src={Yudai} />
        <NameH1>Yudai Hatano</NameH1>
        <PositionP>Co-President</PositionP>
        <TextBox>
          <IntroH5>Hometown: Saitama, Japan</IntroH5>
          <IntroH5>Year: Senior</IntroH5>
          <IntroH5>Major: Civil Engineering</IntroH5>
          {/* <IntroText>I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder</IntroText> */}
        </TextBox>
      </MemberWrapper>
      <MemberWrapper>
        <MemberImage src={Lucas} />
        <NameH1>Lucas Boscovich</NameH1>
        <PositionP>Vice President</PositionP>
        <TextBox>
          <IntroH5>Hometown: Redmond, WA</IntroH5>
          <IntroH5>Year: Sophomore</IntroH5>
          <IntroH5>Major: Civil Engineering</IntroH5>
          {/* <IntroText>I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder</IntroText> */}
        </TextBox>
      </MemberWrapper>
      <MemberWrapper>
        <MemberImage src={Helen} />
        <NameH1>Helen Smirnova</NameH1>
        <PositionP>Co-Treasurer</PositionP>
        <TextBox>
          <IntroH5>Hometown: Moscow, Russia</IntroH5>
          <IntroH5>Year: Master (BS/MS)</IntroH5>
          <IntroH5>Major: Civil Engineering</IntroH5>
          <IntroH5>Focus: Structure</IntroH5>
          {/* <IntroText>I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder</IntroText> */}
        </TextBox>
      </MemberWrapper>
      <MemberWrapper>
        <MemberImage src={Varun} />
        <NameH1>Varun Vishwanath</NameH1>
        <PositionP>Co-Treasurer</PositionP>
        <TextBox>
          <IntroH5>Hometown: Johns Creek, GA</IntroH5>
          <IntroH5>Year: Junior</IntroH5>
          <IntroH5>Major: Civil Engineering</IntroH5>
          {/* <IntroText>I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder</IntroText> */}
        </TextBox>
      </MemberWrapper>
      <MemberWrapper>
        <MemberImage src={Taylor} />
        <NameH1>Taylor Sherwood</NameH1>
        <PositionP>Fundraising Chair</PositionP>
        <TextBox>
          <IntroH5>Hometown: Milledgevile, GA</IntroH5>
          <IntroH5>Year: Freshman</IntroH5>
          <IntroH5>Major: Civil Engineering</IntroH5>
          {/* <IntroText>I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder</IntroText> */}
        </TextBox>
      </MemberWrapper>
      <MemberWrapper>
        <MemberImage src={Tati} />
        <NameH1>Tatia Kobachishvili</NameH1>
        <PositionP>Media Chair</PositionP>
        <TextBox>
          <IntroH5>Hometown: Johns Creek, GA</IntroH5>
          <IntroH5>Year: Senior</IntroH5>
          <IntroH5>Major: Environmental Engineering</IntroH5>
          {/* <IntroText>I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder</IntroText> */}
        </TextBox>
      </MemberWrapper>
      <MemberWrapper>
        <MemberImage src={Aji} />
        <NameH1>Aji Fatou Sey</NameH1>
        <PositionP>Internal Communication Chair</PositionP>
        <TextBox>
          <IntroH5>Hometown: Gambia</IntroH5>
          <IntroH5>Year: Master</IntroH5>
          <IntroH5>Major: Civil Engineering</IntroH5>
          {/* <IntroText>I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder</IntroText> */}
        </TextBox>
      </MemberWrapper>
      <MemberWrapper>
        <MemberImage src={PJ} />
        <NameH1>Preksha Jain</NameH1>
        <PositionP>External Communication Chair</PositionP>
        <TextBox>
          <IntroH5>Hometown: Tampa, FL</IntroH5>
          <IntroH5>Year: Freshman</IntroH5>
          <IntroH5>Major: Civil Engineering</IntroH5>
          {/* <IntroText>I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder I'm a placeholder</IntroText> */}
        </TextBox>
      </MemberWrapper>
      </TeamWrapper>      
    </TeamContainer>    
  )
}

export default Team;
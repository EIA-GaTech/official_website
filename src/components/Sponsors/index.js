import React from 'react'
import { SponsorContainer, LogoWrapper, SponsorLogo, Header, SponsorLink, HeaderContainer, ImageWrapper, LevelImage, CurrentLogoWrapper, CurrentSponsorLogo} from './SponsorElements'
import GT from '../../images/gt_foundation.png';
import SignalEnergy from '../../images/signal_energy.png';
import PWS from '../../images/PES.png';
import Geosyntec from '../../images/Geosyntec.png';
import EnA from '../../images/E&A.png';
import KimleyHorn from '../../images/KimleyHorn.png';
import SponsorLevel from '../../images/Sponsorship levels.png';
import Jacobs from '../../images/Jacobs.png';



const Sponsors = () => {
  return (
    <SponsorContainer id='sponsorships'>
      <HeaderContainer>
        <Header>Sponsorship Levels</Header>
      </HeaderContainer>
      <ImageWrapper>
        <LevelImage src={SponsorLevel} />
      </ImageWrapper>
      <HeaderContainer>
        <Header>Current Sponsors</Header>
      </HeaderContainer>
      <CurrentLogoWrapper>
        <SponsorLink href='http://www.jacobs.com/' target='_blank'>
          <CurrentSponsorLogo src={Jacobs} />
        </ SponsorLink>
        </CurrentLogoWrapper>
        <CurrentLogoWrapper>
        <SponsorLink href='https://www.eberly.net/' target='_blank'>
          <CurrentSponsorLogo src={EnA} />
        </ SponsorLink>
        </CurrentLogoWrapper>
      <HeaderContainer>
        <Header>Our 2019-2020 Sponsors</Header>
      </HeaderContainer>
      <LogoWrapper>
        <SponsorLink href='https://www.gtsf.gatech.edu/s/1481/alumni/17/home.aspx?gid=42&pgid=61' target='_blank'>
          <SponsorLogo src={GT} />
        </ SponsorLink>
        <SponsorLink href='https://www.signalenergy.com/' target='_blank'>
          <SponsorLogo src={SignalEnergy} />
        </ SponsorLink>
        <SponsorLink href='https://pesengineers.com/' target='_blank'>
          <SponsorLogo src={PWS} />
        </ SponsorLink>
        <SponsorLink href='https://www.geosyntec.com/' target='_blank'>
          <SponsorLogo src={Geosyntec} />
        </ SponsorLink>
        <SponsorLink href='https://www.eberly.net/' target='_blank'>
          <SponsorLogo src={EnA} />
        </ SponsorLink>
        <SponsorLink href='https://www.kimley-horn.com/' target='_blank'>
          <SponsorLogo src={KimleyHorn} />
        </ SponsorLink>
      </LogoWrapper>
    </SponsorContainer>
  )
}

export default Sponsors

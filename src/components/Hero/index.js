import React , {useState} from 'react';
import JP from '../../videos/JatunPampa.mov';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements';
import { Button } from '../ButtonElement';

const Hero = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  }

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={JP} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>Jatun Pampa Suspended Bridge </HeroH1>
        <HeroH1>Bolivia, 2022 </HeroH1>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero

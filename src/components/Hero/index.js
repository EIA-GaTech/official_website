import React , {useState} from 'react';
import Video from '../../videos/keen_hp.mp4';
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
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>Engineers in Action </HeroH1>
        <HeroH1>@Georgia Tech </HeroH1>
        {/* <HeroP>
          Check out our new project!
        </HeroP> */}
        {/* <HeroBtnWrapper>
          <Button to='/donate' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>Help the Communities{hover ? <ArrowForward /> : <ArrowRight />}</Button>
        </HeroBtnWrapper> */}
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero

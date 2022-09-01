import React from "react";
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
import {Background, VideoContainer} from './YouTubeEmbed';


const YouTubeEmbed = ({YouTubeId}) => {
  // const [play, setPlay] = useState(false);
  return (
    <Background>
    <VideoContainer>
    <LiteYouTubeEmbed 
      id="Am89M78VtKw"
      title="Keen Bridge, WV (2021)"
  />
  </VideoContainer>
  </Background>
  )
}

export default YouTubeEmbed;
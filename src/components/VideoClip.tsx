import React, { createRef, useContext, useEffect } from 'react';
import VideoContext from './VideoContext';

const videoStyles = {
  marginTop: '100px',
  width: '80vw',
};
const VideoClip = () => {
  const { status } = useContext(VideoContext);

  const vidRef = createRef<HTMLVideoElement>();

  useEffect(() => {
    console.log(vidRef.current.duration);
    if (status === 'playing') {
      vidRef.current.play();
    } else if (status === 'paused') {
      vidRef.current.pause();
    }
  }, [status]);

  return (
    <video style={videoStyles} controls ref={vidRef}>
      <source
        src="https://react-context.s3.eu-central-1.amazonaws.com/Pouring+Of+Milk.mp4"
        type="video/mp4"
      />
    </video>
  );
};

export default VideoClip;

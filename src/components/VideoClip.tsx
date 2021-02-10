import React, { createRef, useContext, useEffect, useState } from 'react';
import VideoContext from '../contexts/VideoContext';

const videoStyles = {
  marginTop: '100px',
  width: '80vw',
};
const VideoClip = () => {
  const { status, updateStatus } = useContext(VideoContext);
  const [finish, setFinish] = useState(false);

  const vidRef = createRef<HTMLVideoElement>();
  function handleFinish() {
    updateStatus('paused');
    setFinish(true);
  }
  function handleOnPlaying() {
    updateStatus('playing');
    setFinish(false);
  }
  useEffect(() => {
    console.log(vidRef.current.duration);
    if (status === 'playing') {
      vidRef.current.play();
    } else if (status === 'paused') {
      vidRef.current.pause();
    }
  }, [status]);

  return (
    <div>
      <video
        style={videoStyles}
        ref={vidRef}
        controls
        onPlaying={e => handleOnPlaying()}
        onEnded={e => handleFinish()}
      >
        <source
          src="https://react-context.s3.eu-central-1.amazonaws.com/Pouring+Of+Milk.mp4"
          type="video/mp4"
        />
      </video>
      {finish && <div>Vídeo finalizado</div>}
    </div>
  );
};

export default VideoClip;

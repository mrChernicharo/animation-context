import React, { useContext } from 'react';
import VideoContext from './VideoContext';

const styles = {
  width: '100px',
  height: '5vh',
  backgroundColor: 'black',
  color: 'white',
  fontSize: '20px',
  marginTop: '20px',
};

function PlayPauseButton() {
  const { status, togglePlayPause } = useContext(VideoContext);
  return (
    <button style={styles} onClick={togglePlayPause}>
      {status === 'playing' ? 'PAUSE' : 'PLAY'}
    </button>
  );
}

export default PlayPauseButton;

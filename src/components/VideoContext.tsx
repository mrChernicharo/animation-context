import { createContext } from 'react';

const VideoContext = createContext({
  status: 'paused',
  color: 'red',
  togglePlayPause: () => {},
  toggleColor: color => {},
});

export default VideoContext;

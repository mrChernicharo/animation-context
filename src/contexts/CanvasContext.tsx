import { createContext } from 'react';

const CanvasCtx = createContext({
  speed: 60,
  size: 'medium',
  color: 'blue',
  colorOptions: [],
  items: [{ shape: 'circle' }, { shape: 'square' }, { shape: 'triangle' }],

  handleSpeedChange: speed => {},

  handleSizeChange: size => {},

  handleColorChange: color => {},

  handleItems: item => {},
});

export default CanvasCtx;

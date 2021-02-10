import ColorButton from '../components/ColorButton';
import Header from '../components/Header';
import CanvasBody from '../components/CanvasBody';
import CanvasCtx from '../contexts/CanvasContext';
import { useState } from 'react';

export default function Canvas() {
  const [color, setColor] = useState('blue');
  const [speed, setSpeed] = useState(60);
  const [size, setSize] = useState('small');
  const [items, setItem] = useState([
    { shape: 'circle' },
    { shape: 'square' },
    { shape: 'triangle' },
  ]);
  const colorOptions = ['blue', 'royalblue', 'green', 'gold', 'orange', 'redorange', 'red'];

  const handleItems = items => {
    items.map((item, i) => (item.shape === items[i].shape ? setItem(items[i]) : setItem(item)));
  };
  const handleColorChange = (color: string) => setColor(color);
  const handleSizeChange = (size: string) => setSize(size);
  const handleSpeedChange = (speed: number) => setSpeed(speed);

  return (
    <div>
      <CanvasCtx.Provider
        value={{
          color,
          size,
          speed,
          items,
          colorOptions,
          handleItems,
          handleColorChange,
          handleSizeChange,
          handleSpeedChange,
        }}
      >
        <div>
          <ColorButton />
          <CanvasBody />
        </div>
      </CanvasCtx.Provider>
    </div>
  );
}

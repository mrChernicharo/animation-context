import { useContext } from 'react';
import CanvasCtx from '../contexts/CanvasContext';

function CanvasBody() {
  const {
    speed,
    handleSpeedChange,
    colorOptions,
    color,
    handleColorChange,
    size,
    items,
  } = useContext(CanvasCtx);
  return (
    <div>
      <div style={{ color: color }}>Hello</div>
      <div>Speed: {speed}</div>
      <div>{color}</div>
      <div>{size}</div>
      <ul>
        {items.map(item => (
          <li>{item.shape}</li>
        ))}
      </ul>
      <button onClick={() => handleSpeedChange(speed + 1)}>Accelerate</button>
      <button onClick={() => handleSpeedChange(speed - 1)}>Deacelerate</button>

      {colorOptions.map(c => (
        <button onClick={() => handleColorChange(c)}>{c}</button>
      ))}
    </div>
  );
}
export default CanvasBody;

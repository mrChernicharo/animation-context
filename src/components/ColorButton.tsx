import { useContext, useEffect, useState } from 'react';
import VideoContext from './VideoContext';

const styles = {
  width: '100px',
  height: '5vh',
  backgroundColor: 'black',
  color: 'white',
  fontSize: '20px',
  marginTop: '20px',
};

const colors = ['blue', 'green', 'orange', 'purple'];

function ColorButton() {
  const { color, toggleColor } = useContext(VideoContext);
  const [i, setI] = useState(0);

  useEffect(() => {
    i === color.length ? setI(1) : setI(i + 1);
  }, [color]);

  return (
    <button style={styles} onClick={() => toggleColor(i === colors.length ? colors[0] : colors[i])}>
      {color} {i}
    </button>
  );
}

export default ColorButton;

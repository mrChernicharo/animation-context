import { useContext, useState } from 'react';
import { AppContext } from '../components/AppContext';

export default function Controls() {
  const appState = useContext(AppContext);

  // const [innerColor, setInnerColor] = useState(color);

  function handleClick(val) {
    // console.log(val);
    appState.setColor(val);
    // appState.setColor('blue');
    // setColor(val);
  }

  return (
    <AppContext.Provider value={appState}>
      {/* {appState => ( */}
      <div style={{ border: `1px solid ${appState.color}`, color: appState.color }}>
        <button onClick={() => handleClick('blue')}>{appState.interval}</button>
      </div>
      {/* )} */}
    </AppContext.Provider>
  );
}

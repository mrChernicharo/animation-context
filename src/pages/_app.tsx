import React from 'react';
import GlobalStyle from '../styles/GlobalStyle';

const appState = {
  playing: false,
  interval: 60,
  color: 'red',
};

const AppContext = React.createContext(appState);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <AppContext.Provider value={appState}>
        <Component {...pageProps} />
      </AppContext.Provider>
    </>
  );
}

export default MyApp;

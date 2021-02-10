import React from 'react';
import GlobalStyle from '../styles/GlobalStyle';
import { AppContext, initialState as appState } from '../components/AppContext';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <AppContext.Consumer>{appState => <Component {...pageProps} />}</AppContext.Consumer>
    </>
  );
}

export default MyApp;

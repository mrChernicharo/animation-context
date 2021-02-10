import React from 'react';

export const initialState = {
  playing: false,
  interval: 60,
  color: 'red',
};

export const AppContext = React.createContext(initialState);

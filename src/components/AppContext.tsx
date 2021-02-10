import React from 'react';

export const initialState = {
  playing: false,
  interval: 60,
  color: 'red',
  setColor: function (c: string) {
    console.log(this.color);
    console.log(c);
    this.color = c;
    console.log(this.color);
  },
  setInterval: i => i,
  changePlaying: p => !p,
};

export const AppContext = React.createContext(initialState);

import Head from 'next/head';
import Header from '../components/Header';
import VideoContext from '../components/VideoContext';
import VideoClip from '../components/VideoClip';
import React, { useState } from 'react';
import Controls from '../components/Controls';

export default function Home() {
  const [status, setStatus] = useState('paused');
  const [color, setColor] = useState('red');
  const togglePlayPause = () => setStatus(status === 'playing' ? 'paused' : 'playing');
  const toggleColor = (color: string) => setColor(color);
  return (
    <div>
      <Head>
        <title>Next Context</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <VideoContext.Provider value={{ status, color, togglePlayPause, toggleColor }}>
        <header>
          <Header>
            <h1>Header</h1>
          </Header>
        </header>

        <main>
          <VideoClip />
          <Controls />
        </main>
      </VideoContext.Provider>

      <footer></footer>
    </div>
  );
}

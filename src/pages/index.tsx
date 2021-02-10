import Head from 'next/head';
import Header from '../components/Header';
import VideoContext from '../components/VideoContext';
import VideoClip from '../components/VideoClip';
import React, { useState } from 'react';
import Controls from '../components/Controls';

export default function Home() {
  const [status, setStatus] = useState('paused');
  const togglePlayPause = () => setStatus(status === 'playing' ? 'paused' : 'playing');

  return (
    <div>
      <Head>
        <title>Next Beat Maker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <VideoContext.Provider value={{ status, togglePlayPause }}>
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

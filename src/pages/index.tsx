import Head from 'next/head';
import Header from '../components/Header';
import VideoContext from '../contexts/VideoContext';
import VideoClip from '../components/VideoClip';
import React, { useState } from 'react';
import Controls from '../components/Controls';
import Navigation from '../components/Navigation';
import { useRouter } from 'next/router';
import Canvas from './canvas';

export default function Home() {
  const { route } = useRouter();
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

      <VideoContext.Provider value={{ status, color, toggleColor, togglePlayPause }}>
        <header>
          <Header>
            <h1>Header</h1>
          </Header>
          <Navigation />
        </header>

        <main>
          {route === '/' ? (
            <>
              <VideoClip />
              <Controls />
            </>
          ) : (
            <Canvas />
          )}
        </main>
      </VideoContext.Provider>

      <footer></footer>
    </div>
  );
}

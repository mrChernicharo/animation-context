import Head from 'next/head';
import Header from '../components/Header';
import Canvas from '../components/Canvas';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next Beat Maker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Header />
      </header>

      <main>
        <Canvas />
      </main>

      <footer></footer>
    </div>
  );
}

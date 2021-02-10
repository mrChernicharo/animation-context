import Head from 'next/head';
import Header from '../components/Header';
import Canvas from '../components/Canvas';
import { AppContext } from '../components/AppContext';

export default function Home() {
  return (
    <AppContext.Consumer>
      {appState => (
        <div>
          <Head>
            <title>Next Beat Maker</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <header>
            <Header>
              <h1>Header</h1>
            </Header>
          </header>

          <main>
            <Canvas />
          </main>

          <footer></footer>
        </div>
      )}
    </AppContext.Consumer>
  );
}

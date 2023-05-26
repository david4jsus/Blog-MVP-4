import Banner from '@/components/banner';
import Player from '@/components/player';
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Banner />
      <Component {...pageProps} />
      <Player />
    </>
  );
}

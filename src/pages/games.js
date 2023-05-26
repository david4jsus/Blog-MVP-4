import Head from 'next/head'
import Link from 'next/link';
import capi from '@/api/capi';
import styles from '@/styles/page.module.css'

export default function Games({ gameList }) {

   // Make sure props aren't bad
   if (!gameList) gameList = [];

   // Create list of games for the component to use
   const games = gameList.map(game => {
      return (
         <li key={ game.id }>
            <Link href={ "/games/" + game.slug } dangerouslySetInnerHTML={{ __html: game.title.rendered }} />
         </li>
      );
   });

   return (
      <>
         <Head>
            <title>Games | Blog MVP 4</title>
            <meta name="description" content="Cool game information" key="desc" />
            <meta property="og:title" content="Games | Blog MVP 4" />
            <meta property="og:description" content="Cool game information" />
            <meta property="og:image" content="/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <main className={ styles.main }>
            <br />
            <h1>Games</h1>
            <br />
            <div>
               <p>Browse game information right here!</p>
            </div>
            <div>
               <ul className={ styles.ul }>
                  { games }
               </ul>
            </div>
         </main>
      </>
   );
}

export async function getStaticProps() {

   // Get the list of available games
   const gameList = await capi.GetListOfGames();

   return {
      props: {
         gameList
      },
      revalidate: 1000
   };
}
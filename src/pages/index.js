import Head from 'next/head'
import styles from '@/styles/page.module.css'

export default function Home() {
   return (
      <>
         <Head>
            <title>Blog MVP 4</title>
            <meta name="description" content="A blog site prototype (attempt 4)" key="desc" />
            <meta property="og:title" content="Blog MVP 4" />
            <meta property="og:description" content="A blog site prototype (attempt 4)" />
            <meta property="og:image" content="/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <main className={ styles.main }>
            <br />
            <h1>Blog MVP 4</h1>
            <br />
            <div>
               <p>This is a work-in-progress prototype. Hopefully one day I will finish this...</p>
            </div>
         </main>
      </>
   );
}

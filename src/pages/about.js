import Head from 'next/head'
import styles from '@/styles/page.module.css'

export default function About() {
   return (
      <>
         <Head>
            <title>About | Blog MVP 4</title>
            <meta name="description" content="About this blog site prototype" key="desc" />
            <meta property="og:title" content="About | Blog MVP 4" />
            <meta property="og:description" content="About this blog site prototype" />
            <meta property="og:image" content="/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <main className={ styles.main }>
            <br />
            <h1>About Blog MVP 4</h1>
            <br />
            <div>
               <p>The road to the end of prototypes and learning projects is long, but not without an end. This prototype might begin and conclude in the same month, marking the final step towards making this blog a reality.</p>
            </div>
         </main>
      </>
   );
}

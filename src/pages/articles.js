import Head from 'next/head'
import Link from 'next/link';
import capi from '@/api/capi';
import styles from '@/styles/page.module.css'

export default function Articles({ articleList }) {

   // Make sure props aren't bad
   if (!articleList) articleList = [];

   // Create list of articles for the component to use
   const articles = articleList.map(article => {
      return (
         <li key={ article.id }>
            <Link href={ "/articles/" + article.slug } dangerouslySetInnerHTML={{ __html: article.title.rendered }} />
         </li>
      );
   });

   return (
      <>
         <Head>
            <title>Articles | Blog MVP 4</title>
            <meta name="description" content="Fun articles" key="desc" />
            <meta property="og:title" content="Articles | Blog MVP 4" />
            <meta property="og:description" content="Fun articles" />
            <meta property="og:image" content="/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <main className={ styles.main }>
            <br />
            <h1>Articles</h1>
            <br />
            <div>
               <p>Browse articles right here!</p>
            </div>
            <div>
               <ul className={ styles.ul }>
                  { articles }
               </ul>
            </div>
         </main>
      </>
   );
}

export async function getStaticProps() {

   // Get the list of available articles
   const articleList = await capi.GetListOfArticles();

   return {
      props: {
         articleList
      },
      revalidate: 1000
   };
}
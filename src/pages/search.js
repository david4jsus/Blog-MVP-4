import Head from 'next/head'
import styles from '@/styles/page.module.css'
import capi from '@/api/capi';
import ArticleCard from '@/components/article_card';

export default function Search({ searchString, results }) {

   /**
    * Map the search results to a list of article cards
    */
   const articles = results.map(article => {
      return (
         <div key={article.id}>
            <br />
            <ArticleCard article={article} />
         </div>
      );
   });

   return (
      <>
         <Head>
            <title>Search | Blog MVP 4</title>
            <meta name="description" content="Searching through the site's articles" key="desc" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <main className={ styles.main }>
            <br />
            <h3>{ `List of articles containing the text "${decodeURI(searchString)}":` }</h3>
            <br />
            { (articles && articles.length) ? articles : <div>No results found.</div> }
         </main>
      </>
   );
}

export async function getServerSideProps(context) {

   /**
    * Search string captured from the URL
    */
   const searchString = context.query.string ? context.query.string : "";

   /**
    * Array of search results, as objects
    */
   let results = [];

   // Fetch search results if the search string is not empty
   if (searchString != "") {
      results = await capi.GetSearchResults(searchString);
   }

   return {
      props: {
         searchString,
         results
      }
   }
}
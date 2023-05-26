import Head from 'next/head'
import styles from '@/styles/page.module.css'
import capi from '@/api/capi';
import ArticleCard from '@/components/article_card';

export default function Game({ game, articles }) {

   // Avoid warning about having multiple elements in the title tag
   let title = game.title.rendered + " | Blog MVP 4";

   // Create list of articles related to the game
   const relatedArticles = articles.map(article => {
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
            <title>{ title }</title>
            <meta name="description" content={ capi.GetInnerText(game.content.rendered) } key="desc" />
            <meta property="og:title" content={ title } />
            <meta property="og:description" content={ capi.GetInnerText(game.content.rendered) } />
            <meta property="og:image" content={ game.game_featured_image[0] } />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <main className={ styles.main }>
            <article>
               <br />
               <h1 dangerouslySetInnerHTML={{ __html: game.title.rendered }} />
               <br />
               <br />
               <div dangerouslySetInnerHTML={{ __html: game.content.rendered }} />
            </article>
            <br />
            <h2>Related articles:</h2>
            { relatedArticles }
         </main>
      </>
   );
}

export async function getStaticProps({ params }) {
   
   // Get the requested article's data
   const game = await capi.GetGameBySlug(params.gameSlug);

   // Get the related game's data
   const articles = await capi.GetArticlesByTax(game["games-tax"][0]);

   return {
      props: {
         game,
         articles
      }
   };
}

export async function getStaticPaths() {

   // Get the possible paths
   const games = await capi.GetListOfGames();
   const paths = games.map(game => {
      return {
         params: {
            gameSlug: game.slug
         }
      }
   });

   return {
      paths,
      fallback: false
   }
}
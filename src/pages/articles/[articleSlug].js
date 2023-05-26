import Head from 'next/head'
import styles from '@/styles/page.module.css'
import articleStyles from '@/styles/article.module.css'
import GameCard from '@/components/game_card';
import capi from '@/api/capi';
import { CommentCount, DiscussionEmbed } from 'disqus-react';

export default function Article({ article, game }) {

   // Avoid warning about having multiple elements in the title tag
   let title = article.title.rendered + " | Blog MVP 4";

   return (
      <>
         <Head>
            <title>{ title }</title>
            <meta name="description" content={ capi.GetInnerText(article.excerpt.rendered) } key="desc" />
            <meta property="og:title" content={ title } />
            <meta property="og:description" content={ capi.GetInnerText(article.excerpt.rendered) } />
            <meta property="og:image" content={ article.post_featured_image[0] } />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <main className={ styles.main }>
            <br />
            <div className={ articleStyles["article-layout"] }>
               <article>
                  <h1 dangerouslySetInnerHTML={{ __html: article.title.rendered }} />
                  <span className={ articleStyles["article-meta"] }>
                     Published&nbsp;
                     { new Date(article.date_gmt).toDateString() }
                     &nbsp;|&nbsp;
                     <CommentCount
                        shortname="blog-mvp-4"
                        config={
                           {
                              url: article.link,
                              identifier: article.id.toString(),
                              title: article.title.rendered
                           }
                        }
                     >0 Comments</CommentCount>
                  </span>
                  <br />
                  <br />
                  <div className={ articleStyles["article-layout-content"] } dangerouslySetInnerHTML={{ __html: article.content.rendered }} />
               </article>
               <aside>
                  <GameCard game={ game } />
               </aside>
            </div>
            <br />
            <br />
            <div className={ articleStyles.comments }>
               <DiscussionEmbed
                  shortname="blog-mvp-4"
                  config={
                     {
                        url: article.link,
                        identifier: article.id.toString(),
                        title: article.title.rendered,
                        language: 'en'
                     }
                  }
               />
            </div>
         </main>
      </>
   );
}

export async function getStaticProps({ params }) {
   
   // Get the requested article's data
   const article = await capi.GetArticleBySlug(params.articleSlug);

   // Get the related game's data
   const game = await capi.GetGameByTax(article["games-tax"][0]);

   return {
      props: {
         article,
         game
      }
   };
}

export async function getStaticPaths() {

   // Get the possible paths
   const articles = await capi.GetListOfArticles();
   const paths = articles.map(article => {
      return {
         params: {
            articleSlug: article.slug
         }
      }
   });

   return {
      paths,
      fallback: false
   }
}
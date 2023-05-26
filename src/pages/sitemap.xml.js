import capi from "@/api/capi";

const rootURL = "https://localhost:3000";

function generateSiteMap(articles, games) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${rootURL}</loc>
     </url>
     <url>
       <loc>${rootURL}/about</loc>
     </url>
     <url>
       <loc>${rootURL}/articles</loc>
     </url>
     <url>
       <loc>${rootURL}/games</loc>
     </url>
     <url>
       <loc>${rootURL}/search</loc>
     </url>
     ${articles.map(({ slug }) => {
         return `
       <url>
           <loc>${`${rootURL}/articles/${slug}`}</loc>
       </url>
     `;
       })
       .join('')}
     ${games.map(({ slug }) => {
         return `
       <url>
           <loc>${`${rootURL}/articles/${slug}`}</loc>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {

  // Get URLs for articles
  const articles = await capi.GetListOfArticles();

  // Get URLs for games
  const games = await capi.GetListOfGames();

  // Generate the XML sitemap with the article and game data
  const sitemap = generateSiteMap(articles, games);

  // Send the XML to the browser
  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
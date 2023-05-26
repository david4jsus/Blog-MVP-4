/**
 * Custom API: Interface bewteen the Next.js app and WordPress as well as any other utilities
 */

import wordpress from "./wordpress";

/**
 * Cached album data (keep album data in this object to be used whenever the data needs to be loading again to avoid refetching the same data), the key of each entry is the taxonomy related to each album and the value is the album data
 */
var CachedAlbumData = new Map();
var albumsAreCached = false;

/**
 * Cached track data (keep track data in this object to be used whenever the data needs to be loading again to avoid refetching the same data), this object contains key-value pairs where the key is an album taxonomy ID and the value is a Map() object where the key is the ID of the track and its value is the track object
 */
var CachedTrackData = {};
var tracksAreCached = new Map();

/**
 * Get the text in an HTML node
 */
const GetInnerText = html => {
   // let domParser = new DOMParser();
   // let parsedDom = domParser.parseFromString(html, "text/html");
   // return parsedDom.body.innerText;

   return html.substring(html.indexOf("<p>") + 3, html.lastIndexOf("</p>"));
}

/**
 * Get a list of available articles from WordPress
 */
const GetListOfArticles = async () => {
   try {
      const response = await fetch(wordpress.queries.ARTICLE_LIST);
      return await response.json();
   } catch(error) {
      console.error("Attempt to fetch list of articles resulted in error: " + error);
   }
}

/**
 * Get data for the article with given ID
 */
const GetArticleById = async articleId => {
   try {
      const response = await fetch(wordpress.queries.ARTICLE_BY_ID(articleId));
      return await response.json();
   } catch(error) {
      console.error("Attempt to fetch article with ID '" + articleId + "' resulted in error: " + error);
   }
}

/**
 * Get data for an article with given slug
 */
const GetArticleBySlug = async articleSlug => {
   try {
      const response = await fetch(wordpress.queries.ARTICLES_BY_SLUG(articleSlug));
      const articles = await response.json();
      return articles[0];
   } catch(error) {
      console.error("Attempt to fetch article with slug '" + articleSlug + "' resulted in error: " + error);
   }
}

/**
 * Get data for articles with given game taxonomy ID
 */
const GetArticlesByTax = async gameTax => {
   try {
      const response = await fetch(wordpress.queries.ARTICLES_BY_TAX(gameTax));
      return await response.json();
   } catch(error) {
      console.error ("Attempt to fetch list of articles with game taxonomy ID '" + gameTax + "' resulted in error: " + error);
   }
}

/**
 * Get a list of available games from WordPress
 */
const GetListOfGames = async () => {
   try {
      const response = await fetch(wordpress.queries.GAME_LIST);
      return await response.json();
   } catch(error) {
      console.error("Attempt to fetch list of games resulted in error: " + error);
   }
}

/**
 * Get data for a game with given slug
 */
const GetGameBySlug = async gameSlug => {
   try {
      const response = await fetch(wordpress.queries.GAMES_BY_SLUG(gameSlug));
      const games = await response.json();
      return games[0];
   } catch(error) {
      console.error("Attempt to fetch game with slug '" + gameSlug + "' resulted in error: " + error);
   }
}

/**
 * Get data for a game with given game taxonomy ID
 */
const GetGameByTax = async gameTax => {
   try {
      const response = await fetch(wordpress.queries.GAMES_BY_TAX(gameTax));
      const games = await response.json();
      return games[0];
   } catch(error) {
      console.error("Attempt to fetch game with taxonomy ID '" + gameTax + "' resulted in error: " + error);
   }
}

/**
 * Get a list of available albums from WordPress
 */
const GetListOfAlbums = async () => {

   // If data is cached, get cached data
   if (albumsAreCached) {
      let albums = [];
      CachedAlbumData.forEach(album => albums.push(album));
      return albums;
   }

   // Otherwise, fetch new data and cache it
   try {

      // Fetch data
      const response = await fetch(wordpress.queries.ALBUM_LIST);
      const albums = await response.json();

      // Cache data
      albums.forEach(album => {
         CachedAlbumData.set(album["albums-tax"][0], album);
      });
      albumsAreCached = true;

      // Return data
      return albums;
   } catch(error) {
      console.error("Attempt to fetch list of albums resulted in error: " + error);
   }
}

/**
 * Get data for an album with given album taxonomy ID
 */
const GetAlbumByTax = async albumTax => {

   // If data is cached, get cached data
   if (CachedAlbumData.has(albumTax)) {
      return CachedAlbumData.get(albumTax);
   }

   // Otherwise, fetch new data and cache it
   try {

      // Fetch data
      const response = await fetch(wordpress.queries.ALBUMS_BY_TAX(albumTax));
      const albums = await response.json();
      const album = albums[0];

      // Cache data
      CachedAlbumData.set(albumTax, album);

      // Return data
      return album;
   } catch(error) {
      console.error("Attempt to fetch album with taxonomy ID '" + albumTax + "' resulted in error: " + error);
   }
}

/**
 * Get data for a track with given ID
 */
const GetTrackById = async trackId => {

   // If data is cached, get cached data
   let track = null;
   for (const albumTax in CachedTrackData) {
      if (CachedTrackData[albumTax].has(trackId)) {
         track = CachedTrackData[albumTax].get(trackId);
      }
   }
   if (track) return track;

   // Otherwise, fetch new data and cache it
   try {
      
      // Fetch data
      const response = await fetch(wordpress.queries.TRACK_BY_ID(trackId));
      const trackData = await response.json();
      const albumTax = trackData["albums-tax"];

      // Cache data
      if (!CachedTrackData[albumTax]) {
         CachedTrackData[albumTax] = new Map();
      }
      CachedTrackData[albumTax].set(trackData.id, trackData);

      // Return data
      return trackData;
   } catch(error) {
      console.error("Attempt to fetch track with ID '" + trackId + "' resulted in error: " + error);
   }
}

/**
 * Get data for tracks with given album taxonomy ID
 */
const GetTracksByTax = async albumTax => {

   // If data is cached, get cached data
   if (tracksAreCached.has(albumTax)) {
      let tracks = [];
      CachedTrackData[albumTax].forEach(track => tracks.push(track));
      return tracks;
   }

   // Otherwise, fetch new data and cache it
   try {

      // Fetch data
      const response = await fetch(wordpress.queries.TRACKS_BY_TAX(albumTax));
      const trackData = await response.json();

      // Cache data
      if (!CachedTrackData[albumTax]) {
         CachedTrackData[albumTax] = new Map();
      }
      trackData.forEach(track => CachedTrackData[albumTax].set(track.id, track));
      tracksAreCached.set(albumTax, true);

      // Return data
      return trackData;
   } catch(error) {
      console.error("Attempt to fetch tracks with album taxonomy ID '" + albumTax + "' resulted in error: " + error);
   }
}

/**
 * Get the data of the first track found in the database as an array with one object
 */
const GetFirstTrack = async () => {
   try {
      const response = await fetch(wordpress.queries.TRACKS_SINGLE);
      return await response.json();
   } catch(error) {
      console.error("Attempt to fetch first track in the database resulted in error: " + error);
   }
}

/**
 * Get search results for some string that may appear as part of the content of an article in the database
 */
const GetSearchResults = async (searchString, pageNumber = 1, resultsPerPage = 10) => {
   try {

      // Use WordPress' search query
      const response = await fetch(wordpress.queries.SEARCH(searchString, pageNumber, resultsPerPage));
      const articleIds = await response.json();

      // Get a list of articles from the results
      let articles = [];
      articleIds.forEach(async article => {
      });
      
      for (let i = 0; i < articleIds.length; i++) {
         const articleObj = await GetArticleById(articleIds[i].id);
         articles.push(articleObj);
      }

      // Return an awway of articles
      return articles;
   } catch(error) {
      console.error("Attempt to fetch search results for string '" + searchString + "', page " + pageNumber + ", and with " + resultsPerPage + " results for page, resulted in error: " + error);
   }
}

/**
 * Bundle of all of the custom API's functions for use in other files in the Next.js app
 */
const capi = {
   // Utils
   GetInnerText,
   // Articles
   GetListOfArticles, GetArticleById, GetArticleBySlug, GetArticlesByTax,
   // Games
   GetListOfGames, GetGameBySlug, GetGameByTax,
   // Albums
   GetListOfAlbums, GetAlbumByTax,
   // Tracks
   GetTrackById, GetTracksByTax, GetFirstTrack,
   // Search
   GetSearchResults
};
export default capi;
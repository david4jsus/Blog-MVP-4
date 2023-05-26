/**
 * Data that relates to the connection to WordPress
 */

/**
 * Root URL for all queries
 */
const queryRoot = 'https://test-thingy.000webhostapp.com/wp-json/wp/v2/';

/**
 * Query strings to be used when interacting with WordPress
 */
const queries = {
   ARTICLE_LIST: queryRoot + 'posts?_fields=category,content,date_gmt,excerpt,post_featured_image,featured_media,games-tax,id,link,modified_gmt,slug,tags,title',
   ARTICLE_BY_ID: id => queryRoot + `posts/${id}?_fields=category,content,date_gmt,excerpt,post_featured_image,games-tax,featured_media,id,modified_gmt,slug,tags,title`,
   ARTICLES_BY_SLUG: slug => queryRoot + `posts?slug=${slug}&_fields=category,content,date_gmt,excerpt,post_featured_image,featured_media,games-tax,id,link,modified_gmt,slug,tags,title`,
   ARTICLES_BY_TAX: tax => queryRoot + `posts?games-tax=${tax}&_fields=category,date_gmt,excerpt,post_featured_image,games-tax,id,modified_gmt,slug,tags,title`,
   GAME_LIST: queryRoot + 'games?_fields=categories,content,featured_media,game_developer,game_featured_image,game_publisher,game_release_date,games-tax,id,slug,tags,title',
   GAMES_BY_SLUG: slug => queryRoot + `games?slug=${slug}&_fields=categories,content,featured_media,game_developer,game_featured_image,game_publisher,game_release_date,games-tax,id,slug,tags,title`,
   GAMES_BY_TAX: tax => queryRoot + `games?games-tax=${tax}&_fields=content,game_developer,featured_media,game_featured_image,game_publisher,game_release_date,id,link,slug,title`,
   ALBUM_LIST: queryRoot + 'albums?_fields=album_featured_image,album_game_name,albums-tax,date_gmt,featured_media,games-tax,id,slug,title',
   ALBUMS_BY_TAX: tax => queryRoot + `albums?albums-tax=${tax}&_fields=album_featured_image,album_game_name,albums-tax,date_gmt,featured_media,games-tax,id,slug,title`,
   TRACK_BY_ID: id => queryRoot + `tracks/${id}?_fields=albums-tax,id,title,track_length,track_url`,
   TRACKS_BY_TAX: tax => queryRoot + `tracks?albums-tax=${tax}&_fields=albums-tax,id,title,track_length,track_url`,
   TRACKS_SINGLE: queryRoot + 'tracks?per_page=1&_fields=albums-tax,id,title,track_length,track_url',
   SEARCH: (string, page, resultsPerPage) => queryRoot + `search?search=${string}&type=post&subtype=post&page=${page}&per_page=${resultsPerPage}&_fields=id`
};

/**
 * Bundle of all data that relates to the connection to WordPress
 */
const wordpress = { queries };
export default wordpress;
export const URL_BASE = 'https://api.themoviedb.org/3'
export const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
export const LIST_MOVIES = '/movie/popular?api_key=0e33d55cf2dc8cf4c0364babc3b52354&language=vi-VN&page=1'
export const FILTER_MOVIE = '/discover/movie?api_key=0e33d55cf2dc8cf4c0364babc3b52354&language=vi-VN&with_genres=28'
export const DETAIL_MOVIE = '/movie/{movie_id}?api_key=0e33d55cf2dc8cf4c0364babc3b52354&language=vi-VN'


//  khai bao key api 
// export const FILTER_MOVIE = 'https://api.themoviedb.org/3/discover/movie?api_key=YOUR_API_KEY&language=vi-VN&with_genres=28'

//
// URL_BASE =https://api.themoviedb.org/3
//  KEY_LINK  =/discover/movie
// param , body url ==>?api_key=YOUR_API_KEY&language=vi-VN&with_genres=28

// URL_BASE+LIST_MOVIES
export const GET_PLAYLISTS = "GET_PLAYLISTS";
export const URL_PLAYLISTS =
  "https://api.spotify.com/v1/browse/featured-playlists";
export const GET_PLAYLIST_IMG = "GET_PLAYLIST_IMG";
export const URL_PLAYLIST_IMG = (playlist_id) =>
  `https://api.spotify.com/v1/playlists/${playlist_id}/images`;
export const FILTER_PLAYLISTS = "FILTER_PLAYLISTS";
export const SEARCH_PLAYLISTS = "SEARCH_PLAYLISTS";
export const GET_FILTERS = "GET_FILTERS";
export const URL_FILTERS = "http://www.mocky.io/v2/5a25fade2e0000213aa90776";
export const GET_TOKEN = "GET_TOKEN";
export const URL_TOKEN = "https://accounts.spotify.com/api/token";
export const UPDATE_FILTER = "UPDATE_FILTER";

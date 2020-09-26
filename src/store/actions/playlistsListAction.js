import {
  GET_PLAYLISTS,
  URL_PLAYLISTS,
  URL_PLAYLIST_IMG,
  URL_TOKEN,
  SEARCH_PLAYLISTS,
  UPDATE_FILTER,
} from "./actionTypes";
import Service from "../../api/apiService";
import qs from "querystring";

const verifyToken = async (oldToken) => {
  const date = new Date();
  if (oldToken == null || oldToken.expiresIn > date) {
    const url = URL_TOKEN;
    const token = await Service({
      data: qs.stringify({
        grant_type: "client_credentials",
      }),
      headers: {
        "content-type": "application/x-www-form-urlencoded;charset=utf-8",
        // Authorization:
        /* Use 'Basic' e a chave aqui encriptada aqui */
      },
      method: "post",
      url,
    });
    date.setSeconds(date.getSeconds() + token.expires_in);
    return {
      ...token,
      expiresIn: date,
    };
  } else {
    return oldToken;
  }
};

export const getFeaturedPlaylists = (oldToken, activeFilter) => async (
  dispatch
) => {
  const url = URL_PLAYLISTS;
  const imageUrl = URL_PLAYLIST_IMG;
  const token = await verifyToken(oldToken);
  const Authorization = `${token.token_type} ${token.access_token}`;
  return dispatch({
    type: GET_PLAYLISTS,
    token,
    payload: await Service({
      headers: {
        Authorization,
      },
      method: "get",
      params: activeFilter,
      url,
    }),
  });
};

export const updateActiveFilter = (filterName, filterValue) => (dispatch) => {
  const activeFilter = { filterName, filterValue };
  return dispatch({ type: UPDATE_FILTER, payload: activeFilter });
};

export const getMatchedPlaylists = (matched) => (dispatch) => {
  return dispatch({
    type: SEARCH_PLAYLISTS,
    payload: matched,
  });
};

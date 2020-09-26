import { FILTER_PLAYLISTS, GET_FILTERS, URL_FILTERS } from "./actionTypes";
import Service from "../../api/apiService";
export const getPlaylistFilters = () => async (dispatch) => {
  const url = URL_FILTERS;

  return dispatch({
    type: GET_FILTERS,
    payload: await Service({
      method: "get",
      url,
    }),
  });
};

export const changeFilter = (newFilter) => {
  return {
    type: FILTER_PLAYLISTS,
    payload: newFilter,
  };
};

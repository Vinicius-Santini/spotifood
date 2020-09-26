import { GET_FILTERS, FILTER_PLAYLISTS } from "../actions/actionTypes";

const initialState = { filters: [] };

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_FILTERS:
      return {
        ...state,
        filters: action.payload.filters,
      };
    default:
      return state;
  }
}

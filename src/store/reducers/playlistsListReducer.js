import {
  GET_PLAYLISTS,
  SEARCH_PLAYLISTS,
  UPDATE_FILTER,
} from "../actions/actionTypes";

const initialState = {
  playlists: [],
  token: null,
  matchedPlaylists: [],
  activeFilter: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PLAYLISTS:
      const enhancedActPayload = action.payload.playlists.items.map((item) => {
        return { ...item, visible: true };
      });
      return {
        ...state,
        playlists: enhancedActPayload,
        token: action.token,
      };
    case SEARCH_PLAYLISTS:
      return {
        ...state,
        matchedPlaylists: action.payload,
      };
    case UPDATE_FILTER:
      const { filterName, filterValue } = action.payload;
      if (state.activeFilter[filterName] == filterValue) {
        action.payload[filterName] = null;
      }
      return {
        ...state,
        activeFilter: {
          ...state.activeFilter,
          [filterName]:
            filterValue == state.activeFilter[filterName] ? null : filterValue,
        },
      };
    default:
      return state;
  }
}

import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "../../node_modules/redux";
import playlistsListReducer from "./reducers/playlistsListReducer";
import filterPlaylistsReducer from "./reducers/filterPlaylistsReducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
  playlists: playlistsListReducer,
  filter: filterPlaylistsReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function storeConfig() {
  return createStore(reducers, composeEnhancer(applyMiddleware(thunk)));
}

export default storeConfig;

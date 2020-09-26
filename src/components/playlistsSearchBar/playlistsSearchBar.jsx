import React from "react";
import "./playlistsSearchBar.css";
import { connect } from "react-redux";
import { getMatchedPlaylists } from "../../store/actions/playlistsListAction";

const playlistsSearchBar = (props) => {
  const searchFunction = (value) => {
    const { list, getMatchedPlaylists } = props;

    const matched = list.playlists.filter((x) => {
      return x.name.toLowerCase().includes(value);
    });

    getMatchedPlaylists(matched);
  };
  return (
    <div className="divz">
      <div className="divx">
        <input
          type="text"
          placeholder="Procure playlists pelo nome"
          onChange={(e) => searchFunction(e.target.value)}
        ></input>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { list: state.playlists };
};

export default connect(mapStateToProps, { getMatchedPlaylists })(
  playlistsSearchBar
);

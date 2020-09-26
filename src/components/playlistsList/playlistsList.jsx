import React, { Component } from "react";
import "./playlistsList.css";
import PlaylistCard from "../playlistCard/playlistCard";
import { connect } from "react-redux";
import { getFeaturedPlaylists } from "../../store/actions/playlistsListAction";

export class playlistsList extends Component {
  async componentDidMount() {
    const { getFeaturedPlaylists } = this.props;
    await getFeaturedPlaylists();
    this.continuousRequest();
  }

  continuousRequest = () => {
    setInterval(() => {
      const { getFeaturedPlaylists, token, activeFilter } = this.props;

      getFeaturedPlaylists(token, activeFilter);
    }, 30000);
  };

  render = () => {
    const { list, matchedPlaylists } = this.props;
    const matchedId = matchedPlaylists.map(
      (matchedPlaylist) => matchedPlaylist.id
    );
    const verifyMatch = (matchedId, items) => {
      if (matchedId.includes(items.id)) {
        items.visible = true;
      } else {
        items.visible = false;
      }
    };

    return (
      <>
        <div className="grid-container">
          {list.playlists != null && list.playlists.length > 0 ? (
            list.playlists.map((items) => {
              if (matchedId != null && matchedId.length > 0) {
                verifyMatch(matchedId, items);
              }
              if (items.visible) {
                const images = items.images[0];
                return (
                  <PlaylistCard
                    key={items.id}
                    id={items.id}
                    name={items.name}
                    description={items.description}
                    imageUrl={images.url}
                    playlistUrl={items.external_urls.spotify}
                  />
                );
              }
            })
          ) : (
            <div className="lds-ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          )}
        </div>
      </>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    list: state.playlists,
    token: state.playlists.token,
    matchedPlaylists: state.playlists.matchedPlaylists,
    activeFilter: state.playlists.activeFilter,
  };
};

export default connect(mapStateToProps, { getFeaturedPlaylists })(
  playlistsList
);

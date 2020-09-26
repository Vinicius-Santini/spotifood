import React, { Component } from "react";
import "./sideBarFilter.css";
import { connect } from "react-redux";
import { getPlaylistFilters } from "../../store/actions/filterPlaylistsAction";
import {
  getFeaturedPlaylists,
  updateActiveFilter,
} from "../../store/actions/playlistsListAction";
import moment from "moment";

export class sideBarFilter extends Component {
  async componentDidMount() {
    const { getPlaylistFilters } = this.props;
    await getPlaylistFilters();
  }
  render = () => {
    const {
      getFeaturedPlaylists,
      updateActiveFilter,
      filters,
      token,
      activeFilter,
    } = this.props;
    const ignoreCase = ["limit", "offset"];
    return (
      <div className="sidenav">
        <h1>Filtros</h1>
        {filters != null && filters.length > 0 ? (
          filters.map(
            (category) =>
              !ignoreCase.includes(category.id) && (
                <ul>
                  <h2>{category.name}</h2>
                  {category.validation != null ? (
                    <input
                      className="dateInput"
                      type="datetime-local"
                      onChange={(e) => {
                        const date = moment(e.target.value).format(
                          "YYYY-MM-DDTHH:mm:ss.SSS"
                        );
                        updateActiveFilter(category.id, date);
                        getFeaturedPlaylists(token, {
                          ...activeFilter,
                          [category.id]: date,
                        });
                      }}
                    ></input>
                  ) : (
                    category.values != null &&
                    category.values.map((options) => {
                      {
                        return (
                          <li
                            className={
                              activeFilter.locale !== options.value &&
                              activeFilter.country !== options.value
                                ? ""
                                : "filterSelected"
                            }
                            onClick={() => {
                              updateActiveFilter(category.id, options.value);
                              getFeaturedPlaylists(token, {
                                ...activeFilter,
                                [category.id]: options.value,
                              });
                            }}
                          >
                            {options.name}
                          </li>
                        );
                      }
                    })
                  )}
                </ul>
              )
          )
        ) : (
          <div className="loading">Loading...</div>
        )}
      </div>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    filters: state.filter.filters,
    activeFilter: state.playlists.activeFilter,
    token: state.playlists.token,
  };
};

export default connect(mapStateToProps, {
  getPlaylistFilters,
  getFeaturedPlaylists,
  updateActiveFilter,
})(sideBarFilter);

import React from "react";
import "./App.css";
import PlaylistsList from "./components/playlistsList/playlistsList";
import Header from "./components/header/header";
import SearchBar from "./components/playlistsSearchBar/playlistsSearchBar";
import SideBarFilter from "./components/sideBarFilter/sideBarFilter";

function App() {
  return (
    <>
      <div className="App">
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Oswald"
        />
        <Header />
        <SearchBar />
        <div className="listAndFilter">
          <SideBarFilter />
          <PlaylistsList />
        </div>
      </div>
    </>
  );
}

export default App;

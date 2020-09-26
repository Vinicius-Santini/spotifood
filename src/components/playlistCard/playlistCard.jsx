import React from "react";
import "./playlistCard.css";

const playlistCard = ({
  key,
  id,
  name,
  description,
  imageUrl,
  playlistUrl,
}) => {
  return (
    <div className="Card">
      <img className="playlistImage" src={imageUrl}></img>
      <div className="Header">
        <span className="Title">{name}</span>
      </div>
      <div className="Content">{description}</div>
    </div>
  );
};

export default playlistCard;

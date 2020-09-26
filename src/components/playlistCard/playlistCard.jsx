import React from "react";
import "./playlistCard.css";

const playlistCard = ({ name, description, imageUrl, playlistUrl }) => {
  return (
    <div className="Card" onClick={() => (window.location = playlistUrl)}>
      <img className="playlistImage" src={imageUrl}></img>
      <div className="cardHeader">
        <span className="cardTitle">{name}</span>
      </div>
      <div className="cardContent">{description}</div>
    </div>
  );
};

export default playlistCard;

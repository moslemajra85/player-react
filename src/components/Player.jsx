import React from 'react';
const Player = ({ player }) => {
  return (
    <div className="player">
      <img src={player.imageUrl} />
      <div className="description">
        <h2>{player.name}</h2>
        <p>{player.team}</p>
        <p>{player.nationality}</p>
      </div>
    </div>
  );
};

export default Player;

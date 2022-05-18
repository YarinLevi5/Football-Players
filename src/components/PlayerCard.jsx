import React, { useState } from "react";
function PlayerCard(props) {
  let [count, setCount] = useState(0);
  let { player } = props;
  let { playerId, name, team, points } = player;

  let getName = () => {
    alert(name);
  };

  let counter = () => {
    setCount(++count);
  };

  let style = {
    backgroundColor: "#f4f4f4",
    padding: "10px",
    margin: "10px",
  };
  return (
    <div style={style}>
      <h1>Player with id {playerId}</h1>
      <p>Name : {name}</p>
      <p>Team : {team}</p>
      <p>Points : {points}</p>
      <button
        onClick={() => {
          counter();
          getName();
        }}
      >
        Click to get name
      </button>
      <p>{count}</p>
    </div>
  );
}

PlayerCard.defaultProps = {
  player: "5",
  name: "yarin",
  team: "development",
  points: 50,
};

export default PlayerCard;

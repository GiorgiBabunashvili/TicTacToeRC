import React from "react";

const GameOver = ({ winner, onRematch }) => {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {!winner && <p>Its a draw!</p>}
      {winner && <p>{winner} won!</p>}
      <p>
        <button onClick={onRematch}>Rematch!</button>
      </p>
    </div>
  );
};

export default GameOver;

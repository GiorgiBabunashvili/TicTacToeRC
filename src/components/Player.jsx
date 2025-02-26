import { useState } from "react";

const Player = ({ initialName, symbol, isActive, onNaameChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPalyerName] = useState(initialName);

  function handleEditClick() {
    setIsEditing((didEdit) => !didEdit);
    if (isEditing) {
      onNaameChange(symbol, playerName);
    }
  }

  function handleChangename(e) {
    setPalyerName(e.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editablePlayerName = (
      <input
        type="text"
        required
        value={playerName}
        onChange={handleChangename}
      />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;

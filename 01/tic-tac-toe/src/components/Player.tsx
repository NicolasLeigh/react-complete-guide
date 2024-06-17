import { ChangeEvent, useState } from "react";

type PlayerProps = {
  initialName: string;
  symbol: string;
};

export default function Player({ initialName, symbol }: PlayerProps) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing((prev) => !prev);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPlayerName(e.target.value);
  };

  let editablePlayerName = <span className='player-name'>{playerName}</span>;

  if (isEditing) {
    editablePlayerName = <input type='text' required value={playerName} onChange={handleChange} />;
  }

  return (
    <li>
      <span className='player'>
        {editablePlayerName}
        <span className='player-symbol'>{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}

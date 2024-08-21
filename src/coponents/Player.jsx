import { useState } from 'react';

export default function Player({ initialName, symbol, isActive }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing((editing) => !editing);
  }

  const handleChangeName = (event) => {
    setPlayerName(event.target.value);
  }

  return <li className={isActive ? 'active' : undefined}>
    <span className="player">
      {!isEditing && <span className='player-name'>{playerName}</span>}
      {isEditing && <input onChange={handleChangeName} type="text" value={playerName} require />}
      <span className='player-symbol'>{symbol}</span>
    </span>
    <button onClick={handleEdit}>{!isEditing ? 'Edit' : 'Save'}</button>
  </li>
}
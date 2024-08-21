import { useState } from 'react';

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing((editing) => !editing);
    setIsEditing((editing) => !editing);
  }

  return <li>
    <span className="player">
      {!isEditing && <span className='player-name'>{name}</span>}
      {isEditing && <input type="text" value={name} require />}
      <span className='player-symbol'>{symbol}</span>
    </span>
    <button onClick={handleEdit}>{!isEditing ? 'Edit' : 'Save'}</button>
  </li>
}
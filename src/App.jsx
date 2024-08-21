import Player from "./coponents/Player";
import GameBoard from "./coponents/GameBoard";
import { useState } from 'react';

function App() {
  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquare() {
    setActivePlayer((active) => active === 'X' ? '0' : 'X')
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName='Player 1' symbol='X' isActive={activePlayer === 'X'} />
          <Player initialName='Player 2' symbol='0' isActive={activePlayer === '0'} />
        </ol>

        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} />
      </div>

      LOG
    </main>
  )
}

export default App

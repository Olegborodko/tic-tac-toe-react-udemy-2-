import Player from "./coponents/Player";
import GameBoard from "./coponents/GameBoard";
import { useState } from 'react';
import Log from "./coponents/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X';

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = '0';
  }

  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard = initialGameBoard;

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  let winner = null;

  for (const compination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[compination[0].row][compination[0].column];
    const seconSquareSymbol = gameBoard[compination[1].row][compination[1].column];
    const thirdSquareSymbol = gameBoard[compination[2].row][compination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === seconSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = firstSquareSymbol;
    }
  }

  function handleSelectSquare(rowIndex, colIndex) {
    // setActivePlayer((active) => active === 'X' ? '0' : 'X');

    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevTurns];
      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName='Player 1' symbol='X' isActive={activePlayer === 'X'} />
          <Player initialName='Player 2' symbol='0' isActive={activePlayer === '0'} />
        </ol>

        {winner && <p>You won, {winner}!</p>}
        <GameBoard board={gameBoard} onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} />
      </div>

      <Log turns={gameTurns} />
    </main>
  )
}

export default App

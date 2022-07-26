import { useContext } from 'react';
import Grid from './components/Grid'
import { StoreContext } from './state/store';

import './App.css';

function App() {
  const {
    running,
    setRunning,
    gridSize,
    setGridSize,
    setBoard,
    winner,
    setWinner,
    moves,
    setMoves,
    setMoveLimit,
    moveLimit,
    player,
    setPlayer
  } = useContext( StoreContext );

  const handleGridChange = (e) =>{
    setGridSize(e.target.value)
    setBoard([...Array(e.target.value ** 2).fill(null)])
    setMoveLimit(e.target.value ** 2)
    document.body.style.setProperty("--grid-size", e.target.value)
  }

  const handleButton = () => {
    setRunning(false);
    setBoard([...Array(gridSize ** 2).fill(null)]);
    setMoves(0);
    setWinner("");
    setPlayer(1)
  }
  return (
    <div className="App">
      <h1>Tic tac toe</h1>
      {winner ? (
          <h4>Le gagnant est {winner}</h4>
      ) : moves === moveLimit ? (
          <h4>Egalité</h4>
      ) : (
          <h4>Au tour du joueur {player}</h4>
      )
      }
      <Grid />
      <div className="controls">
        <div className="grid-control">
          <label htmlFor="grid-size">Taille de la grille ( entre 3 et 21 )</label>
          <input
              name="grid-size"
              type="number"
              min="3"
              max="21"
              onChange={handleGridChange}
              disabled= {running ? true : false}
          />
        </div>
        <div className="game-control">
          <button onClick={handleButton}>Relancer</button>
        </div>

      </div>
    </div>
  );
}

export default App;

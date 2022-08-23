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
    setPlayer
  } = useContext( StoreContext );

  const handleGridChange = (e) =>{
    if (e.target.value < 3 || e.target.value > 21) return;
    setGridSize(e.target.value)
    setBoard([...Array(e.target.value ** 2).fill(null)])
    setMoveLimit(e.target.value ** 2)
    document.body.style.setProperty("--grid-size", e.target.value)
  }

  const launchGame = () => {
    setRunning(true)
    setPlayer(Math.floor(Math.random() * 2) + 1)
  }

  const handleReset = () => {
    setRunning(false);
    setBoard([...Array(gridSize ** 2).fill(null)]);
    setMoves(0);
    setWinner("");
    setPlayer(1);
    
  }
  return (
    <div className="App">
      <h1>Tic tac toe</h1>
      {winner ? (
          <h4>Le gagnant est {winner}</h4>
      ) : moves === moveLimit ? (
          <h4>Egalité</h4>
      ) : (
          <h4>A vous de jouer</h4>
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
              disabled={running ? true : false}
          />
        </div>
        <div className="game-control">
          <button onClick={launchGame} disabled={running ? true : false}>Lancer</button>
          <button onClick={handleReset} >Remise à zéro</button>
        </div>

      </div>
      <div className="manual">
        <p>Instructions: Choisissez la taille de la grille et cliquez sur 'Lancer'</p>
        <p>Le jeu va choisir qui démarre la partie entre vous et l'ordinateur aléatoirement</p>
        <p>Pour recommencer la partie où en démarrer une nouvelle cliquez sur 'Remise à zéro'</p>
        <a target="_blank" rel="noreferrer" href="https://icons8.com/icon/BDJWupMrVY0m/tic-tac-toe">Tic Tac Toe</a> icon by <a target="_blank" rel="noreferrer" href="https://icons8.com">Icons8</a>
      </div>
    </div>
  );
}

export default App;

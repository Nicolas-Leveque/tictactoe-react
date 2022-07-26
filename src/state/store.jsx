import { createContext, useState } from 'react';

export const Players = {
    Croix: 1,
    Cercle: 2
}

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
    const [ running, setRunning ] = useState(false);
    const [ gridSize, setGridSize ] = useState(3);
    const [ board, setBoard ] = useState([...Array(gridSize ** 2).fill(null)]);
    const [ moves, setMoves ] = useState(0);
    const [ moveLimit, setMoveLimit ] = useState(gridSize ** 2);
    const [ winner, setWinner ] = useState('');
    const [ player, setPlayer ] = useState(Players.Croix)



    const store = {
        running,
        setRunning,
        gridSize,
        setGridSize,
        board,
        setBoard,
        moves,
        setMoves,
        moveLimit,
        setMoveLimit,
        winner,
        setWinner,
        player,
        setPlayer
    };
    return (
        <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    );
 };

export default StoreContextProvider;


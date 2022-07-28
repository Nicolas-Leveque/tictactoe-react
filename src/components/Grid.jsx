import { useEffect, useContext } from "react";
import { StoreContext } from "../state/store";
import { checkBoard } from "../utils/checkWinner";
import { randomSpot } from "../utils/ai"
import './Grid.css'

const Grid = () => {
    const {
        running,
        board,
        setBoard,
        winner,
        setWinner,
        player,
        setPlayer,
        moves,
        setMoves,
        moveLimit
    } = useContext( StoreContext );

    useEffect(() => {
        if (checkBoard(board)) {
            setWinner(checkBoard(board) === 1 ? "Joueur" : "Ordinateur")
        }
    }, [board, setWinner]);

    useEffect(() => {
        if (player === 2) {
            aiPlay(board)
        }
    })

    const humanPlay = (index) => {
        if( board[index] ) return;
        if( moves === moveLimit ) return;
        if( winner ) return;
        if(!running) return;
        const tempBoard = [...board];
        tempBoard[index] = player;
        setBoard(tempBoard);
        setPlayer(player === 1 ? 2 : 1);
        setMoves((prevState) => prevState + 1);
    }

    const aiPlay = (board) => {
        if ( moves === moveLimit) return;
        const spot = randomSpot(board)
        const tempBoard = [ ...board];
        tempBoard[spot] = player;
        setBoard(tempBoard);
        setPlayer(player === 1 ? 2 : 1);
        setMoves((prevStates) => prevStates + 1);
    }

    return(
        <div>
            <div className="grid-container">

                {board.map((cell, index) => (
                    <div
                        key={index}
                        className='grid-cell'
                        onClick={() => humanPlay(index)}
                    >
                        {board[index] === 1 ? "X" : board[index] === 2 ? "O" : null}
                    </div>
                    )
                )}
            </div>
        </div>
    )
};

export default Grid;

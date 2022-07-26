import { useEffect, useContext } from "react";
import { StoreContext } from "../state/store";
import { checkBoard } from "../utils/checkWinner";
import './Grid.css'

const Grid = () => {
    const {
        running,
        setRunning,
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
            setWinner(checkBoard(board) === 1 ? "Joueur 1" : "Joueur 2")
        }
    }, [board, setWinner])

    const handleClick = (index) => {
        if( board[index] ) return;
        if( moves === moveLimit ) return;
        if( winner ) return;
        if(!running) {
            setRunning(true)
        }


        const tempBoard = [...board];
        tempBoard[index] = player;
        setBoard(tempBoard)

        setPlayer(player === 1 ? 2 : 1);
        setMoves((prevState) => prevState + 1)
    }



    return(
        <div>
            <div className="grid-container">

                {board.map((cell, index) => (
                    <div
                        key={index}
                        className='grid-cell'
                        onClick={() => handleClick(index)}
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

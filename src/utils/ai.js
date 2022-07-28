export const randomSpot = (board) => {
    const spot = Math.floor(Math.random() * board.length )
    if ( board[spot] ) return randomSpot(board);
    return spot
}
const checkForWin = (array) => {
    if ( array.every(
        (value, index, array) => value === array[0] && value !== null
        )
    ) {
        return array[0]
    }
}

export const checkBoard = (grid) => {
    //Longueur d'un coté
    const gridSize = Math.sqrt(grid.length);

    for ( let i = 0; i < gridSize; i++) {
        //recup de sous array lignes
        const lines = grid.slice(
            i * gridSize,
            i * gridSize + gridSize
        );

        //recup de sous array colonnes

        const columns = grid.filter((value, index) => {
             return (index - i) % gridSize === 0;
        });

        //recup de la 1ere diagonale

        const diagOne = grid.map(
            ( value, index, array ) => {
                return array[index + (gridSize * index)];
            }
        ).slice(0, gridSize)
        // console.log(diagOne)
        //recup de la 2de diagonale
        const diagTwo = grid.map(
            ( value, index, array ) => {
                return array[gridSize - 1 + ((gridSize - 1) * index)]
            }
        ).slice(0, gridSize);
        // console.log(diagTwo)

        if (checkForWin(lines)) return checkForWin(lines);
        if (checkForWin(columns)) return checkForWin(columns);
        if (checkForWin(diagOne)) return checkForWin(diagOne);
        if (checkForWin(diagTwo)) return checkForWin(diagTwo);
    }


}
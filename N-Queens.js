class Poistion {
    constructor(row, col) {
       this.row = row;
       this.col = col;
    }
}

function solveNQueens(n) {
    let positions = new Array(n).fill(0).map(() => new Poistion());
    if(getSolution(n, 0, positions)) {
        positions.forEach((position) => {
            console.log(`${position.row}, ${position.col}`);
        });
    }else {
        console.log('no solution');
    }
}

function getSolution(n, row, positions) {
    if(n==row) {
        return true;
    }
    let col;
    for (col=0;col<n;col++) {
        let isSafe = true;
        for(let queen = 0; queen<row;queen++) {
            const queenRow = positions[queen].row;
            const queenCol = positions[queen].col;
            if(queenCol==col || queenRow-queenCol === row-col || queenRow+queenCol === row+col) {
                isSafe = false;
                break;
            }
        }
        if(isSafe) {
            positions[row] = new Poistion(row, col);
            if(getSolution(n, row+1,positions)) {
                return true;
            }
        }
    }
    return false;
}

console.log(solveNQueens(6));
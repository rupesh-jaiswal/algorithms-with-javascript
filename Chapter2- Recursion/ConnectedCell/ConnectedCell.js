/**
 * Problem-5 Finding the length of connected cells of 1s (regions) in an matrix of Os and
1s: Given a matrix, each of which may be 1 or 0. The filled cells that are connected form a
region. Two cells are said to be connected if they are adjacent to each other horizontally,
vertically or diagonally. There may be several regions in the matrix. How do you find the
largest region (in terms of number of cells) in the matrix?

 */

function create2DArray(rows, columns) {
    return new Array(rows).fill(0).map(() => new Array(columns).fill(false));
}

function getValue(arr, r, c, rmax, cmax) {
    if(r<0 || r>=rmax || c<0 || c>=cmax) {
        return 0;
    }
    return arr[r][c];
}


function findMaxRec(arr, i, j, rmax, cmax, visited,currentsize, maxsize){
    // if(!arr[i][j]) {
    //     return;
    // }
    if(i<0 || i>=rmax || j<0 || j>=cmax) {
        return;
    }
    currentsize++;
    visited[i][j] = true;
    if(currentsize>maxsize.value) {
        maxsize.value = currentsize;
    }
    const neighbors = [[-1,0], [-1, 1], [0,1], [1,1], [1, 0], [1,-1], [0,-1], [-1,-1]];
    neighbors.forEach(([row, column]) => {
        const newRow = i+row;
        const newCol = j+column;
        const value = getValue(arr, newRow, newCol, rmax, cmax);
        if(value && !visited[newRow][newCol]) {
            findMaxRec(arr, newRow, newCol, rmax, cmax, visited,currentsize, maxsize)
        }
    });
}

function findMaxConnected(arr, rmax, cmax) {
    let maxsize = {
        value : 0,
    };
    const visited = create2DArray(rmax, cmax);
    for(let i=0;i<rmax;i++) {
        for(let j=0;j<cmax;j++) {
            if(arr[i][j] && !visited[i][j]) {
                findMaxRec(arr, i, j, rmax, cmax, visited,0, maxsize);
            }
        }
    }
    return maxsize.value;
}

const arr = [[1,1,0,0,0], [0,1,1,0,0],[0,0,1,0,1],[1,0,0,0,1],[0,1,0,1,1]]
console.log(findMaxConnected(arr, 5, 5));

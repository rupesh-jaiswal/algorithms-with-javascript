function main(input) {      
    const inputs = input.split('\n').map(elem => elem.split(' '));
    const [ row, col] = inputs[0].map((e) => parseInt(e, 10));
    const matrixElms = inputs[1].map((e) => parseInt(e,10));
    let k=0;
    const matrix = [];
    for(let i=0;i<row; i++) {
        const temp = [];
        for(let j=0;j<col; j++) {
            temp.push(matrixElms[k++]);
        }
        matrix.push(temp);
    }

    execute(matrix, row, col);
    // Writing output to STDOUT
}

// Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail

function execute(matrix, row, col) {
    let visited = new Array(row).fill(0).map(() => new Array(col).fill(0));
    let maxCount = 0;
    for(let i=0;i<row;i++) {
        for(let j=0;j<col;j++) {
            let count = getMaxCount(matrix, i, j, row, col, 1, visited);
            if(count>maxCount) {
                maxCount = count;
            }
        }
    }
    console.log(maxCount);
}

// Write your code here
function getMaxCount(matrix, x, y, row, col, count, visited) {
    // console.log(`x=${x}, y=${y}, count=${count}`);
    if(x<0 || x>=row || y<0 || y>=col) {
        return count;
    }
    if(visited[x][y]) {
        return count;
    }
    visited[x][y] = 1;
    let tempCounts = [];
    const neighbors = getNeighbors(x, y, row, col);
    for(let i=0;i<neighbors.length;i++) {
        const [xrow, ycol] = neighbors[i];
        if(matrix[xrow][ycol]>matrix[x][y] && !visited[xrow][ycol]) {
            tempCounts.push(getMaxCount(matrix, xrow, ycol, row, col, count+1, visited));
        }
    }
    visited[x][y] = 0;
    return tempCounts.length ?Math.max(...tempCounts) : count;
}
function getNeighbors(x, y, row, col) {

    const neighbors = [
        [x, y+1],
        [x+1, y],
        [x, y-1],
        [x-1, y]
    ];

    const validNeighbors = [];
    neighbors.forEach(neighbor => {
        const [xrow, ycol] = neighbor;
        if(!(xrow<0 || xrow>=row || ycol<0 || ycol>=col)) {
        validNeighbors.push(neighbor);
    }
    });
    return validNeighbors;
}

const input = [
    [9,9, 4],
    [6, 6,8],
    [2,1,1],
];
execute(input, 3, 3);
function findWrapper(matrix, pat) {
    console.log(matrix);
    const nrow = matrix.length;
    const ncol = matrix[0].length;
    if(pat.length>nrow*ncol) {
        return false;
    }
    const used = new Array(nrow).fill(0).map(() => new Array(ncol).fill(0));
    console.log(used);
    let patlevel = 0;
    return find(matrix, pat, used, 0, 0, nrow, ncol, patlevel);
}

function getEightNeighbors(x, y) {
    return [
        [x+1, y],
        [x, y+1],
        [x+1, y+1],
        [x-1, y-1],
        [x, y-1],
        [x-1, y],
        [x+1, y-1],
        [x-1, y+1],
    ];
}

function find(mat, pat, used, x, y, nrow, ncol, patlevel) {
    if(patlevel===pat.length) {
        return true;
    }
    if(x >=nrow || y >= ncol || y<0 || x<0 || used[x][y]) {
        return false;
    }
    console.log(used, patlevel);
    if(mat[x][y]!==pat[patlevel]) {
        if(y<ncol-1) {
            // go to next value in row
            return find(mat, pat, used, x, y+1, nrow, ncol, patlevel)
        }else if(x<nrow-1) {
            // go to first value of next row
            return find(mat, pat, used, x+1, 0, nrow, ncol, patlevel)
        }else {
            
            return false;
        }
    }else if(mat[x][y]===pat[patlevel]) {
        used[x][y]=1;
        const neighbors = getEightNeighbors(x, y);
        for(let i=0;i<neighbors.length;i++) {
            const res = find(mat, pat, used, neighbors[i][0], neighbors[i][1], nrow, ncol, patlevel+1);
            if(res) {
                used[x][y]=0;
                return res;
            }
        }
    }else {
        return false;
    }
}
const matrix = [
    'acmrc'.split(''),
    'xsopc'.split(''),
    'vovni'.split(''),
    'wgfmn'.split(''),
    'qatit'.split(''),
];
const pat = 'microsoft'
console.log(findWrapper(matrix, pat));
// scaler.com/academy/mentee-dashboard/classroom/faang-e2ea7de3-7ced-45ca-92db-3e37a989c8a0/#assignment%2F11949

const getNeighbors = (i, j, n, m) => {
    let neighbors = [];
    if((i-1)>=0) neighbors.push([i-1, j]);
    if((j-1)>=0) neighbors.push([i, j-1]);
    if((j+1)<m) neighbors.push([i, j+1]);
    if((i+1)<n) neighbors.push([i+1, j]);
    return neighbors;

};
const waterFall = (A) => {
    const n = A.length;
    const m = A[0].length;
    let reachB = new Array(n).fill(0).map(() => new Array(m).fill(0));
    let reachR = new Array(n).fill(0).map(() => new Array(m).fill(0));
    
    let queueB = [];
    let queueR = [];
    for(let i=0;i<m;i++) {
        queueB.push([0, i]);
        reachB[0][i] = 1;
        queueR.push([n-1, i]);
        reachR[n-1][i] = 1;
    }

    for(let i=0;i<n;i++) {
        queueB.push([i, 0]);
        reachB[i][0] = 1;
        queueR.push([i, m-1]);
        reachR[i][m-1] = 1;
    }

    while(queueB.length) {
        const [x, y] = queueB.shift();
        let neighbors = getNeighbors(x, y, n, m);
        neighbors.forEach(([nx, ny]) => {
            if(A[nx][ny]>=A[x][y] && reachB[nx][ny]===0) {
                reachB[nx][ny] = 1;
                queueB.push([nx,ny]);
            }
        });
    }

    while(queueR.length) {
        const [x, y] = queueR.shift();
        let neighbors = getNeighbors(x, y, n, m);
        neighbors.forEach(([nx, ny]) => {
            if((A[nx][ny]>=A[x][y]) && (reachR[nx][ny]===0)) {
                reachR[nx][ny] = 1;
                queueR.push([nx,ny]);
            }
        });
    }

    let count = 0;
    for(let i=0;i<n;i++) {
        for(let j=0;j<m;j++) {
            count+=(reachB[i][j]&reachR[i][j]);
        }
    }
    return count;
}
const A = [
    [1, 2, 2, 3, 5],
    [3, 2, 3, 4, 4],
    [2, 4, 5, 3, 1],
    [6, 7, 1, 4, 5],
    [5, 1, 1, 2, 4],
  ]

const A1= [
    [2, 2],
    [2, 2],
  ];

const A3 = [
    [15, 1, 10],
    [5, 19, 19],
    [3, 5, 6],
    [6, 2, 8],
    [2, 12, 16],
    [3, 8, 17],
    [12, 5, 3],
    [14, 13, 3],
    [2, 17, 19],
    [16, 8, 7],
    [12, 19, 10],
    [13, 8, 20],
  ]
// waterFall(A);
waterFall(A3);
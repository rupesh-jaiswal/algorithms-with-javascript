function create2DArray(rows, columns) {
  return new Array(rows).fill(0).map(() => new Array(columns).fill(0));
}

function knapsack(P, W, m) {
  P.unshift(0);
  W.unshift(0);
  let n = W.length;
   let k =create2DArray(n,m+1);
  for(let i=1;i<n;i++) {
    for(let w=1;w<=m;w++) {
      if(W[i]<=w) {
        k[i][w] = Math.max(P[i]+k[i-1][w-W[i]], k[i-1][w]);
      }else {
        k[i][w] = k[i-1][w];
      }
    }
  }
  console.log(k);
  let x = new Array(n);
  let i=n-1,j=m;
  while(i>0 && j>0) {
    if(k[i][j]===k[i-1][j]) {
      x[i] = 0;
    }else {
      x[i] = 1;
      j-=W[i];
    }
    i--;
  }
  console.log(x);
}

let P = [1,2,5,6];

let W = [2,3,4,5];
let bagCapacity = 8;
knapsack(P,W,8);
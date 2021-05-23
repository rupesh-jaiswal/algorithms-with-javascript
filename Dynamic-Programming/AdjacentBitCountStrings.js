//https://www.spoj.com/problems/GNYR09F/

function findAdjacentBitCount(n,k){
  let count=findStrings(n, k, 0);
  count +=findStrings(n,k, 1);
  return count;
}

function findStrings(n,k,first) {
  if(n===0) {
    return 0;
  }
  if(n===1) {
    if(k===0) {
      return 1;
    }else {
      return 0;
    }
  }
  let result;
  if(first===1) {
    result=findStrings(n-1, k-1, 1) + findStrings(n-1, k, 0)
  }else {
    result=findStrings(n-1, k, 0)+findStrings(n-1, k, 1);
  }
  
  return result;
}

console.log(findAdjacentBitCount(20, 8));

// find length of n strings whch does not have adjacent ones
let count = 0;
let dp = {}

function findStrings(n) {
   return findNonAdjacentStrings(n, "0") + findNonAdjacentStrings(n, "1");
}

function findNonAdjacentStrings(n , currentString) {
  if(n===1) {
    console.log(currentString);
    return 1;
  }
  // we check the last entry
  count++;
  let result;
  if(currentString[currentString.length-1]==='1') {
    result= findNonAdjacentStrings(n-1, currentString+'0');
  }else {
    result= findNonAdjacentStrings(n-1, currentString+'0') + findNonAdjacentStrings(n-1, currentString+'1')
  }
  return result;
}



console.log(findStrings(5));
console.log('count=',count);

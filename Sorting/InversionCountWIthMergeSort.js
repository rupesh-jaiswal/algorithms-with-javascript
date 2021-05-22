// Inversion count gives the minimum number of adjacent swaps
function inversionCount(a, l, r) {
  let count =0;
  if(l<r) {
    const mid = Math.floor((l+r)/2);
    count+=inversionCount(a, l, mid);
    count+=inversionCount(a, mid+1, r);
    count+=merge(a, l, mid, r);
  }
  return count;
}

function merge(a, l, mid, r) {
  const mergedArray = [];
  let count = 0;
  let i=l,j=mid+1;
  for(; i<=mid && j<=r;) {
    if(a[i]<=a[j]) {
      mergedArray.push(a[i++]);
    }else {
      mergedArray.push(a[j++]);
      count+=mid-i+1;
    }
  }
  while(i<=mid) {
    mergedArray.push(a[i++]);
  }
  
  while(j<=r) {
    mergedArray.push(a[j++]);
  }
  
  // replace value in original array
  
  for(let i=l, k=0;i<=r;i++, k++) {
    a[i]=mergedArray[k];
  }
  
  return count;
}

let arr = [4,2,5,3,1];

console.log(inversionCount(arr, 0, arr.length-1), arr);

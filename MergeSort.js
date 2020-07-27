function merge(part1, part2) {
    let i=0;
    let j=0;
    const temp = [];
    while(i<part1.length && j<part2.length) {
      if(part1[i]<part2[j]) {
        temp.push(part1[i++])
      }else {
        temp.push(part2[j++])
      }
    }
    
    for(;i<part1.length;i++) {
      temp.push(part1[i]);
    }
    for(;j<part2.length;j++) {
      temp.push(part2[j]);
    }
    return temp;
  }
  
  function mergeSort(l, h, a) {
  //   console.log(l+ ' '+h+' ', a);
    if(l<h) {
      const mid = Math.floor((l+h)/2);
      const part1 = mergeSort(l, mid,a);
      const part2 = mergeSort(mid+1,h,a);
      const sortedArray = merge(part1, part2);
      return sortedArray;
    }else {
      return [a[l]];
    }
  }
  const arr = [9,3,7,5,6,4,8,2,7,10];
  console.log(mergeSort(0, arr.length-1, arr));
  
  
  
  
  
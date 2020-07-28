
function partition(l, h, a) {
    let pivot = a[l];
    let i=l;
    let j=h;
    while(i<j) {
      do{
        i++;
      }while(a[i]<=pivot);
       do {
        j--;
      } while(a[j]>pivot);
     if(i<j) {
       swap(a, i, j);
     }
    }
    swap(a, l, j);
    return j;
}

function swap(a, i,j) {
  let temp = a[i];
  a[i]=a[j];
  a[j]=temp;
}

function quickSort(l, h, a) {
    if(l<h) {
        const pivot = partition(l, h, a);
        quickSort(l, pivot, a);
        quickSort(pivot+1, h,a);
    }
}
  const arr = [9,3,7,5,6,4,8,2,7,10];
  quickSort(0, arr.length, arr);
  console.log(arr);